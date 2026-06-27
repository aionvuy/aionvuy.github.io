#!/usr/bin/env python3
"""Refresh eOne charging points and GAC sales/post-sales networks."""

from __future__ import annotations

import json
import re
from dataclasses import dataclass, field
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
SOURCES = {
    "eone": "https://eone.eco/puntos-de-carga/",
    "sales": "https://www.gacmotor.uy/ventas",
    "post_sales": "https://www.gacmotor.uy/postventas",
}
DEPARTMENTS = (
    "Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida",
    "Lavalleja", "Maldonado", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto",
    "San José", "Soriano", "Tacuarembó", "Treinta y Tres",
)


@dataclass
class Node:
    tag: str
    attrs: dict[str, str] = field(default_factory=dict)
    children: list["Node"] = field(default_factory=list)
    own_text: list[str] = field(default_factory=list)

    @property
    def classes(self) -> set[str]:
        return set(self.attrs.get("class", "").split())

    def text(self) -> str:
        parts = self.own_text + [child.text() for child in self.children]
        return re.sub(r"\s+", " ", " ".join(filter(None, parts))).strip()

    def find_all(self, tag: str | None = None, class_name: str | None = None) -> list["Node"]:
        matches: list[Node] = []
        if (tag is None or self.tag == tag) and (class_name is None or class_name in self.classes):
            matches.append(self)
        for child in self.children:
            matches.extend(child.find_all(tag, class_name))
        return matches


class TreeParser(HTMLParser):
    VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}

    def __init__(self) -> None:
        super().__init__()
        self.root = Node("document")
        self.stack = [self.root]

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        node = Node(tag, {key: value or "" for key, value in attrs})
        self.stack[-1].children.append(node)
        if tag not in self.VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.handle_starttag(tag, attrs)
        if tag not in self.VOID:
            self.stack.pop()

    def handle_endtag(self, tag: str) -> None:
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                break

    def handle_data(self, data: str) -> None:
        clean = re.sub(r"\s+", " ", data).strip()
        if clean:
            self.stack[-1].own_text.append(clean)


def fetch(url: str) -> Node:
    request = Request(url, headers={"User-Agent": "AION-V-UY data updater/1.0"})
    with urlopen(request, timeout=45) as response:
        html = response.read().decode("utf-8", errors="replace")
    parser = TreeParser()
    parser.feed(html)
    return parser.root


def text_lines(node: Node) -> list[str]:
    lines: list[str] = []
    for child in node.children:
        value = child.text()
        if value and value not in lines:
            lines.append(value)
    return lines


def gac_locations(root: Node) -> list[dict[str, object]]:
    locations: list[dict[str, object]] = []
    for card in root.find_all("div", "grid-item"):
        headings = card.find_all("h3")
        if not headings:
            continue
        title = headings[0].text()
        area = "montevideo" if "montevideo" in card.classes else "interior"
        if area == "montevideo":
            department = "Montevideo"
        elif " - " in title:
            department = title.rsplit(" - ", 1)[-1].strip()
        else:
            department = next((name for name in DEPARTMENTS if name in card.text()), "Interior")
        details = [line for line in text_lines(card) if line != title]
        locations.append({
            "name": title.rsplit(" - ", 1)[0].strip(),
            "department": department,
            "area": area,
            "details": details,
        })
    if not locations:
        raise ValueError("No GAC locations found")
    return sorted(locations, key=lambda item: (item["area"] != "montevideo", str(item["department"]), str(item["name"])))


def eone_points(root: Node) -> list[dict[str, str]]:
    texts: list[str] = []
    for module in root.find_all("div", "et_clickable"):
        if "et_pb_text" not in module.classes:
            continue
        value = module.text()
        if value:
            texts.append(value)
    if len(texts) < 2 or len(texts) % 2:
        raise ValueError(f"Unexpected eOne point structure: {len(texts)} text fields")

    links: list[str] = []
    for anchor in root.find_all("a"):
        href = anchor.attrs.get("href", "")
        if "maps.app.goo.gl" in href and href not in links:
            links.append(href)
    points = [
        {"name": texts[index], "address": texts[index + 1], "map": links[index // 2] if index // 2 < len(links) else ""}
        for index in range(0, len(texts), 2)
    ]
    return points


def write_if_changed(path: Path, values: dict[str, object], comparable_keys: tuple[str, ...]) -> None:
    previous = json.loads(path.read_text(encoding="utf-8")) if path.exists() else {}
    same = all(previous.get(key) == values.get(key) for key in comparable_keys)
    values["updated_at"] = previous.get("updated_at", str(date.today())) if same else str(date.today())
    values["checked_at"] = str(date.today())
    ordered = {
        "updated_at": values.pop("updated_at"),
        "checked_at": values.pop("checked_at"),
        **values,
    }
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    eone = {"source": SOURCES["eone"], "points": eone_points(fetch(SOURCES["eone"]))}
    gac = {
        "sales_source": SOURCES["sales"],
        "post_sales_source": SOURCES["post_sales"],
        "sales": gac_locations(fetch(SOURCES["sales"])),
        "post_sales": gac_locations(fetch(SOURCES["post_sales"])),
    }
    write_if_changed(ROOT / "data" / "eone-puntos.json", eone, ("source", "points"))
    write_if_changed(ROOT / "data" / "gac-red.json", gac, ("sales_source", "post_sales_source", "sales", "post_sales"))


if __name__ == "__main__":
    main()
