#!/usr/bin/env python3
"""Update the local USD/UYU selling-rate snapshot."""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen

SOURCE = "https://uy.dolarapi.com/v1/cotizaciones/usd"
OUTPUT = Path(__file__).resolve().parents[1] / "data" / "usd-uyu.json"


def main() -> None:
    request = Request(SOURCE, headers={"User-Agent": "AION-V-UY exchange-rate updater/1.0"})
    with urlopen(request, timeout=30) as response:
        payload = json.loads(response.read().decode("utf-8"))

    rate = float(payload["venta"])
    if rate <= 0:
        raise ValueError("Invalid USD/UYU selling rate")

    values = {
        "rate": rate,
        "rate_updated_at": payload["fechaActualizacion"],
        "checked_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "source": SOURCE,
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(values, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
