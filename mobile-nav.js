(function () {
  const MOBILE_QUERY = '(max-width: 991px)';
  const NAV_GROUPS = [
    { label: null, links: ['index.html'] },
    { label: 'Vehículo', links: ['especificaciones-versiones.html', 'seguridad.html', 'comandos.html'] },
    { label: 'Carga', links: ['carga-publica.html', 'carga-casa.html', 'aplicaciones.html', 'gestiones-ute.html'] },
    { label: 'Propiedad', links: ['red.html', 'mantenimiento-postventa.html', 'costos.html'] },
    { label: 'Comunidad', links: ['videos.html', 'problemas.html', 'preguntas.html'] },
  ];

  const NAV_LABELS = {
    'index.html': 'Inicio',
    'especificaciones-versiones.html': 'Modelos y datos',
    'especificaciones.html': 'Especificaciones',
    'comparativa.html': 'Comparativa',
    'seguridad.html': 'Seguridad',
    'comandos.html': 'Comandos de voz',
    'carga-publica.html': 'Pública',
    'carga-casa.html': 'En casa',
    'aplicaciones.html': 'Apps',
    'gestiones-ute.html': 'Gestiones UTE',
    'red.html': 'Red GAC',
    'mantenimiento-postventa.html': 'Mantenimiento',
    'costos.html': 'Costos',
    'videos.html': 'Videos y experiencias',
    'problemas.html': 'Problemas',
    'preguntas.html': 'Preguntas',
  };

  const NAV_ACCESSIBLE_LABELS = {
    'carga-publica.html': 'Carga pública',
    'carga-casa.html': 'Carga en casa',
  };

  const NAV_ICONS = {
    'index.html': 'mdi-home-outline',
    'especificaciones.html': 'mdi-car-outline',
    'comparativa.html': 'mdi-scale-balance',
    'especificaciones-versiones.html': 'mdi-file-table-outline',
    'seguridad.html': 'mdi-shield-check-outline',
    'carga-publica.html': 'mdi-ev-station',
    'aplicaciones.html': 'mdi-cellphone',
    'carga-casa.html': 'mdi-home-lightning-bolt-outline',
    'gestiones-ute.html': 'mdi-file-document-check-outline',
    'red.html': 'mdi-map-marker-outline',
    'mantenimiento-postventa.html': 'mdi-tools',
    'costos.html': 'mdi-credit-card-outline',
    'comandos.html': 'mdi-microphone-outline',
    'videos.html': 'mdi-video-outline',
    'problemas.html': 'mdi-alert-outline',
    'preguntas.html': 'mdi-help-circle-outline',
  };

  const PAGE_ICONS = {
    'index.html': 'mdi-car-outline',
    'aplicaciones.html': 'mdi-cellphone',
    'calculadora-casa.html': 'mdi-home-lightning-bolt-outline',
    'calculadora-publica.html': 'mdi-calculator-variant-outline',
    'calculadora.html': 'mdi-calculator-variant-outline',
    'carga-publica.html': 'mdi-ev-station',
    'comandos.html': 'mdi-microphone-outline',
    'comparativa.html': 'mdi-scale-balance',
    'especificaciones-versiones.html': 'mdi-file-table-outline',
    'costos.html': 'mdi-credit-card-outline',
    'preguntas.html': 'mdi-help-circle-outline',
    'mantenimiento-postventa.html': 'mdi-tools',
    'problemas.html': 'mdi-alert-outline',
    'red.html': 'mdi-map-marker-outline',
    'seguridad.html': 'mdi-shield-check-outline',
    'especificaciones.html': 'mdi-car-outline',
    'carga-casa.html': 'mdi-home-lightning-bolt-outline',
    'gestiones-ute.html': 'mdi-file-document-check-outline',
    'videos.html': 'mdi-video-outline',
  };

  const EMOJI_ICON_MAP = new Map([
    ['⚡', 'mdi-lightning-bolt-outline'], ['🔌', 'mdi-power-plug-outline'], ['🔋', 'mdi-battery-outline'],
    ['🏠', 'mdi-home-outline'], ['📱', 'mdi-cellphone'], ['🧮', 'mdi-calculator-variant-outline'],
    ['📊', 'mdi-chart-bar'], ['📚', 'mdi-bookshelf'], ['🛡️', 'mdi-shield-check-outline'],
    ['🧾', 'mdi-receipt-text-outline'], ['🚘', 'mdi-car-outline'], ['🚙', 'mdi-car-outline'],
    ['🔧', 'mdi-wrench-outline'], ['🧰', 'mdi-toolbox-outline'], ['🛞', 'mdi-tire'],
    ['🔁', 'mdi-repeat'], ['✅', 'mdi-check'], ['📍', 'mdi-map-marker-outline'],
    ['🎙️', 'mdi-microphone-outline'], ['🎥', 'mdi-video-outline'], ['🧪', 'mdi-flask-outline'],
    ['🎵', 'mdi-music-note-outline'], ['⚙️', 'mdi-cog-outline'], ['⚠️', 'mdi-alert-outline'],
    ['📐', 'mdi-ruler-square'], ['✨', 'mdi-shimmer'], ['🔗', 'mdi-link-variant'],
    ['🧭', 'mdi-compass-outline'], ['🎨', 'mdi-palette-outline'], ['🚒', 'mdi-fire-truck'],
    ['❓', 'mdi-help-circle-outline'], ['ℹ️', 'mdi-information-outline'], ['🌡️', 'mdi-thermometer'],
    ['⚖️', 'mdi-scale-balance'], ['🕒', 'mdi-clock-outline'], ['⏱️', 'mdi-timer-outline'],
    ['💰', 'mdi-cash'], ['💲', 'mdi-currency-usd'], ['💳', 'mdi-credit-card-outline'],
    ['📋', 'mdi-content-copy'], ['↺', 'mdi-refresh'],
  ]);

  const pageName = () => window.location.pathname.split('/').pop() || 'index.html';
  const activeNavPage = () => ({
    'calculadora-casa.html': 'carga-casa.html',
    'calculadora-publica.html': 'carga-publica.html',
    'calculadora.html': 'carga-publica.html',
    'especificaciones.html': 'especificaciones-versiones.html',
    'comparativa.html': 'especificaciones-versiones.html',
  }[pageName()] || pageName());

  const mdiIcon = (name, extraClass = '') => {
    const icon = document.createElement('i');
    icon.className = `mdi ${name}${extraClass ? ` ${extraClass}` : ''}`;
    icon.setAttribute('aria-hidden', 'true');
    return icon;
  };

  const replaceLeadingEmoji = (element, fallbackIcon) => {
    if (!element || element.dataset.iconEnhanced === 'true') return;
    if (element.querySelector('.mdi, svg')) {
      element.dataset.iconEnhanced = 'true';
      return;
    }
    const firstTextNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    let iconName = fallbackIcon;
    if (firstTextNode) {
      const value = firstTextNode.textContent.trimStart();
      for (const [emoji, mappedIcon] of EMOJI_ICON_MAP) {
        if (value.startsWith(emoji)) {
          firstTextNode.textContent = firstTextNode.textContent.replace(emoji, '').replace(/^\s+/, '');
          iconName = mappedIcon;
          break;
        }
      }
    }
    if (iconName) element.prepend(mdiIcon(iconName, 'heading-icon'));
    element.dataset.iconEnhanced = 'true';
  };

  const enhanceNavigation = () => {
    document.querySelectorAll('.sidebar-form').forEach((item) => item.remove());
    const desktopNav = document.getElementById('sidebar-nav');
    if (!desktopNav) return;
    const currentPage = activeNavPage();
    desktopNav.replaceChildren();

    NAV_GROUPS.forEach((group) => {
      if (group.label) {
        const label = document.createElement('div');
        label.className = 'nav-group-label';
        label.textContent = group.label;
        desktopNav.append(label);
      }

      group.links.forEach((href) => {
        const link = document.createElement('a');
        link.href = href;
        if (href === currentPage) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
        if (NAV_ACCESSIBLE_LABELS[href]) {
          link.setAttribute('aria-label', NAV_ACCESSIBLE_LABELS[href]);
        }

        const iconSlot = document.createElement('span');
        iconSlot.className = 'nav-icon';
        iconSlot.setAttribute('aria-hidden', 'true');
        iconSlot.append(mdiIcon(NAV_ICONS[href]));
        link.append(iconSlot, document.createTextNode(` ${NAV_LABELS[href]}`));
        desktopNav.append(link);
      });
    });

    window.requestAnimationFrame(() => {
      const activeLink = desktopNav.querySelector('[aria-current="page"]');
      if (!activeLink || window.matchMedia(MOBILE_QUERY).matches) return;
      const navRect = desktopNav.getBoundingClientRect();
      const activeRect = activeLink.getBoundingClientRect();
      if (activeRect.top < navRect.top) {
        desktopNav.scrollTop -= navRect.top - activeRect.top;
      } else if (activeRect.bottom > navRect.bottom) {
        desktopNav.scrollTop += activeRect.bottom - navRect.bottom;
      }
    });
  };

  const enhanceHeadings = () => {
    replaceLeadingEmoji(document.querySelector('h1.page-title'), PAGE_ICONS[pageName()]);
    document.querySelectorAll('h2.section-title, h2.calc-section-title, .home-calc-section h2, h3.section-title').forEach((heading) => {
      replaceLeadingEmoji(heading);
    });
    document.querySelectorAll('.nav-card-icon').forEach((slot) => {
      if (slot.querySelector('.mdi, svg')) return;
      const text = slot.textContent.trim();
      const iconName = EMOJI_ICON_MAP.get(text) || 'mdi-arrow-right';
      slot.replaceChildren(mdiIcon(iconName));
    });
  };

  const enhanceActions = () => {
    document.querySelectorAll('a.action-link, a.primary, a.secondary, button.calc-btn, button.calc-secondary-btn, button.faq-copy-button, .section-jump-nav a, .calc-jump-nav a, .specs-jump-nav a, .comparison-jump-nav a, .home-version-actions a').forEach((control) => {
      if (control.classList.contains('whatsapp-link')) return;
      const href = control.getAttribute('href') || '';
      if (control.classList.contains('youtube-link') || /play\.google\.com|apps\.apple\.com/.test(href)) return;
      const text = control.textContent.replace(/\s+/g, ' ').trim();
      let iconName = 'mdi-link-variant';
      const firstTextNode = [...control.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (firstTextNode) {
        const value = firstTextNode.textContent.trimStart();
        for (const [emoji, mappedIcon] of EMOJI_ICON_MAP) {
          if (value.startsWith(emoji)) {
            firstTextNode.textContent = firstTextNode.textContent.replace(emoji, '').replace(/^\s+/, '');
            iconName = mappedIcon;
            break;
          }
        }
      }
      if (/youtube|video|reseña|crash/i.test(text) || /youtu\.be|youtube\.com/.test(href)) iconName = 'mdi-play';
      else if (/calcul/i.test(text)) iconName = 'mdi-calculator-variant-outline';
      else if (/restablecer/i.test(text)) iconName = 'mdi-refresh';
      else if (/cargar en casa/i.test(text)) iconName = 'mdi-home-lightning-bolt-outline';
      else if (control.classList.contains('faq-copy-button') || /copiar/i.test(text)) iconName = 'mdi-content-copy';
      else if (/\bapps?\b/i.test(text)) iconName = 'mdi-cellphone';
      if (control.querySelector('.mdi, svg')) return;
      control.prepend(mdiIcon(iconName));
    });

    document.querySelectorAll('.version-arrival-title, .info-box > strong:first-child, .warning-box > strong:first-child, .callout-title').forEach((label) => {
      replaceLeadingEmoji(label);
    });
  };

  const ready = (callback) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  };

  const addStructuredData = () => {
    if (!document.querySelector('link[rel="manifest"]')) {
      const manifest = document.createElement('link');
      manifest.rel = 'manifest';
      manifest.href = 'manifest.webmanifest';
      document.head.append(manifest);
    }
    const file = pageName();
    const canonical = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
    const graph = [];
    if (file === 'index.html') {
      graph.push({
        '@type': 'WebSite',
        '@id': 'https://aionvuy.github.io/#website',
        url: 'https://aionvuy.github.io/',
        name: 'GAC AION V Uruguay — Guía comunitaria',
        inLanguage: 'es-UY'
      });
      graph.push({
        '@type': 'Organization',
        '@id': 'https://aionvuy.github.io/#community',
        name: 'GAC AION V Uruguay — guía comunitaria no oficial',
        url: 'https://aionvuy.github.io/',
        description: 'Proyecto comunitario no oficial sobre el GAC AION V en Uruguay.'
      });
    }
    if (file !== 'index.html') {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://aionvuy.github.io/'},
          {'@type': 'ListItem', position: 2, name: document.querySelector('h1')?.textContent.trim() || document.title, item: canonical}
        ]
      });
    }
    if (file === 'preguntas.html') {
      const mainEntity = [...document.querySelectorAll('details.faq-card')].map(card => ({
        '@type': 'Question',
        name: card.querySelector('.faq-question')?.textContent.trim(),
        acceptedAnswer: {'@type': 'Answer', text: card.querySelector('.faq-body')?.textContent.replace(/\s+/g, ' ').trim()}
      })).filter(item => item.name && item.acceptedAnswer.text);
      if (mainEntity.length) graph.push({'@type': 'FAQPage', mainEntity});
    }
    if (!graph.length) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({'@context': 'https://schema.org', '@graph': graph});
    document.head.append(script);
  };

  const addAppInformation = () => {
    const technologyGrid = document.querySelector('#tecnologia-conectividad .cost-grid');
    if (technologyGrid && !document.getElementById('app-aion-internacional')) {
      const appCard = document.createElement('article');
      appCard.className = 'cost-card';
      appCard.id = 'app-aion-internacional';
      appCard.innerHTML = `
        <h3>App AION · referencia internacional</h3>
        <p class="section-copy compact">Una captura de la aplicación oficial disponible en algunos mercados internacionales muestra estas funciones:</p>
        <ul class="bullet-list">
          <li>Consulta de autonomía estimada, nivel de batería y estado del vehículo.</li>
          <li>Controles de bloqueo, ventanillas, baúl, luces y bocina.</li>
          <li>Precalentamiento de batería, ventilación, función “antivirus con un toque” y modo de espera.</li>
        </ul>
        <p class="section-copy compact"><strong>Disponibilidad:</strong> actualmente, la aplicación no está disponible en Uruguay.</p>
        <p class="section-copy compact">La captura no confirma que estas funciones remotas estén habilitadas en las unidades comercializadas localmente.</p>`;
      technologyGrid.append(appCard);
    }

  };

  ready(() => {
    addStructuredData();
    addAppInformation();
    enhanceNavigation();
    enhanceHeadings();
    enhanceActions();

    const sidebar = document.querySelector('.sidebar');
    const desktopNav = document.getElementById('sidebar-nav');
    if (!sidebar || !desktopNav || document.querySelector('.mobile-nav-shell')) return;

    const linkByHref = new Map();
    desktopNav.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (href && !linkByHref.has(href)) linkByHref.set(href, link);
    });

    const shell = document.createElement('div');
    shell.className = 'mobile-nav-shell';

    const header = document.createElement('header');
    header.className = 'mobile-site-header';

    const brand = document.createElement('a');
    brand.className = 'mobile-site-brand';
    brand.href = 'index.html';
    brand.setAttribute('aria-label', 'Ir al inicio de GAC AION V Uruguay');
    brand.textContent = 'GAC AION V Uruguay';

    const toggle = document.createElement('button');
    toggle.className = 'mob-nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mobile-primary-navigation');
    toggle.setAttribute('aria-label', 'Abrir navegación');
    toggle.innerHTML = '<span class="mob-nav-toggle-label">Menú</span><span class="mob-nav-toggle-icon" aria-hidden="true"><i class="mdi mdi-menu"></i></span>';
    const toggleIcon = toggle.querySelector('.mob-nav-toggle-icon .mdi');

    header.append(brand, toggle);

    const mobileNav = document.createElement('nav');
    mobileNav.id = 'mobile-primary-navigation';
    mobileNav.className = 'mobile-primary-navigation';
    mobileNav.setAttribute('aria-label', 'Navegación principal');
    mobileNav.hidden = true;

    const navList = document.createElement('div');
    navList.className = 'mobile-nav-list';

    NAV_GROUPS.forEach((group) => {
      const groupEl = document.createElement('div');
      groupEl.className = group.label ? 'mobile-nav-group' : 'mobile-nav-group mobile-nav-group-primary';

      if (group.label) {
        const label = document.createElement('div');
        label.className = 'mobile-nav-group-label';
        label.textContent = group.label;
        groupEl.append(label);
      }

      group.links.forEach((href) => {
        const sourceLink = linkByHref.get(href);
        if (!sourceLink) return;
        const clone = sourceLink.cloneNode(true);
        clone.classList.remove('active');
        if (sourceLink.classList.contains('active') || sourceLink.getAttribute('aria-current') === 'page') {
          clone.classList.add('active');
          clone.setAttribute('aria-current', 'page');
        }
        groupEl.append(clone);
      });

      if (groupEl.querySelector('a')) navList.append(groupEl);
    });

    const communityLinks = [...document.querySelectorAll('.sidebar-form a, .sidebar-wa:not(.sidebar-form) a')];
    if (communityLinks.length) {
      const actions = document.createElement('div');
      actions.className = 'mobile-community-actions';
      communityLinks.forEach((link) => {
        const clone = link.cloneNode(true);
        clone.classList.add(link.closest('.sidebar-form') ? 'mobile-feedback-link' : 'mobile-whatsapp-link');
        actions.append(clone);
      });
      navList.append(actions);
    }

    mobileNav.append(navList);
    shell.append(header, mobileNav);
    sidebar.parentNode.insertBefore(shell, sidebar);

    const mediaQuery = window.matchMedia(MOBILE_QUERY);

    const closeMenu = (returnFocus = false) => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir navegación');
      toggleIcon.className = 'mdi mdi-menu';
      mobileNav.hidden = true;
      shell.classList.remove('mobile-menu-is-open');
      document.body.classList.remove('mobile-menu-open');
      if (returnFocus) toggle.focus();
    };

    const openMenu = () => {
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Cerrar navegación');
      toggleIcon.className = 'mdi mdi-close';
      mobileNav.hidden = false;
      shell.classList.add('mobile-menu-is-open');
      document.body.classList.add('mobile-menu-open');
      mobileNav.scrollTop = 0;
      window.requestAnimationFrame(() => {
        const activeLink = mobileNav.querySelector('[aria-current="page"]');
        if (activeLink) activeLink.scrollIntoView({ block: 'nearest' });
      });
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMenu(false);
      else openMenu();
    });

    mobileNav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu(false);
    });

    document.addEventListener('click', (event) => {
      if (mobileNav.hidden) return;
      if (shell.contains(event.target)) return;
      closeMenu(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !mobileNav.hidden) {
        closeMenu(true);
      }
    });

    document.addEventListener('focusin', (event) => {
      if (mobileNav.hidden || shell.contains(event.target)) return;
      closeMenu(false);
    });

    const handleBreakpointChange = (event) => {
      if (!event.matches) closeMenu(false);
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleBreakpointChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleBreakpointChange);
    }
  });
})();
