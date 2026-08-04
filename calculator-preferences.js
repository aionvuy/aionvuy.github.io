(() => {
  'use strict';

  const STORAGE_KEY = 'aionvuy.calculator-preferences.v1';

  function load() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return {};
      const parsed = JSON.parse(stored);
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
    } catch {
      return {};
    }
  }

  function update(values) {
    try {
      const next = { ...load() };
      Object.entries(values).forEach(([key, value]) => {
        if (value === '' || value === null || typeof value === 'undefined') delete next[key];
        else next[key] = value;
      });
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // La calculadora debe seguir funcionando si el navegador bloquea localStorage.
    }
  }

  function clear(keys) {
    try {
      const next = { ...load() };
      keys.forEach((key) => delete next[key]);
      if (Object.keys(next).length) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Restablecer los campos visibles no depende del almacenamiento local.
    }
  }

  window.AionCalculatorPreferences = { load, update, clear };
})();
