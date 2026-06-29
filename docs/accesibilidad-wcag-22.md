# Auditoría de accesibilidad

## Alcance

Revisión inicial de accesibilidad del sitio público AION V Uruguay, tomando como referencia WCAG 2.2 nivel AA.

Páginas revisadas:

- `index.html`
- `specs.html`
- `comparativa.html`
- `seguridad.html`
- `cargadores.html`
- `calculadora.html`
- `red.html`
- `mantenimiento-postventa.html`
- `costos.html`
- `comandos.html`
- `videos.html`
- `problemas.html`
- `faq.html`
- `servicios.html`

Archivos compartidos y dinámicos revisados:

- `_shared.css`
- `red-datos.js`
- `ute-tarifas.js`
- `data/*.json`
- `scripts/*.py`

## Estándar

Referencia: WCAG 2.2 nivel AA.

Este documento no declara que el sitio cumple WCAG 2.2 AA. Registra correcciones aplicadas, validaciones automáticas posibles y pruebas manuales pendientes.

## Hallazgos corregidos

| Criterio WCAG | Problema detectado | Archivos | Corrección aplicada | Estado |
| --- | --- | --- | --- | --- |
| 2.4.3 Orden del foco | El botón de menú móvil estaba después del `<nav>` en el DOM. | HTML públicos | Se movió el botón antes del `<nav>` para que el foco avance de forma lógica. | Corregido |
| 2.1.1 Teclado / 2.1.2 Sin trampas | El menú móvil no tenía cierre con Escape. | HTML públicos | Se agregó script accesible para abrir/cerrar, actualizar `aria-expanded` y devolver foco al botón con Escape. | Corregido |
| 2.4.7 Foco visible / 2.4.13 Apariencia del foco | Existía una regla `outline: none` en campos de formulario. | `_shared.css` | Se reemplazó por outline visible, borde de foco y halo. | Corregido |
| 1.1.1 Contenido no textual | SVGs decorativos de WhatsApp podían anunciarse innecesariamente. | HTML públicos | Se agregaron `aria-hidden="true"` y `focusable="false"`. | Corregido |
| 1.1.1 / 4.1.2 Nombre, función y valor | Emojis del menú lateral eran decorativos pero visibles a lectores de pantalla. | HTML públicos | Se agregó `aria-hidden="true"` a `.nav-icon`. | Corregido |
| 2.4.4 Propósito de enlaces / 3.2.5 Cambio a pedido | Enlaces externos abrían nueva pestaña sin indicación accesible consistente. | HTML públicos | Se agregó `rel="noopener noreferrer"` y texto `.sr-only` “(se abre en una pestaña nueva)”. | Corregido |
| 2.4.1 Evitar bloques | El skip link ya existía, pero se reforzó la revisión global de landmarks. | HTML públicos | Se mantuvo `main id="main-content"` y navegación principal. | Revisado |
| 1.4.3 Contraste mínimo / 1.4.11 Contraste no textual | Algunos textos secundarios, bordes y foco podían quedar débiles. | `_shared.css` | Se oscurecieron `--text-secondary`, `--text-muted`, `--border` y se agregó `--color-focus`. | Mejorado |
| 1.4.13 / 2.3.3 Preferencias de movimiento | El sitio usaba `scroll-behavior: smooth` sin desactivarlo para usuarios con reducción de movimiento. | `_shared.css` | Se agregó `prefers-reduced-motion` para desactivar scroll suave y transiciones. | Corregido |
| 2.5.8 Tamaño de objetivos | El botón de menú móvil requería garantía de alto mínimo. | `_shared.css` | Se agregó `min-height: 44px`. | Mejorado |
| 4.1.3 Mensajes de estado | Botón de copiar en FAQ no diferenciaba de forma óptima estado visual/textual. | `faq.html`, `_shared.css` | Se mantiene texto visible “Copiado” y emoji decorativo oculto. | Mejorado |
| 2.4.4 Propósito de enlaces | Cada FAQ necesitaba forma directa de compartir contenido con contexto. | `faq.html` | Se agregó botón “Copiar para WhatsApp” que copia pregunta, respuesta y enlace con ancla. | Corregido |
| 1.3.1 Información y relaciones | Varias tablas no tenían `caption`. | HTML con tablas | Se agregaron captions ocultos con `.sr-only` para describir cada tabla sin cambiar la interfaz visual. | Corregido |
| 1.3.1 Información y relaciones | Encabezados de tablas no tenían `scope`. | HTML con tablas | Se agregó `scope` a encabezados de tabla existentes para mejorar la relación entre encabezados y celdas. | Mejorado |

## Hallazgos pendientes

Estos puntos requieren revisión manual, decisión de diseño o pruebas con herramientas que no se ejecutaron dentro de esta intervención:

