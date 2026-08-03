#!/usr/bin/env python3
"""Update the local UTE public charging tariff snapshot."""

from __future__ import annotations

import json
import re
import time
import unicodedata
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import URLError
from urllib.request import Request, urlopen

SOURCE = "https://portal.ute.com.uy/movilidad-sostenible-carga?tab=5"
HOME_SOURCE = "https://www.ute.com.uy/clientes/soluciones-para-el-hogar/planes-hogar/opciones-tarifarias-para-hogares#collapse-accordion-2071-2"
PLAN_SOURCE = "https://www.ute.com.uy/clientes/soluciones-para-el-hogar/planes-hogar/plan-inteligente-hogares#tab-323-8"
OUTPUT = Path(__file__).resolve().parents[1] / "data" / "ute-tarifas.json"
VAT_RATE = 0.22
FETCH_TIMEOUT_SECONDS = 45
FETCH_RETRY_DELAYS_SECONDS = (15, 30, 60)


def normalize(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = "".join(char for char in value if not unicodedata.combining(char))
    return re.sub(r"\s+", " ", value).strip().lower()


class TableParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.tables: list[list[list[str]]] = []
        self._table: list[list[str]] | None = None
        self._row: list[str] | None = None
        self._cell: list[str] | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag == "table":
            self._table = []
        elif tag == "tr" and self._table is not None:
            self._row = []
        elif tag in {"td", "th"} and self._row is not None:
            self._cell = []

    def handle_data(self, data: str) -> None:
        if self._cell is not None:
            self._cell.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag in {"td", "th"} and self._cell is not None and self._row is not None:
            self._row.append(" ".join(self._cell).strip())
            self._cell = None
        elif tag == "tr" and self._row is not None and self._table is not None:
            if self._row:
                self._table.append(self._row)
            self._row = None
        elif tag == "table" and self._table is not None:
            self.tables.append(self._table)
            self._table = None


class TextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        if data.strip():
            self.parts.append(data.strip())


def number(value: str) -> float:
    match = re.search(r"\d+(?:[.,]\d+)?", value)
    if not match:
        raise ValueError(f"No numeric tariff found in {value!r}")
    return float(match.group(0).replace(".", "").replace(",", "."))


def tariff_table(tables: list[list[list[str]]], heading: str) -> dict[str, float]:
    for table in tables:
        if not table or heading not in normalize(" ".join(table[0])):
            continue
        rows = {normalize(row[0]): number(row[1]) for row in table[1:] if len(row) >= 2}
        return {
            "base": rows["cargo base"],
            "energy": rows["energia"],
            "idle": next(value for label, value in rows.items() if label.startswith("tiempo sin carga")),
        }
    raise ValueError(f"UTE table not found: {heading}")


def fetch(source: str) -> str:
    request = Request(source, headers={"User-Agent": "AION-V-UY tariff updater/1.0"})
    attempts = len(FETCH_RETRY_DELAYS_SECONDS) + 1
    for attempt in range(1, attempts + 1):
        try:
            with urlopen(request, timeout=FETCH_TIMEOUT_SECONDS) as response:
                return response.read().decode("utf-8")
        except (TimeoutError, URLError, OSError) as exc:
            if attempt == attempts:
                raise
            delay = FETCH_RETRY_DELAYS_SECONDS[attempt - 1]
            print(
                f"UTE fetch failed for {source} "
                f"(attempt {attempt}/{attempts}: {exc}). "
                f"Retrying in {delay}s..."
            )
            time.sleep(delay)

    raise RuntimeError(f"UTE fetch failed for {source}")


def holiday_dates(text: str, year: int) -> list[str]:
    months = {
        "enero": 1, "febrero": 2, "marzo": 3, "abril": 4,
        "mayo": 5, "junio": 6, "julio": 7, "agosto": 8,
        "setiembre": 9, "septiembre": 9, "octubre": 10,
        "noviembre": 11, "diciembre": 12,
    }
    marker = f"feriados {year}"
    start = text.rfind(marker)
    if start < 0:
        raise ValueError(f"UTE holiday section not found for {year}")
    section = text[start:start + 4000]
    dates: set[str] = set()
    pattern = r"(\d{1,2})(?:\s+y\s+(\d{1,2}))?\s+de\s+(enero|febrero|marzo|abril|mayo|junio|julio|agosto|setiembre|septiembre|octubre|noviembre|diciembre)"
    for match in re.finditer(pattern, section):
        month = months[match.group(3)]
        for raw_day in (match.group(1), match.group(2)):
            if raw_day:
                dates.add(f"{year:04d}-{month:02d}-{int(raw_day):02d}")
    if len(dates) < 10:
        raise ValueError(f"UTE holiday list looks incomplete for {year}: {len(dates)} dates")
    return sorted(dates)


def home_tariff(html: str, previous: dict) -> dict[str, object]:
    parser = TextParser()
    parser.feed(html)
    text = normalize(" ".join(parser.parts))
    marker = "tarifa residencial triple horario"
    sections = [text[index:index + 1800] for index in (match.start() for match in re.finditer(marker, text))]
    section = next((item for item in sections if "horario valle" in item and "horario llano" in item), "")
    if not section:
        raise ValueError("UTE residential triple-hour tariff section not found")

    year_match = re.search(r"precio\s+(20\d{2})", section)
    if not year_match:
        raise ValueError("UTE residential tariff year not found")

    def rate(label: str) -> float:
        match = re.search(rf"horario {label}\s+\$?\s*(\d+(?:[.,]\d+)?)", section)
        if not match:
            raise ValueError(f"UTE residential tariff not found: {label}")
        return round(number(match.group(1)) * (1 + VAT_RATE), 2)

    values: dict[str, object] = {
        "year": int(year_match.group(1)),
        "source": HOME_SOURCE,
        "prices_include_vat": True,
        "vat_rate": VAT_RATE,
        "punta": rate("punta"),
        "valle": rate("valle"),
        "llano": rate("llano"),
        "power_rate": 101.50,
        "power_rate_source": "https://portal.ute.com.uy/sites/default/files/docs/Pliego%20Tarifario%20Enero%202026.pdf",
        "holidays_source": PLAN_SOURCE,
        "holidays_year": int(year_match.group(1)),
        "holidays": holiday_dates(text, int(year_match.group(1))),
    }
    comparable = {key: previous.get(key) for key in values}
    values["updated_at"] = previous.get("updated_at", str(date.today())) if comparable == values else str(date.today())
    values["checked_at"] = str(date.today())
    return values


def main() -> None:
    html = fetch(SOURCE)
    home_html = fetch(PLAN_SOURCE)

    parser = TableParser()
    parser.feed(html)
    year_match = re.search(r"Precios con IVA incluido(?:\s+para el año|\s+vigentes desde enero)\s+(20\d{2})", html, re.IGNORECASE)
    if not year_match:
        raise ValueError("UTE tariff year not found")

    values = {
        "year": int(year_match.group(1)),
        "source": SOURCE,
        "ac": tariff_table(parser.tables, "corriente alterna"),
        "dc": tariff_table(parser.tables, "corriente continua"),
    }
    previous = json.loads(OUTPUT.read_text(encoding="utf-8")) if OUTPUT.exists() else {}
    comparable = {key: previous.get(key) for key in ("year", "source", "ac", "dc")}
    values["updated_at"] = previous.get("updated_at", str(date.today())) if comparable == values else str(date.today())
    values["checked_at"] = str(date.today())
    values["home"] = home_tariff(home_html, previous.get("home", {}))
    ordered = {key: values[key] for key in ("year", "updated_at", "checked_at", "source", "ac", "dc", "home")}
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
