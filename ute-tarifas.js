const UTE_TARIFF_FALLBACK = {
  year: 2026,
  updated_at: '2026-06-18',
  source: 'https://portal.ute.com.uy/movilidad-sostenible-carga?tab=5',
  ac: {base: 54.8, energy: 10.4, idle: 9.6},
  dc: {base: 132.9, energy: 11.8, idle: 12.3}
};

function formatUtePrice(value) {
  return '$' + Number(value).toLocaleString('es-UY', {maximumFractionDigits: 2});
}

function renderUteTariffs(data, isFallback = false) {
  const updatedLabel = new Date(data.updated_at + 'T12:00:00').toLocaleDateString('es-UY');
  document.querySelectorAll('[data-ute]').forEach(element => {
    const [group, field] = element.dataset.ute.split('.');
    if (data[group] && Number.isFinite(Number(data[group][field]))) {
      element.textContent = formatUtePrice(data[group][field]);
    }
  });
  document.querySelectorAll('[data-ute-year]').forEach(element => {
    element.textContent = data.year;
  });
  document.querySelectorAll('[data-ute-status]').forEach(element => {
    element.textContent = isFallback
      ? 'Se muestran los últimos valores disponibles.'
      : `Datos oficiales actualizados el ${updatedLabel}.`;
  });
  document.querySelectorAll('[data-ute-updated]').forEach(element => {
    element.textContent = isFallback ? `${updatedLabel} (últimos valores disponibles)` : updatedLabel;
  });
  document.querySelectorAll('[data-ute-verified]').forEach(element => {
    element.textContent = updatedLabel;
  });
}

async function loadUteTariffs(onLoad = renderUteTariffs) {
  try {
    const response = await fetch('data/ute-tarifas.json', {cache: 'no-store'});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    onLoad(data, false);
  } catch (error) {
    onLoad(UTE_TARIFF_FALLBACK, true);
  }
}