- Medición exhaustiva de contraste con herramienta especializada para todas las combinaciones de color, estados hover/focus y badges.
- Prueba completa con teclado en todas las páginas, incluyendo tablas con scroll horizontal.
- Prueba de lector de pantalla con NVDA + Firefox y VoiceOver + Safari.
- Validación manual a 200 % y 400 % de zoom.
- Validación de reflow a 320 px, 360 px, 390 px, 480 px, 768 px, 1024 px y 1366 px.
- Revisión semántica profunda de todas las tablas para confirmar que los `caption` y `scope` agregados describen correctamente el contenido.
- Revisión de `comparativa.html` para evaluar si la grilla visual debe transformarse en tabla semántica o complementarse con estructura equivalente.
- Revisión de enlaces de video para asegurar nombres accesibles completamente descriptivos en todos los casos.
- Validación de estados dinámicos de calculadora, red, cargadores, tipo de cambio y tarifas con lector de pantalla.
- Validación automática con Lighthouse, axe DevTools, WAVE, HTML validator y CSS validator.

## Riesgos que requieren prueba manual

- El comportamiento real del menú móvil con teclado debe probarse en navegador: Tab, Shift+Tab, Enter, Espacio y Escape.
- Los enlaces externos ahora informan nueva pestaña con texto oculto; conviene probar que no resulte repetitivo con lector de pantalla.
- El botón “Copiar para WhatsApp” usa Clipboard API con fallback; debe probarse en Chrome, Firefox, Safari móvil y contexto HTTPS.
- Las tablas anchas pueden requerir mejoras de comunicación visual para usuarios en móvil o con zoom alto.
- Algunas tarjetas y grillas complejas pueden tener orden visual distinto al orden de lectura, especialmente en comparativa.
- Los datos generados dinámicamente pueden necesitar regiones `role="status"` más específicas.

## Pruebas realizadas

Validaciones automáticas locales realizadas:

- Conteo de H1 por página.
- Detección de imágenes sin `alt`.
- Detección de SVGs sin `aria-hidden`.
- Detección de enlaces con `target="_blank"` sin `rel="noopener noreferrer"`.
- Detección de enlaces externos sin aviso oculto de nueva pestaña.
- Detección de `outline: none`.
- Verificación de `.sr-only`.
- Verificación de `prefers-reduced-motion`.
- Verificación de orden DOM del botón de menú móvil respecto al `<nav>`.
- Verificación de script de menú móvil en páginas públicas.
- Detección de tablas sin `caption`.
- Detección de encabezados de tabla sin `scope`.

Pruebas no realizadas en esta intervención:

- Lighthouse Accessibility.
- axe DevTools.
- WAVE.
- HTML validator externo.
- CSS validator externo.
- NVDA + Firefox.
- VoiceOver + Safari.
- Prueba manual completa a 200 % y 400 % de zoom.

## Limitaciones

El sitio enlaza a servicios externos que no están bajo control del proyecto:

- Google Forms.
- WhatsApp.
- YouTube.
- Google Maps.
- App Store.
- Google Play.
- Sitios oficiales de operadores, fabricantes y fuentes.

La accesibilidad de esas páginas o aplicaciones externas debe validarse por sus responsables.

## Mantenimiento futuro

### HTML

- [ ] Hay un único H1.
- [ ] Los encabezados no saltean niveles.
- [ ] Las regiones principales usan landmarks.
- [ ] Los botones son botones.
- [ ] Los enlaces son enlaces.
- [ ] Los inputs tienen label.
- [ ] Las tablas tienen caption y scope.
- [ ] Las imágenes tienen alt correcto.
- [ ] Los SVG decorativos están ocultos a lector de pantalla.

### Teclado

- [ ] Todo se puede operar con teclado.
- [ ] El foco es visible.
- [ ] El foco no queda oculto.
- [ ] No hay trampas de teclado.
- [ ] El orden de foco es lógico.
- [ ] Escape funciona donde corresponde.

### Diseño

- [ ] El contraste cumple.
- [ ] No se comunica información solo por color.
- [ ] Los objetivos táctiles tienen tamaño suficiente.
- [ ] El contenido funciona a 320 px.
- [ ] El contenido funciona a 400 % de zoom.
- [ ] No hay scroll horizontal de página innecesario.

### Contenido dinámico

- [ ] Errores se anuncian correctamente.
- [ ] Resultados se actualizan sin ruido excesivo.
- [ ] Los estados de carga son visibles y accesibles.
- [ ] Los mensajes de éxito y error usan texto claro.

### Enlaces

- [ ] El propósito de cada enlace es claro.
- [ ] Los enlaces externos informan nueva pestaña cuando corresponde.
- [ ] No hay “click acá”.
- [ ] Los videos tienen título descriptivo.
