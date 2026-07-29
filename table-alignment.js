(() => {
  const allowedNumericWords = new Set([
    "a",
    "ac",
    "aprox",
    "ccs",
    "ccs2",
    "cm",
    "cv",
    "dc",
    "h",
    "hp",
    "hs",
    "hasta",
    "kg",
    "km",
    "kw",
    "kwh",
    "l",
    "m",
    "mes",
    "meses",
    "min",
    "mm",
    "mas",
    "nedc",
    "nm",
    "o",
    "s",
    "tipo",
    "usd",
    "uyu",
    "wltp",
    "ano",
    "anos"
  ]);

  const alignmentClasses = [
    "table-cell-text",
    "table-cell-numeric",
    "table-cell-center"
  ];

  const cellText = (cell) => {
    const copy = cell.cloneNode(true);
    copy.querySelectorAll(".sr-only, [aria-hidden='true']").forEach((item) => item.remove());
    return copy.textContent.replace(/\s+/g, " ").trim();
  };

  const isNumericValue = (text) => {
    if (!/\d/.test(text)) return false;

    const normalized = text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const words = normalized.match(/[a-z]+/g) || [];

    return words.every((word) => allowedNumericWords.has(word));
  };

  const setAlignment = (cell, alignment) => {
    cell.classList.remove(...alignmentClasses);
    if (alignment === "center") {
      cell.classList.add("table-cell-center");
      return;
    }
    cell.classList.add(alignment === "right" ? "table-cell-numeric" : "table-cell-text");
  };

  const alignTable = (table) => {
    const headers = [...table.querySelectorAll("thead th")];
    const columnAlignments = new Map();

    headers.forEach((cell, index) => {
      cell.classList.add("table-heading-cell");
      const requested = cell.dataset.columnAlign;
      if (requested === "left" || requested === "center" || requested === "right") {
        columnAlignments.set(index, requested);
      }
      const label = cellText(cell).toLowerCase();
      if (/^(acción|acciones|control|controles|detalle)$/.test(label)) {
        columnAlignments.set(index, "center");
      }
    });

    table.querySelectorAll("tbody th").forEach((cell) => {
      setAlignment(cell, "left");
    });

    table.querySelectorAll("tbody td").forEach((cell) => {
      const requested = cell.dataset.tableAlign;
      if (requested === "left" || requested === "center" || requested === "right") {
        setAlignment(cell, requested);
        return;
      }
      if (cell.colSpan === 1 && columnAlignments.has(cell.cellIndex)) {
        setAlignment(cell, columnAlignments.get(cell.cellIndex));
        return;
      }
      setAlignment(cell, isNumericValue(cellText(cell)) ? "right" : "left");
    });
  };

  const alignAllTables = () => {
    document.querySelectorAll("table").forEach(alignTable);
  };

  let scheduled = false;
  const scheduleAlignment = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      alignAllTables();
      scheduled = false;
    });
  };

  const start = () => {
    alignAllTables();
    new MutationObserver(scheduleAlignment).observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
