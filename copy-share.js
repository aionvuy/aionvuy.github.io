(() => {
  const normalizeText = (value) => String(value || '').replace(/\s+/g, ' ').trim();

  const fallbackCopy = (text) => {
    const activeElement = document.activeElement;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.setAttribute('aria-hidden', 'true');
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '-9999px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    const copied = document.execCommand('copy');
    textarea.remove();
    activeElement?.focus?.();

    if (!copied) throw new Error('No se pudo copiar el contenido.');
  };

  const copyText = async (text) => {
    const value = String(text || '').trim();
    if (!value) throw new Error('No hay contenido para copiar.');

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(value);
        return;
      } catch (error) {
        fallbackCopy(value);
        return;
      }
    }

    fallbackCopy(value);
  };

  const visibleText = (element) => {
    const clone = element.cloneNode(true);
    clone.querySelectorAll('.sr-only, .faq-item-actions').forEach((hidden) => hidden.remove());
    return normalizeText(clone.textContent);
  };

  const listText = (list) => Array.from(list.children)
    .filter((item) => item.tagName === 'LI')
    .map((item, index) => {
      const marker = list.tagName === 'OL' ? `${index + 1}.` : '•';
      const clone = item.cloneNode(true);
      clone.querySelectorAll('p, ul, ol, .sr-only, .faq-item-actions').forEach((nested) => nested.remove());
      const heading = normalizeText(clone.textContent);
      const paragraphs = Array.from(item.children)
        .filter((child) => child.tagName === 'P')
        .map(visibleText)
        .filter(Boolean);
      const firstLine = `${marker}${heading ? ` ${heading}` : ''}`;
      return paragraphs.length
        ? `${firstLine}\n${paragraphs.map((paragraph) => `  ${paragraph}`).join('\n')}`
        : firstLine;
    })
    .filter(Boolean)
    .join('\n');

  const contentText = (container) => Array.from(container?.children || [])
    .filter((element) => !element.classList.contains('faq-item-actions'))
    .map((element) => {
      if (element.matches('p')) return visibleText(element);
      if (element.matches('ul, ol')) return listText(element);
      if (element.matches('div, section, article')) return contentText(element);
      return '';
    })
    .filter(Boolean)
    .join('\n\n');

  window.AionCopy = Object.freeze({
    copyText,
    contentText
  });
})();
