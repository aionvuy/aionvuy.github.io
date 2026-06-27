function formatSourceDate(value) {
  return new Date(value + 'T12:00:00').toLocaleDateString('es-UY');
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
  if (item.area === 'montevideo') {
    contacts.address = contacts.address
      .replace(/[\s,·–—-]*Montevideo\s*$/i, '')
      .replace(/[\s,·–—-]+$/, '')
      .trim();
  }
  const list = document.createElement('ul');
  list.className = 'location-details-list';
  const address = contactListItem('Dirección', contacts.address ? [contacts.address] : []);
  const mobiles = contactListItem('Celular', contacts.mobiles, value => {
    const link = document.createElement('a');
    link.href = `https://wa.me/${internationalPhone(value)}`;
    link.target = '_blank';
    link.rel = 'noopener';
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
  [address, hours, mobiles, phones, emails].filter(Boolean).forEach(node => list.append(node));
  if (list.children.length) article.append(list);
  if (item.map) {
    const link = document.createElement('a');
    link.className = 'map-link';
    link.href = item.map;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = mapLabel || '🗺️ Abrir en el mapa ↗';
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
    if (sales) sales.textContent = 'No fue posible cargar el listado. Consultá la fuente oficial de GAC.';
    if (postSales) {
      postSales.innerHTML = `
        <div class="workshops-load-error" role="status">
          <p>No fue posible cargar el listado de talleres oficiales.</p>
          <a href="https://www.gacmotor.uy/postventas" target="_blank" rel="noopener noreferrer">Consultar postventa GAC ↗</a>
        </div>
      `;
    }
  }
}
