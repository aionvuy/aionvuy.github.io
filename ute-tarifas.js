const UTE_TARIFF_FALLBACK = {
  year: 2026,
  updated_at: '2026-06-18',
  checked_at: '2026-06-27',
  source: 'https://portal.ute.com.uy/movilidad-sostenible-carga?tab=5',
  ac: {base: 54.8, energy: 10.4, idle: 9.6},
  dc: {base: 132.9, energy: 11.8, idle: 12.3},
  home: {
    year: 2025,
    updated_at: '2026-06-27',
    checked_at: '2026-06-27',
    source: 'https://www.ute.com.uy/clientes/soluciones-para-el-hogar/planes-hogar/opciones-tarifarias-para-hogares#collapse-accordion-2071-2',
    prices_include_vat: true,
    vat_rate: 0.22,
    punta: 14.68,
    valle: 2.98,
    llano: 6.31
  }
};

function formatUtePrice(value) {
  return '$' + Number(value).toLocaleString('es-UY', {maximumFractionDigits: 2});
}

function renderUteTariffs(data, isFallback = false) {
  const updatedLabel = new Date(data.updated_at + 'T12:00:00').toLocaleDateString('es-UY');
  const checkedDate = data.checked_at ? new Date(data.checked_at + 'T12:00:00') : null;
  const checkedLabel = checkedDate && !Number.isNaN(checkedDate.getTime())
    ? checkedDate.toLocaleDateString('es-UY')
    : 'No disponible';
  const homeUpdatedDate = data.home?.updated_at ? new Date(data.home.updated_at + 'T12:00:00') : null;
  const homeCheckedDate = data.home?.checked_at ? new Date(data.home.checked_at + 'T12:00:00') : null;
  const homeUpdatedLabel = homeUpdatedDate && !Number.isNaN(homeUpdatedDate.getTime())
    ? homeUpdatedDate.toLocaleDateString('es-UY')
    : 'No disponible';
  const homeCheckedLabel = homeCheckedDate && !Number.isNaN(homeCheckedDate.getTime())
    ? homeCheckedDate.toLocaleDateString('es-UY')
    : 'No disponible';
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
    element.textContent = checkedLabel;
  });
  document.querySelectorAll('[data-home-ute-updated]').forEach(element => {
    element.textContent = homeUpdatedLabel;
  });
  document.querySelectorAll('[data-home-ute-checked]').forEach(element => {
    element.textContent = homeCheckedLabel;
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
