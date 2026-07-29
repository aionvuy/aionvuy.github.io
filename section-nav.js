(() => {
  const nav = document.querySelector(".section-jump-nav");
  if (!nav) return;

  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const items = links
    .map((link) => {
      const id = decodeURIComponent(link.hash.slice(1));
      return { link, id, target: document.getElementById(id) };
    })
    .filter((item) => item.target);

  if (!items.length) return;
  let activeLockUntil = 0;

  const setActive = (id) => {
    items.forEach((item) => {
      const active = item.id === id;
      item.link.classList.toggle("active", active);
      if (active) {
        item.link.setAttribute("aria-current", "location");
      } else {
        item.link.removeAttribute("aria-current");
      }
    });
  };

  const updateFromScroll = () => {
    if (performance.now() < activeLockUntil) return;
    const offset = 180;
    let current = items[0];

    for (const item of items) {
      if (item.target.getBoundingClientRect().top <= offset) {
        current = item;
      } else {
        break;
      }
    }

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = items[items.length - 1];
    }

    setActive(current.id);
  };

  let scheduled = false;
  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      updateFromScroll();
      scheduled = false;
    });
  };

  links.forEach((link) => {
    link.addEventListener("click", () => {
      activeLockUntil = performance.now() + 1200;
      setActive(decodeURIComponent(link.hash.slice(1)));
    });
  });

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("hashchange", () => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!items.some((item) => item.id === id)) return;
    activeLockUntil = performance.now() + 1200;
    setActive(id);
  });

  const initialId = decodeURIComponent(window.location.hash.slice(1));
  if (items.some((item) => item.id === initialId)) {
    activeLockUntil = performance.now() + 1200;
    setActive(initialId);
    const revealInitialTarget = () => {
      const currentHash = decodeURIComponent(window.location.hash.slice(1));
      const currentItem = items.find((item) => item.id === currentHash);
      if (!currentItem) return;
      requestAnimationFrame(() => {
        currentItem.target.scrollIntoView({ block: "start" });
        setActive(currentItem.id);
      });
    };
    if (document.readyState === "complete") revealInitialTarget();
    else window.addEventListener("load", revealInitialTarget, { once: true });
  } else {
    updateFromScroll();
  }
})();
