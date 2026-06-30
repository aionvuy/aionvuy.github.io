(function () {
  const MOBILE_QUERY = '(max-width: 720px)';
  const NAV_GROUPS = [
    { label: null, links: ['index.html'] },
    { label: 'Vehículo', links: ['specs.html', 'comparativa.html', 'seguridad.html'] },
    { label: 'Carga', links: ['cargadores.html', 'calculadora.html', 'costos.html'] },
    { label: 'Propiedad', links: ['red.html', 'mantenimiento-postventa.html', 'comandos.html'] },
    { label: 'Comunidad', links: ['videos.html', 'problemas.html', 'faq.html'] },
  ];

  const ready = (callback) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  };

  ready(() => {
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
    brand.setAttribute('aria-label', 'Ir al inicio de AION V Uruguay');
    brand.innerHTML = 'AION V <span aria-hidden="true">·</span> UY';

    const toggle = document.createElement('button');
    toggle.className = 'mob-nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mobile-primary-navigation');
    toggle.innerHTML = '<span class="mob-nav-toggle-label">Menú</span><span class="mob-nav-toggle-icon" aria-hidden="true"></span>';

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
      mobileNav.hidden = true;
      shell.classList.remove('mobile-menu-is-open');
      document.body.classList.remove('mobile-menu-open');
      if (returnFocus) toggle.focus();
    };

    const openMenu = () => {
      toggle.setAttribute('aria-expanded', 'true');
      mobileNav.hidden = false;
      shell.classList.add('mobile-menu-is-open');
      document.body.classList.add('mobile-menu-open');
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