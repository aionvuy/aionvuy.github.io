function formatSourceDate(value) {
  const match = String(value || '').match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (!match) return 'No disponible';
  return `${match[3].padStart(2, '0')}/${match[2].padStart(2, '0')}/${match[1]}`;
}

function setSourceDate(selector, value) {
  document.querySelectorAll(selector).forEach(node => {
    node.textContent = formatSourceDate(value);
    if (node.tagName === 'TIME' && value) node.dateTime = value;
  });
}

function cleanContactText(value) {
  return String(value || '').replace(/^[\s·–—-]+|[\s·–—-]+$/g, '').trim();
}

function phoneNumbers(value) {
  return (String(value || '').match(/0?\d[\d\s]{6,}\d/g) || []).map(number => number.trim());
}

function internationalPhone(value) {
  const digits = String(value).replace(/\D/g, '').replace(/^0/, '');
  return digits.startsWith('598') ? digits : `598${digits}`;
}

function parseLocationContacts(item) {
  if (item.address || item.phones || item.mobiles || item.emails) {
    return {
      address: item.address || '',
      phones: item.phones || [],
      mobiles: item.mobiles || [],
      emails: (item.emails || []).map(email => email.toLowerCase()),
      hours: item.hours || ''
    };
  }
  const raw = (item.details || []).join(' ').replace(/\s+/g, ' ').trim();
  const pattern = /\b(Tel(?:éfono)?\.?|Cel(?:ular)?\.?|Correo|Mail|Horarios?|Horario)\s*:?\s*/gi;
  const matches = [...raw.matchAll(pattern)];
  const contacts = {address: '', phones: [], mobiles: [], emails: [], hours: ''};
  contacts.address = cleanContactText(matches.length ? raw.slice(0, matches[0].index) : raw);
  matches.forEach((match, index) => {
    const label = match[1].toLowerCase();
    const start = match.index + match[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : raw.length;
    const value = cleanContactText(raw.slice(start, end));
    if (label.startsWith('cel')) {
      contacts.mobiles.push(...phoneNumbers(value));
    } else if (label.startsWith('tel')) {
      phoneNumbers(value).forEach(number => {
        const digits = number.replace(/\D/g, '');
        (digits.startsWith('09') ? contacts.mobiles : contacts.phones).push(number);
      });
    } else if (label === 'correo' || label === 'mail') {
      contacts.emails.push(...(value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || []).map(email => email.toLowerCase()));
    } else if (label.startsWith('horario')) {
      contacts.hours = value;
    }
  });
  return contacts;
}

function contactListItem(label, values, linkBuilder) {
  if (!values || !values.length) return null;
  const item = document.createElement('li');
  const strong = document.createElement('strong');
  strong.textContent = `${label}: `;
  item.append(strong);
  values.forEach((value, index) => {
    if (index) item.append(document.createTextNode(' · '));
    item.append(linkBuilder ? linkBuilder(value) : document.createTextNode(value));
  });
  return item;
}

function standardHours(item, value) {
  const schedules = {
    'GAC Motor|Montevideo': '09:00–13:00 y 14:00–18:00.',
    'Vladimir|Montevideo': 'Lunes a viernes: 09:00–18:00. Sábados: 10:00–13:00.',
    'El Parque|Montevideo': 'Lunes a viernes: 08:30–18:00.',
    'Vladimir Automóviles|Montevideo': 'Lunes y martes: 08:30–12:30 y 14:00–18:30. Miércoles a viernes: 08:30–12:30 y 13:30–18:30.',
    'Punta Motors|Maldonado': 'Lunes a viernes: 09:00–13:00 y 14:00–18:30. Sábados: 09:00–13:00.'
  };
  return schedules[`${item.name}|${item.department}`] || cleanContactText(value)
    .replace(/\bhs\b/gi, 'h')
    .replace(/\bSabados\b/gi, 'Sábados');
}

function scheduleListItem(item, value) {
  if (!value) return null;
  const listItem = document.createElement('li');
  const strong = document.createElement('strong');
  strong.textContent = 'Horario: ';
  listItem.append(strong);
  String(standardHours(item, value)).split(/\.\s+/).filter(Boolean).forEach((line, index) => {
    if (index) listItem.append(document.createElement('br'));
    listItem.append(document.createTextNode(line.endsWith('.') ? line : `${line}.`));
  });
  return listItem;
}

function makeLocationCard(item, mapLabel = '') {
  const article = document.createElement('article');
  article.className = 'location-card';
  if (item.area !== 'montevideo') {
    const department = document.createElement('span');
    department.className = 'location-department';
    department.textContent = item.department || 'Punto de carga';
    article.append(department);
  }
  const title = document.createElement('h4');
  title.textContent = item.name;
  article.append(title);
  const contacts = parseLocationContacts(item);
  if (item.department) {
    const escapedDepartment = item.department.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    contacts.address = contacts.address
      .replace(new RegExp(`[\\s,·–—-]*${escapedDepartment}\\s*$`, 'i'), '')
      .replace(/[\s,·–—-]+$/, '')
      .trim();
  }
  const list = document.createElement('ul');
  list.className = 'location-details-list';
  const address = contactListItem('Dirección', contacts.address ? [contacts.address] : []);
  const mobiles = contactListItem('WhatsApp', contacts.mobiles, value => {
    const link = document.createElement('a');
    link.href = `https://wa.me/${internationalPhone(value)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = value;
    link.setAttribute('aria-label', `Abrir WhatsApp para ${value}`);
    return link;
  });
  const phones = contactListItem('Teléfono fijo', contacts.phones, value => {
    const link = document.createElement('a');
    link.href = `tel:+${internationalPhone(value)}`;
    link.textContent = value;
    return link;
  });
  const emails = contactListItem('Correo', contacts.emails, value => {
    const link = document.createElement('a');
    link.href = `mailto:${value}`;
    link.textContent = value.toLowerCase();
    return link;
  });
  const hours = scheduleListItem(item, contacts.hours);
  [address, mobiles, phones, emails, hours].filter(Boolean).forEach(node => list.append(node));
  if (list.children.length) article.append(list);
  if (item.map) {
    const link = document.createElement('a');
    link.className = 'map-link';
    link.href = item.map;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const icon = document.createElement('i');
    icon.className = 'mdi mdi-map-marker-outline';
    icon.setAttribute('aria-hidden', 'true');
    link.append(icon, document.createTextNode(` ${mapLabel || 'Abrir en el mapa'}`));
    const newTab = document.createElement('span');
    newTab.className = 'sr-only';
    newTab.textContent = ' (se abre en una pestaña nueva)';
    link.append(newTab);
    article.append(link);
  }
  return article;
}

function renderGroupedLocations(container, items) {
  container.replaceChildren();
  const collator = new Intl.Collator('es-UY', {sensitivity: 'base'});
  const sortByName = locations => [...locations].sort((a, b) => {
    const departmentOrder = collator.compare(a.department || '', b.department || '');
    return departmentOrder || collator.compare(a.name || '', b.name || '');
  });
  const groups = [
    ['Montevideo', sortByName(items.filter(item => item.area === 'montevideo'))],
    ['Interior del país', sortByName(items.filter(item => item.area === 'interior'))]
  ];
  groups.forEach(([label, locations]) => {
    if (!locations.length) return;
    const section = document.createElement('section');
    section.className = 'location-section';
    const heading = document.createElement('h3');
    heading.className = 'location-group-title';
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
    document.querySelectorAll('[data-eone-updated]').forEach(node => node.textContent = formatSourceDate(data.updated_at));
    const checkedDate = data.checked_at ? new Date(data.checked_at + 'T12:00:00') : null;
    const checkedLabel = checkedDate && !Number.isNaN(checkedDate.getTime())
      ? formatSourceDate(data.checked_at)
      : 'No disponible';
    document.querySelectorAll('[data-eone-checked]').forEach(node => node.textContent = checkedLabel);
  } catch (error) {
    container.innerHTML = `
      <div class="operator-load-error" role="status">
        <p>No fue posible cargar el listado de puntos eOne.</p>
        <a href="https://eone.eco/puntos-de-carga/" target="_blank" rel="noopener noreferrer">Consultar puntos eOne ↗</a>
      </div>
    `;
  }
}

async function loadGacNetwork() {
  const sales = document.querySelector('[data-gac-sales]');
  const salesStatus = document.querySelector('[data-gac-sales-status]');
  const postSales = document.querySelector('[data-gac-post-sales]');
  const postSalesStatus = document.querySelector('[data-gac-post-sales-status]');
  if (!sales && !postSales) return;
  try {
    const response = await fetch('data/gac-red.json', {cache: 'no-store'});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (sales) {
      renderGroupedLocations(sales, data.sales);
      sales.setAttribute('aria-busy', 'false');
      if (salesStatus) salesStatus.textContent = 'Automotoras oficiales actualizadas.';
    }
    if (postSales) {
      renderGroupedLocations(postSales, [...(data.post_sales || []), ...(data.community_post_sales || [])]);
      postSales.setAttribute('aria-busy', 'false');
      if (postSalesStatus) postSalesStatus.textContent = 'Talleres de postventa actualizados.';
    }
    setSourceDate('[data-gac-sales-updated]', data.sales_updated_at || data.updated_at);
    setSourceDate('[data-gac-post-sales-updated], [data-gac-date]', data.post_sales_updated_at || data.updated_at);
    setSourceDate('[data-gac-updated]', data.updated_at);
    setSourceDate('[data-gac-checked]', data.checked_at);
  } catch (error) {
    if (sales) {
      sales.setAttribute('aria-busy', 'false');
      sales.innerHTML = `
        <div class="network-load-error" role="status">
          <p>No fue posible cargar el listado de automotoras oficiales.</p>
          <a href="https://www.gacmotor.uy/ventas" target="_blank" rel="noopener noreferrer"><i class="mdi mdi-link-variant" aria-hidden="true"></i> Consultar ventas GAC <span class="sr-only">(se abre en una pestaña nueva)</span></a>
        </div>
      `;
      if (salesStatus) salesStatus.textContent = 'No fue posible cargar el listado de automotoras oficiales.';
    }
    if (postSales) {
      postSales.setAttribute('aria-busy', 'false');
      postSales.innerHTML = `
        <div class="network-load-error" role="status">
          <p>No fue posible cargar el listado de centros oficiales de postventa.</p>
          <a href="https://www.gacmotor.uy/postventas" target="_blank" rel="noopener noreferrer"><i class="mdi mdi-link-variant" aria-hidden="true"></i> Consultar postventa GAC <span class="sr-only">(se abre en una pestaña nueva)</span></a>
        </div>
      `;
      if (postSalesStatus) postSalesStatus.textContent = 'No fue posible cargar el listado de centros oficiales de postventa.';
    }
  }
}
