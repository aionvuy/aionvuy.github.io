#!/usr/bin/env python3
"""Update GAC Uruguay post-sales workshops from the official post-sales page.

Source: https://www.gacmotor.uy/postventas
Workflow: .github/workflows/update-gac-postventas.yml

The updater is intentionally conservative: if the official page cannot be
processed, or if the extracted list looks incomplete, it leaves the current
JSON untouched so the published site keeps showing the last valid data.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "data" / "gac-red.json"
SOURCE_URL = "https://www.gacmotor.uy/postventas"
DEPARTMENTS = (
    "Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida",
    "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha",
    "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres",
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
        super().__init__(convert_charrefs=True)
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


def fetch_html(url: str) -> str:
    request = Request(url, headers={"User-Agent": "AION-V-UY post-sales updater/1.0"})
    with urlopen(request, timeout=45) as response:
        return response.read().decode("utf-8", errors="replace")


def parse_tree(html: str) -> Node:
    parser = TreeParser()
    parser.feed(html)
    return parser.root


def child_text_lines(node: Node) -> list[str]:
    lines: list[str] = []
    for child in node.children:
        if child.tag in {"script", "style"}:
            continue
        value = child.text()
        if value and value not in lines:
            lines.append(value)
    return lines


def map_links(node: Node) -> list[str]:
    links: list[str] = []
    for anchor in node.find_all("a"):
        href = anchor.attrs.get("href", "")
        if any(token in href for token in ("maps.app.goo.gl", "google.com/maps", "goo.gl/maps")) and href not in links:
            links.append(href)
    return links


def department_from(title: str, text: str, area: str) -> str:
    if area == "montevideo":
        return "Montevideo"
    if " - " in title:
        candidate = title.rsplit(" - ", 1)[-1].strip()
        if candidate:
            return candidate
    return next((name for name in DEPARTMENTS if name.lower() in text.lower()), "Interior")


def extract_post_sales(root: Node) -> list[dict[str, object]]:
    locations: list[dict[str, object]] = []
    for card in root.find_all("div", "grid-item"):
        headings = card.find_all("h3")
        if not headings:
            continue
        title = headings[0].text()
        if not title:
            continue
        area = "montevideo" if "montevideo" in card.classes else "interior"
        department = department_from(title, card.text(), area)
        details = [line for line in child_text_lines(card) if line != title]
        item: dict[str, object] = {
            "name": title.rsplit(" - ", 1)[0].strip(),
            "department": department,
            "area": area,
            "details": details,
        }
        links = map_links(card)
        if links:
            item["map"] = links[0]
        locations.append(item)
    locations = sorted(locations, key=lambda item: (item["area"] != "montevideo", str(item["department"]), str(item["name"])))
    if not locations:
        raise ValueError("No post-sales workshops found in official GAC page")
    return locations


def validate_locations(locations: list[dict[str, object]], previous: list[dict[str, object]]) -> None:
    if len(locations) < len(previous):
        raise ValueError(f"Extracted {len(locations)} workshops, fewer than current {len(previous)}; refusing to overwrite")
    for item in locations:
        if not item.get("name") or not item.get("department") or not item.get("area"):
            raise ValueError(f"Incomplete workshop identity: {item!r}")
        details = item.get("details")
        if not isinstance(details, list) or not any(str(value).strip() for value in details):
            raise ValueError(f"Workshop has no contact details: {item!r}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Update data/gac-red.json with official GAC post-sales workshops")
    parser.add_argument("--dry-run", action="store_true", help="Validate source and report whether data would change without writing")
    args = parser.parse_args()

    try:
        current = json.loads(DATA_PATH.read_text(encoding="utf-8"))
        previous_post_sales = current.get("post_sales", [])
        html = fetch_html(SOURCE_URL)
        post_sales = extract_post_sales(parse_tree(html))
        validate_locations(post_sales, previous_post_sales)
    except (OSError, HTTPError, URLError, json.JSONDecodeError, ValueError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        print("Existing data/gac-red.json was not modified.", file=sys.stderr)
        return 1

    comparable_current = {
        "post_sales_source": current.get("post_sales_source"),
        "post_sales": previous_post_sales,
    }
    comparable_new = {
        "post_sales_source": SOURCE_URL,
        "post_sales": post_sales,
    }
    if comparable_current == comparable_new:
        print(f"No real post-sales data changes found. Workshops checked: {len(post_sales)}.")
        return 0

    next_data = dict(current)
    today = date.today().isoformat()
    next_data["post_sales_source"] = SOURCE_URL
    next_data["post_sales"] = post_sales
    next_data["updated_at"] = today
    next_data["checked_at"] = today

    if args.dry_run:
        print(f"DRY RUN: data/gac-red.json would be updated with {len(post_sales)} post-sales workshops.")
        return 0

    DATA_PATH.write_text(json.dumps(next_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated data/gac-red.json with {len(post_sales)} post-sales workshops from {SOURCE_URL}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
