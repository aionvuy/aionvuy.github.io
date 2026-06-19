function formatSourceDate(value) {
  return new Date(value + 'T12:00:00').toLocaleDateString('es-UY');
}

function makeLocationCard(item, mapLabel = '') {
  const article = document.createElement('article');
  article.className = 'location-card';
  const department = document.createElement('span');
  department.className = 'location-department';
  department.textContent = item.department || 'Punto de carga';
  const title = document.createElement('h4');
  title.textContent = item.name;
  const details = document.createElement('p');
  details.className = 'location-details';
  details.textContent = item.address || (item.details || []).join(' · ');
  article.append(department, title, details);
  if (item.map) {
    const link = document.createElement('a');
    link.className = 'map-link';
    link.href = item.map;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = mapLabel || 'Abrir en el mapa ↗';
    article.append(link);
  }
  return article;
}

function renderGroupedLocations(container, items) {
  container.replaceChildren();
  const groups = [
    ['Montevideo', items.filter(item => item.area === 'montevideo')],
    ['Interior', items.filter(item => item.area === 'interior')]
  ];
  groups.forEach(([label, locations]) => {
    if (!locations.length) return;
    const section = document.createElement('section');
    section.className = 'location-section';
    const heading = document.createElement('h3');
    heading.className = 'section-title';
    heading.textContent = label;
    const grid = document.createElement('div');
    grid.className = 'location-grid';
    locations.forEach(item => grid.append(makeLocationCard(item)));
    section.append(heading, grid);
    container.append(section);
  });
}

async function loadEonePoints() {
  const container = document.querySelector('[data-eone-points]');
  if (!container) return;
  try {
    const response = await fetch('data/eone-puntos.json', {cache: 'no-store'});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    container.replaceChildren(...data.points.map(point => makeLocationCard({...point, department: 'eOne'})));
    document.querySelectorAll('[data-eone-date]').forEach(node => node.textContent = formatSourceDate(data.updated_at));
  } catch (error) {
    container.textContent = 'No fue posible cargar el listado. Consultá la fuente oficial de eOne.';
  }
}

async function loadGacNetwork() {
  const sales = document.querySelector('[data-gac-sales]');
  const postSales = document.querySelector('[data-gac-post-sales]');
  if (!sales && !postSales) return;
  try {
    const response = await fetch('data/gac-red.json', {cache: 'no-store'});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (sales) renderGroupedLocations(sales, data.sales);
    if (postSales) renderGroupedLocations(postSales, data.post_sales);
    document.querySelectorAll('[data-gac-date]').forEach(node => node.textContent = formatSourceDate(data.updated_at));
  } catch (error) {
    [sales, postSales].filter(Boolean).forEach(node => {
      node.textContent = 'No fue posible cargar el listado. Consultá la fuente oficial de GAC.';
    });
  }
}
