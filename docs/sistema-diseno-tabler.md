# Sistema de diseño Tabler — AION V Uruguay

Esta guía es la referencia visual permanente del sitio. Su objetivo es mantener una interfaz moderna, sobria, compacta, consistente y accesible sin tener que redefinir criterios en cada cambio.

Referencia visual viva: `prototipo-tabler.html`.

Última actualización de esta especificación: **03/08/2026**.

Estado: **consolidado con la implementación vigente del repositorio**. Las reglas globales se aplican a todas las páginas públicas, incluidas las páginas heredadas o de compatibilidad. Las excepciones documentadas bajo una página concreta no se trasladan automáticamente a otras secciones.

## 0. Alcance, obligatoriedad y criterio de revisión total

Esta guía es normativa para **todas las páginas, secciones, componentes, estados y tamaños de pantalla** del sitio. No es una colección de sugerencias opcionales.

Cada vez que se modifica una página, aunque el pedido mencione un único texto, tabla, tarjeta o formulario, se debe revisar la **página completa**. El alcance de la revisión visual y editorial es siempre total dentro de esa página.

La revisión total incluye obligatoriamente:

- encabezado, título, descripción e introducción;
- navegación lateral, navegación móvil y navegación interna;
- alertas, notas, metadatos y fuentes;
- todos los títulos `h1`, `h2`, `h3` y niveles inferiores;
- párrafos, listas, etiquetas, captions, ayudas y mensajes de validación;
- tarjetas, tablas, acordeones, formularios, resultados y botones;
- estados vacío, carga, error, éxito, expandido, contraído, hover, foco y deshabilitado;
- pie, accesos comunitarios y enlaces externos;
- escritorio, tablet, móvil, zoom y ampliación de texto.

### Auditoría obligatoria de redundancias

En toda página intervenida se debe buscar activamente información repetida, aunque la repetición esté lejos del bloque modificado. La auditoría debe comparar:

- etiqueta del menú, `title`, `h1`, pretítulo, descripción y primer `h2`;
- alerta inicial, introducción y texto inmediatamente posterior;
- navegación interna y títulos de sección;
- fila resumen y contenido expandido;
- tarjeta, tabla, caption y nota posterior;
- explicación, helper text, placeholder, validación y resultado;
- fuente, fecha de actualización y fecha de verificación;
- versión de escritorio y contenido alternativo móvil;
- encabezado y pie de cada sección;
- textos equivalentes escritos con palabras distintas.

No se considera redundancia la repetición necesaria para accesibilidad, contexto independiente, encabezados de tabla o comprensión de una vista móvil. Sí se considera redundancia repetir una idea completa sin aportar contexto, acción, precisión o significado nuevo.

Ante una redundancia:

1. conservar la versión más clara y cercana a la acción o dato;
2. eliminar la repetición, no simplemente reformularla;
3. evitar trasladarla a otra caja o tarjeta;
4. comprobar que la eliminación no quite contexto en móvil ni accesibilidad;
5. mantener una sola fuente canónica para datos dinámicos.

### Auditoría obligatoria de jerarquía

En toda página intervenida se debe revisar la jerarquía completa, no solo el título o componente editado. La auditoría debe comprobar:

- un único `h1` y una secuencia semántica sin saltos arbitrarios;
- correspondencia conceptual entre menú, título de página y secciones;
- mayor importancia visual del `h1` frente a `h2`, de `h2` frente a `h3` y de los títulos frente al texto común;
- orden de lectura y de tabulación coherente con el flujo visual;
- separación consistente entre secciones del mismo nivel;
- agrupación por proximidad de labels, ayudas, controles y resultados;
- ausencia de subtítulos que repitan el título superior;
- ausencia de tarjetas o alertas con más protagonismo que el contenido principal sin una razón semántica;
- consistencia de tamaño, peso, color, iconos y espaciado en todos los componentes equivalentes;
- equilibrio entre densidad y espacio en toda la página;
- jerarquía equivalente en escritorio y móvil.

Una tarea no se considera terminada si el bloque solicitado quedó correcto pero el resto de la página conserva redundancias, niveles incoherentes o componentes equivalentes con estilos distintos.

## 1. Base técnica

- Framework visual: Tabler `1.4.0`.
- Iconos: Material Design Icons Webfont (MDI) `7.4.47`, alojado localmente.
- Mantener versiones fijadas; no usar `latest`.
- Fuente: familia sans-serif nativa de Tabler.
- Tema: claro.
- Evitar estilos que imiten componentes que Tabler ya proporciona.

## 2. Colores

| Uso | Color |
|---|---|
| Primario y enlaces | `#0770d1` |
| Hover de enlaces | `#055dac` |
| Texto principal | `#182433` |
| Texto secundario | `#667382` |
| Fondo general | `#f6f8fb` |
| Superficie y tarjetas | `#ffffff` |
| Borde | `#dce1e7` |
| Selección azul suave | `#edf6fd` |

El azul `#0770d1` es el azul más claro adoptado para los controles principales y cumple WCAG AA sobre blanco, fondo general y selección azul suave.

- No usar `#4299e1` para texto o botones principales porque no alcanza el contraste necesario sobre fondos claros.
- Usar amarillo para advertencias, rojo únicamente para errores o peligro y verde para confirmaciones.
- No usar color como único medio para transmitir información.

## 3. Tipografía y jerarquía

Mantener la escala compacta de Tabler:

| Elemento | Tamaño orientativo | Peso | Interlineado |
|---|---:|---:|---:|
| Texto general | `0.875rem` / 14 px | 400 | `1.55` |
| Texto compacto de tarjetas y acordeones | `0.8125rem`–`0.875rem` | 400 | `1.5` |
| Pretítulo | `0.75rem` / 12 px | 500, mayúsculas | `1.35` |
| Título de página | `1.5rem` / 24 px | 600 | `1.2`–`1.25` |
| Título de sección | `1.125rem` / 18 px | 600 | `1.3`–`1.35` |
| Título de tarjeta o subsección | `1rem` / 16 px | 500–600 | `1.4`–`1.45` |
| Etiqueta o encabezado de tabla | `0.75rem`–`0.875rem` | 500–600 | `1.35` |
| Celdas de tabla | `0.8125rem`–`0.875rem` | 400 | `1.4`–`1.45` |
| Ayuda y metadatos | `0.75rem`–`0.8125rem` | 400 | `1.45` |

Reglas:

- Un único `h1` por página.
- Los bloques principales usan `h2`; los componentes internos usan `h3`.
- El texto normal nunca debe verse más grande o pesado que el título que lo contiene.
- Evitar títulos gigantes y exceso de negrita.
- Usar párrafos cortos y punto y aparte cuando haya dos ideas completas.
- El texto secundario usa el color muted, no un tamaño ilegible.
- Los textos breves que describen formularios, herramientas, tarjetas o resultados usan el ancho disponible de su componente y ajustan sus líneas de forma natural. No aplicarles un `max-width` editorial genérico que los haga parecer cortados dentro de un contenedor ancho.
- Reservar los límites de aproximadamente `72ch` para contenido de lectura continua identificado expresamente mediante `.page-desc`, `.reading-content`, `.lead`, `.readable-text`, `.section-intro` o una clase equivalente. `.section-copy` no limita el ancho por sí sola.
- Las cajas semánticas `.info-box`, `.note-box`, `.callout` y `.warning-box` ajustan su ancho al contenido sin superar el ancho disponible. Sus párrafos y listas tampoco reciben un límite editorial automático: deben usar el ancho interior completo de la caja.
- Cuando una caja semántica realmente necesite una medida de lectura reducida por su contexto, agregar explícitamente `.narrow-reading-width`. No limitar todas las cajas de forma global ni dejar una tarjeta angosta flotando dentro de una sección amplia.
- El ancho visual de cajas semánticas, avisos desplegables y tablas auxiliares usa `width: fit-content` junto con `max-width: 100%`. En pantallas angostas, el componente se limita al ancho disponible y su contenido se repliega o desplaza dentro del contenedor previsto.
- Usar `.content-fit` para una tarjeta o componente aislado que no necesita ocupar toda la fila. Usar `.content-fill` solamente cuando el ancho completo aporte estructura: formularios, resultados complejos, comparativas, navegación, tarjetas hermanas dentro de una grilla o bloques que deben alinear columnas.
- Las tarjetas de una misma grilla conservan el ancho de su pista para mantener alineación y comparación visual. No hacer que cada tarjeta de una grilla tenga un ancho diferente según la longitud del texto.
- Las tablas auxiliares se ajustan al contenido. Las tablas comparativas, de resultados u operadores pueden ocupar el ancho disponible cuando la alineación entre columnas y el escaneo horizontal lo justifiquen; la decisión debe ser consistente dentro de la página.
- Esta política es global y se implementa en `_shared.css`: todas las páginas públicas deben cargar ese archivo y no recrear reglas locales incompatibles. Cajas, avisos, tarjetas aisladas y tablas auxiliares heredan el ancho intrínseco; grillas, formularios, comparativas, operadores y resultados heredan las excepciones estructurales compartidas.
- Al crear un componente nuevo, decidir primero si es `contenido aislado` o `superficie estructural`. El primero usa ancho intrínseco; la segunda ocupa su pista o el ancho disponible. No dejar el ancho implícito al azar ni resolverlo página por página.
- Ningún párrafo, ayuda o estado puede desbordar su componente. Los contenedores flex o grid que alojan texto deben admitir contracción con `min-width: 0`, y el texto debe poder envolver palabras extensas sin generar recorte ni desplazamiento horizontal.
- No aplicar un único interlineado a todo el sitio. La escala anterior es transversal y diferencia lectura continua, contenido compacto, tablas, ayudas y títulos.
- El texto general, las alertas, notas, listas, descripciones extensas y contenido expandido usan `1.55` como valor canónico.
- Las tarjetas con texto breve pueden usar `1.5`; no bajar de ese valor para párrafos destinados a lectura continua.
- Las tablas usan `1.4`–`1.45` para conservar densidad sin comprometer legibilidad. Los encabezados pueden usar `1.35`.
- Las ayudas, fuentes y metadatos usan `1.45`. No aumentar su interlineado para compensar un tamaño excesivamente pequeño.
- Los títulos conservan su propia escala entre `1.2` y `1.45`; no deben heredar el `1.55` del texto general.
- La separación entre ideas se resuelve con párrafos independientes y márgenes consistentes, no inflando el interlineado.

## 4. Espaciado

- Evitar la suma de márgenes verticales entre componentes consecutivos. Cuando el encabezado, un aviso y la navegación interna aparezcan seguidos, debe existir una sola separación del sistema entre cada bloque.
Usar la escala de Tabler como base:

- 4 px: separación mínima entre elementos relacionados.
- 8 px: icono y texto, labels y controles relacionados.
- 16 px: padding habitual y separación interna.
- 24 px: separación entre secciones principales.

Reglas:

- No acumular márgenes de componentes consecutivos.
- Las secciones principales hermanas usan una separación vertical canónica de `24 px` en escritorio y móvil. El margen pertenece al contenedor de la sección; su primer título no agrega otro margen superior.
- Entre un título y la tarjeta, tabla o formulario que presenta inmediatamente se usan aproximadamente `12 px` a `16 px`, según la densidad del componente.
- Los metadatos o fuentes vinculados al bloque anterior pueden comenzar a `16 px`; los enlaces relacionados que constituyen una sección nueva conservan `24 px`.
- Medir la distancia visible entre los límites reales de componentes consecutivos. No considerar correcto el espaciado solo porque cada clase, por separado, tenga un margen válido.
- Las tablas, alertas y acordeones no deben quedar pegados entre sí.
- Los elementos vacíos no reservan altura.
- En móvil se reduce el ancho, no la legibilidad.
- Comprobar en escritorio que las ayudas breves no queden confinadas a una columna angosta cuando su tarjeta dispone de espacio libre; en móvil deben reajustarse al ancho interior sin truncado, elipsis ni corte visual.

## 5. Layout

- Menú lateral de escritorio: `17rem`.
- Contenido: ancho máximo `90rem`.
- El contenido queda alineado a la izquierda después del menú, no centrado de forma aislada.
- El borde de lectura de todas las páginas usa exactamente el mismo padding horizontal: `32 px` por encima de `1024 px`, `24 px` entre `721 px` y `1024 px`, y `16 px` hasta `720 px`. Ninguna página o clase temática puede agregar margen o padding izquierdo propio al contenedor `.page`.
- Mientras el menú lateral está visible, el contenedor principal comienza inmediatamente después de sus `17rem` y el `h1` queda separado por el padding canónico anterior. Al pasar a navegación móvil, se elimina el desplazamiento del menú, pero se conserva el padding correspondiente al ancho de pantalla.
- Fondo general gris muy claro y superficies blancas.
- En móvil, el menú pasa a encabezado colapsable y el contenido ocupa todo el ancho disponible.
- Entre `992px` y `1200px`, mantener el menú lateral de escritorio pero apilar las acciones del encabezado debajo del título para evitar columnas de texto demasiado angostas.
- Evitar scroll horizontal, salvo contenedores deliberadamente desplazables como tablas y navegación interna.

## 6. Navegación

- Usar `navbar`, `nav-link`, `nav-link-icon` y `nav-link-title` de Tabler.
- Iconos estructurales monocromáticos en gris.
- Opción activa: fondo `#edf6fd`, texto azul y peso 600; el icono hereda exactamente el mismo color del texto.
- Los grupos usan encabezados discretos en mayúsculas.
- En móvil debe existir un botón de menú con nombre accesible.
- El nombre accesible del botón móvil cambia entre `Abrir navegación` y `Cerrar navegación` según el estado.
- El acceso comunitario a WhatsApp permanece disponible dentro del menú colapsable móvil; no debe desaparecer al ocultar elementos secundarios del lateral.
- La navegación interna es opcional y debe responder al criterio de la sección `Navegación interna`; no se agrega únicamente porque una página tenga varios títulos.
- Cuando está justificada, usa `nav-pills` compactas y desplazables horizontalmente cuando sea necesario.
- Debe reflejar la sección realmente visible. Observar las secciones completas, no solo títulos de poca altura, y verificar también los accesos directos mediante hash.
- Las etiquetas del menú deben ser breves, idealmente de una a tres palabras.
- El título de la página puede ampliar la etiqueta del menú, pero debe conservar su concepto principal y una redacción reconocible. Ejemplo: `Pública` en el menú, con nombre accesible `Carga pública`, y `Carga pública y cargadores` como título.
- Evitar que menú y título usen expresiones diferentes para una misma sección.

### Contexto geográfico

- La identidad global usa `GAC AION V Uruguay` y el descriptor `Guía comunitaria no oficial`.
- Todo el bloque de identidad enlaza a Inicio, usa el nombre accesible `Ir al inicio de GAC AION V Uruguay` y mantiene un área interactiva mínima de 44 px.
- No repetir `Uruguay` en pretítulo, título, descripción y pie de una misma página si no agrega información.
- Sí mencionar el país cuando sea necesario para diferenciar cobertura, disponibilidad, normativa, tarifas, fuentes o mercados.

### Nombres de páginas y URLs

- Todos los archivos HTML públicos usan nombres en español, descriptivos, breves y escritos en minúsculas.
- `index.html` es la única excepción admitida por ser el documento inicial convencional del sitio.
- Separar palabras mediante guiones, sin espacios, guiones bajos, tildes, eñes ni caracteres especiales.
- El nombre debe describir el destino con palabras reconocibles para la persona: `aplicaciones.html`, `preguntas.html`, `especificaciones.html` y `carga-casa.html`.
- No usar abreviaturas o términos ingleses como `apps`, `faq`, `specs`, `home`, `services` o equivalentes en nombres nuevos.
- Al renombrar una página, actualizar en la misma tarea enlaces internos, navegación global e interna, URL canónica, Open Graph, scripts, anclas compartidas, documentación y cualquier referencia generada.
- Antes de cerrar la migración, comprobar que no queden referencias a la ruta anterior ni enlaces internos rotos.
- Las clases CSS, IDs técnicos, nombres de funciones y archivos de recursos no forman parte de esta regla, aunque los IDs visibles en la URL deben ser comprensibles y preferentemente estar en español.

## 7. Iconos, emojis y logos

- Interfaz, menús, títulos y botones: Material Design Icons (MDI) monocromáticos.
- Botones: icono pequeño a la izquierda con separación consistente.
- Los enlaces externos de contenido o referencia muestran un indicador visible: `↗` al final del texto o `mdi-open-in-new` cuando el componente utiliza ese icono como indicador explícito.
- No duplicar el indicador externo: si el control ya usa `mdi-open-in-new`, no agregar también `↗`.
- Un icono temático como `mdi-link-variant` o `mdi-youtube` no reemplaza el indicador externo; en esos casos conservar `↗`.
- Los enlaces a YouTube usan exactamente un `mdi-youtube` monocromático. No sumar emojis, SVG, imágenes, pseudoelementos CSS ni un segundo icono de YouTube.
- Los resultados que identifican un tipo de conector muestran el MDI correspondiente junto al texto; el icono complementa y nunca reemplaza las etiquetas `Tipo 2`, `CCS2`, `AC` o `DC`.
- No colocar emojis dentro de botones.
- Evitar mezclar emojis de colores con iconos monocromáticos en un mismo nivel visual.
- Los emojis pueden usarse dentro del contenido editorial cuando comuniquen una advertencia o información y no exista ya un componente con icono.
- Logos de operadores y aplicaciones: archivos oficiales locales, tamaño uniforme, `alt=""` si el nombre textual aparece al lado.

## 8. Botones y enlaces

- Acción principal: `btn btn-primary` con fondo `#0770d1` y texto blanco.
- Acciones secundarias: `btn btn-outline-primary`.
- WhatsApp usa el icono oficial y una variante propia coherente en escritorio y móvil.
- Estado normal de WhatsApp: fondo `#e9f7ee`, texto e icono `#0d7a35`, borde `#0d7a35` y peso 600.
- Hover y foco de WhatsApp: fondo verde suave `#ccebd7`, con texto, icono y borde `#075e54`.
- El peso permanece en 600 en todos los estados para evitar desplazamientos o cambios aparentes de tamaño durante la interacción.
- No usar el verde brillante de marca como fondo del control: compite visualmente con el sistema sobrio de Tabler.
- El foco conserva además el contorno global visible; el color no es la única señal del estado.
- Dentro de una misma fila, todos los botones equivalentes deben compartir color, tamaño y altura.
- No usar un color diferente sin una diferencia semántica real.
- En teléfonos angostos, los botones pueden apilarse; no deben desbordar la pantalla.
- Cuando haya una acción principal y dos secundarias en el encabezado móvil, la principal ocupa una fila completa y las secundarias pueden compartir la fila siguiente; por debajo de `360px`, se apilan todas.
- Los enlaces dentro de texto siguen siendo enlaces, no botones grandes.
- Todo enlace que abra otra pestaña usa `target="_blank"`, `rel="noopener noreferrer"` y una aclaración accesible equivalente a `se abre en una pestaña nueva`.
- La flecha `↗` es visible pero no sustituye la aclaración accesible. Las acciones de marca permanentes, como WhatsApp, pueden usar su icono reconocido sin flecha cuando su destino ya queda explícito en el texto y conservan la aclaración para lectores de pantalla.

## 9. Tarjetas y métricas

- Usar `card`, `card-header`, `card-body` y `card-title` de Tabler.
- Fondo blanco, borde estándar y sin sombras grandes.
- Las tarjetas de métricas usan `subheader`, valor en `h2` y detalle secundario.
- Cuando una tarjeta compara varias métricas equivalentes, mostrarlas con el mismo tamaño y peso; no destacar una si el título de la sección abarca a todas.
- El nombre del modelo es el identificador principal de una tarjeta comparativa: usar al menos `0.875rem`, peso 600 y texto normal, no un `subheader` débil en mayúsculas.
- Si dos versiones comparten todos los datos, agruparlas en una tarjeta nombrando explícitamente ambas.
- No crear una tarjeta para cada frase breve.

## 10. Tablas

- Estructura base: `table table-vcenter table-hover card-table` dentro de `table-responsive`.
- Encabezados compactos, en mayúsculas y con peso medio.
- Usar una sombra muy sutil en el contenedor: `0 1px 3px rgba(24, 36, 51, 0.08)`.
- Fondo blanco y bordes suaves.
- El contenedor debe recortar correctamente el fondo de encabezados y filas: usar el radio estándar de la tarjeta, `overflow: hidden` en el contenedor exterior y heredar el radio en `table-responsive`. Las cuatro esquinas deben verse completas, nunca cuadradas, cortadas ni cubiertas por el fondo de la tabla.
- Usar `font-variant-numeric: tabular-nums` cuando facilite comparar números.
- Los encabezados de columna se centran para distinguirlos del cuerpo de la tabla. Los encabezados de fila permanecen alineados a la izquierda.
- Los valores numéricos se alinean a la derecha y usan números tabulares; el texto, los estados y las descripciones se alinean a la izquierda.
- La alineación depende del contenido real de cada celda, no solamente del tema general de la columna. Por ejemplo, un importe se alinea a la derecha, pero `A confirmar` se mantiene a la izquierda aunque aparezca en una columna de costos.
- Los valores comparables que incluyen una unidad o un modificador breve —por ejemplo `75,26 kWh`, `Hasta 120 kW` o `180 kW o más`— se consideran numéricos y se alinean a la derecha.
- Las celdas mixtas con explicación —por ejemplo `$15 a $18/kWh · según horario`— se consideran texto y se alinean a la izquierda. No forzar toda una columna a la derecha si contiene estados o descripciones.
- Las columnas dedicadas exclusivamente a una acción o control breve, como `Detalle`, `Acción` o `Control`, se centran. Los enlaces que forman parte de un nombre, una fuente o una descripción permanecen alineados a la izquierda.
- Los iconos, logos e insignias acompañan la alineación del contenido que identifican: icono + texto comienza a la izquierda; un control iconográfico aislado dentro de una columna de acción se centra.
- Toda página que contenga tablas debe cargar `table-alignment.js`. El script también procesa filas generadas o actualizadas dinámicamente y aplica `.table-cell-numeric`, `.table-cell-text`, `.table-cell-center` y `.table-heading-cell`.
- Para una excepción semántica que el contenido no permita inferir, usar `data-table-align="left"`, `data-table-align="center"` o `data-table-align="right"` en la celda. No resolverla con estilos `text-align` locales.
- Una tabla de consulta o directorio puede justificar una excepción por columna cuando reúne identificadores visuales breves o mezcla valores cortos con estados y la alineación individual produce un zigzag que dificulta el escaneo. En ese caso, declarar `data-column-align="left"`, `data-column-align="center"` o `data-column-align="right"` en el `<th>` correspondiente para alinear semánticamente toda la columna.
- No usar `data-column-align` en tablas analíticas cuando la alineación a la derecha ayuda a comparar magnitudes. En la tabla de operadores de carga, `Conectores` y `Potencia` se centran porque funcionan como referencias breves y la segunda combina valores publicados con estados como `Según punto`.
- En tablas de horarios, alinear a la izquierda una columna que combine horas exactas con descripciones como `Resto del día fuera de Punta`; las horas no son magnitudes en ese contexto.
- En la tabla de resultados de carga domiciliaria, `Franja` y `Horario` se alinean a la izquierda para mantener un eje de lectura estable entre horas exactas y textos como `Resto del día`. `Tiempo`, `Energía`, `Precio/kWh` y `Subtotal` se alinean a la derecha porque contienen magnitudes comparables. Declarar estas decisiones mediante `data-column-align` en sus encabezados para que también alcancen a las filas generadas dinámicamente.
- En tablas de procedencia y actualización, centrar las columnas breves de fecha o estado (`18/6/2026`, `No automatizada`) porque funcionan como metadatos y no como cantidades comparables.
- En matrices por proveedor o taller, centrar las columnas que combinen importes puntuales con estados breves (`Sin costo`, `Incluido`, `A confirmar`) cuando la lectura principal sea identificar la condición aplicable en cada intersección. Conservar a la derecha los importes de tablas estrictamente analíticas.
- Se considera **zigzag de alineación** cuando las celdas de una misma columna alternan entre izquierda, centro y derecha sin que esa diferencia ayude a comparar o comprender los datos. No se considera un error cuando una tabla analítica alterna texto y números por fila y la alineación numérica facilita comparar magnitudes equivalentes entre columnas.
- La auditoría de una página con tablas debe revisar todas las columnas renderizadas, incluidas las filas creadas por JavaScript y los estados posteriores a una interacción. Ante una mezcla de alineaciones, evaluar en este orden: propósito de la tabla, función de la columna, comparabilidad de los valores y resultado visual.
- Si la columna funciona como identificador, horario descriptivo, metadato, acción o matriz de estados, priorizar una alineación uniforme. Si contiene magnitudes comparables, conservar números a la derecha aunque otras filas incluyan estados textuales.
- La corrección debe expresarse con `data-column-align` en el encabezado cuando aplique a toda la columna. Reservar `data-table-align` para una excepción real de una única celda. No duplicar estas decisiones con clases o reglas CSS locales.
- Después de ajustar una alineación, validar como mínimo una vista de escritorio y otra móvil, comprobar que las continuaciones de línea mantengan un eje legible y confirmar que no aparezca desbordamiento horizontal.
- Mantener alineaciones coherentes entre tablas equivalentes y no introducir centrados locales que contradigan este patrón.
- No colorear toda una tabla sin una razón semántica.
- En móvil, permitir desplazamiento de la tabla o adaptar filas según su complejidad; nunca comprimir el texto hasta volverlo ilegible.
- Si la acción principal queda fuera del primer ancho visible, adaptar la tabla: conservar identificador y acción, y trasladar los datos secundarios al panel expandido.
- No exigir desplazamiento horizontal para descubrir el botón que abre un detalle.
- Los badges deben ser nativos de Tabler y su color debe tener significado estable.
- En badges de fondo claro, usar texto oscuro (`#182433`) y conservar la etiqueta textual; no depender del color para distinguir AC y DC.
- Cuando un resumen y su detalle repitan los mismos datos, usar una única tabla con filas expandibles en lugar de dos bloques separados.
- El contenido expandido debe aportar contexto, fuentes o acciones nuevas; no debe repetir los valores que ya se ven en la fila principal.
- Si los datos pueden cambiar, mostrar de forma discreta su procedencia y la fecha de revisión sin competir con el título de sección.
- Las tablas con desbordamiento horizontal deben tener una indicación visible en móvil y un contenedor enfocable con nombre accesible.
- La indicación y el `tabindex` dependen del desbordamiento real, no solo del ancho de pantalla; deben activarse también con zoom o ampliación de texto.

## 11. Acordeones y contenido expandible

Los acordeones deben parecer parte del mismo sistema que las tablas:

- contenedor blanco con borde gris y sombra sutil;
- filas compactas con separadores horizontales;
- hover gris muy suave en filas cerradas;
- encabezado activo con fondo `#edf6fd` y texto `#055dac`;
- indicador visible `Ver detalle` / `Ocultar detalle`;
- chevrón que rota al cambiar de estado;
- en móvil puede ocultarse el texto del indicador, pero no el chevrón.

El contenido abierto debe tener formato explícito:

- descripción breve;
- subtítulo de datos;
- datos organizados en celdas delimitadas;
- valores con peso 600;
- acción separada al final;
- las celdas se apilan en móvil.

Cuando corresponda, mostrar el logo local del operador a la izquierda del nombre.

Los acordeones equivalentes comienzan cerrados salvo que exista una razón editorial explícita para destacar uno.

## 12. Alertas y notas

- Usar las alertas nativas de Tabler con `alert-icon`, `alert-title` y contenido breve.
- Advertencia: amarillo.
- Información: azul suave.
- Error o peligro real: rojo.
- Éxito o confirmación: verde.
- Las cajas semánticas usan un borde izquierdo de 4 px en el color correspondiente y un contorno de 1 px en los demás lados.
- El color nunca es el único indicador: conservar título visible e icono MDI coherente con el mensaje.
- Usar `mdi-information-outline` para información, `mdi-alert-outline` para advertencias, `mdi-alert-circle-outline` para errores y `mdi-check-circle-outline` para confirmaciones.
- Los iconos semánticos son decorativos cuando el título ya comunica el estado; no duplicar su nombre en texto alternativo ni combinar MDI con emojis equivalentes.
- Las cajas semánticas mantienen `12 px` de espacio efectivo tanto al inicio como al final del contenido. El borde no debe producir una diferencia visual entre ambos extremos.
- La separación vertical entre los hijos directos de una caja semántica se controla con un único `gap` de `8 px`. El título, los párrafos, las listas y las acciones directas no agregan márgenes verticales propios que puedan acumularse.
- Horizontalmente, las cajas con icono usan una retícula fija: `12 px` desde el borde izquierdo hasta el icono, icono de `20 px`, `8 px` entre icono y contenido y `12 px` desde el contenido hasta el borde derecho. El contenido comienza a `40 px` del borde izquierdo; esa diferencia respecto del lado derecho es funcional y no un padding arbitrario.
- No centrar el contenido para compensar el icono ni igualar el padding textual izquierdo y derecho: la simetría se valida sobre borde–icono y contenido–borde, manteniendo constante el canal reservado al indicador semántico.
- La igualdad del `padding` declarado no alcanza como validación: comprobar la distancia renderizada desde el borde superior al primer elemento y desde el último elemento al borde inferior, tanto en escritorio como en móvil.
- No usar una alerta grande para información secundaria.
- No repetir el mismo mensaje en una alerta y en el párrafo siguiente.

## 13. Formularios y calculadoras

- Usar `form-label`, `form-control`, `form-select`, `input-group` y `form-hint`.
- Los campos editables usan fondo blanco y contraste claro; no deben parecer deshabilitados.
- Bordes de inputs, selects y sufijos: `#7c8a9a` como mínimo sobre blanco. Placeholders: `#5b6878`.
- Labels siempre visibles y asociados mediante `for`/`id`.
- Ayuda secundaria inmediatamente debajo del campo relacionado.
- Errores solo ocupan espacio cuando tienen contenido y deben estar asociados al campo.
- Los campos relacionados permanecen en una misma fila cuando el ancho lo permite y se apilan ordenadamente en móvil.
- Resultados: usar una tarjeta o `datagrid` de Tabler con jerarquía clara.
- Los pares etiqueta/valor de resultados usan `dl`, `dt` y `dd`; un bloque visual armado solo con `div` no reemplaza esa relación semántica.
- Mostrar estados comprensibles: esperando datos, valores modificados, error y resultado actualizado.
- Validar rangos, campos obligatorios y relaciones entre valores antes de calcular.
- Ocultar resultados anteriores cuando cambien los datos que los originaron.
- Ofrecer una acción secundaria de restablecimiento cuando el formulario tenga varios campos.
- Los presets indican visual y semánticamente cuál está activo mediante estado seleccionado y `aria-pressed`; al editar manualmente el campo, se limpia ese estado.
- Los atajos táctiles compactos usan una altura mínima recomendada de 36 px, aunque el mínimo técnico de WCAG sea menor.
- Si dos modelos comparten capacidad y límites, agruparlos en el selector nombrando ambos.
- No depender únicamente de placeholders para explicar un campo.
- No preseleccionar valores que cambien materialmente el resultado si no existe una opción claramente predominante y segura.
- En cálculos de carga, exigir la elección consciente del modelo, los porcentajes de batería y la potencia del cargador.
- Ordenar los campos según la secuencia mental de la tarea. Para carga pública: modelo, porcentajes de batería, potencia y acción; no distribuirlos en columnas que obliguen a volver visualmente hacia atrás.
- En formularios cortos, limitar el ancho útil y separar las etapas principalmente con espacio vertical; reservar los divisores para transiciones claras, como el paso de los campos a las acciones.
- Usar placeholders solo como ejemplos y ofrecer atajos explícitos para escenarios frecuentes, sin confundirlos con datos reales del usuario.
- Ubicar cada atajo junto al campo que modifica; no mezclar presets de batería y potencia en un único grupo genérico.
- Mantener el resultado oculto hasta que todos los campos obligatorios sean válidos.
- Si el resultado ya aparece en una región `aria-live`, no agregar además un mensaje visible de “resultado actualizado”; reservar el estado auxiliar para errores, cambios pendientes o restablecimientos.
- En resultados complejos, la región visible debe usar `role="region"` y `aria-labelledby`; el anuncio dinámico debe quedar en un `aria-live` separado, breve y exclusivamente textual. No convertir tablas, tarjetas, enlaces ni bloques completos en regiones vivas.
- Los resultados deben comenzar con un título visible y un resumen semántico de los datos usados. Evitar mostrar la operación matemática completa cuando alcanza con indicar rango solicitado, porcentaje y energía estimada.
- Diferenciar explícitamente la potencia publicada por el cargador de la potencia efectiva estimada que usa el cálculo.
- Si el tipo de carga ya fue seleccionado y aparece en el resumen del resultado, no repetir una columna o insignia AC/DC en la comparación. Usar ese espacio para datos que expliquen el cálculo.
- En comparaciones de carga, presentar la potencia como `Potencia considerada`: distinguir `Disponible` de `Usada en el cálculo`. La segunda refleja los límites combinados del punto, el operador y el vehículo.
- No asumir que la persona conoce las siglas AC y DC. En el selector mostrar siempre la sigla, el conector y su significado en lenguaje común: `AC · Tipo 2 — Corriente alterna` y `DC · CCS2 — Corriente continua`. La diferencia de velocidad puede explicarse en el texto de ayuda.
- Las etiquetas comparativas como `más económico` o `más rápido` solo se muestran cuando existe una comparación real. Si todas las opciones empatan, explicarlo una sola vez y no repetir la misma etiqueta en todas las filas.
- No usar bordes, colores de advertencia ni etiquetas como `equilibrado` o `referencia rápida` sin una definición objetiva y visible.
- En móvil, agrupar las variantes tarifarias de un mismo operador dentro de una sola tarjeta. No repetir el nombre, la fuente ni los datos comunes en una tarjeta por cada franja.
- En tablas de escritorio, cuando varias filas consecutivas pertenecen al mismo operador y comparten tipo y potencia, agrupar visual y semánticamente esas celdas. Las franjas, costos y tiempos permanecen en filas independientes.
- El color de énfasis del resumen no debe envolver también la tabla, los supuestos y las advertencias. Separar el resumen compacto, la comparación tabular y las notas posteriores para evitar bloques de color excesivamente grandes.
- Las aclaraciones sobre carga por encima del 80% deben escribirse como una nota asociada al resultado. No usar asteriscos sin explicación inmediata.
- Mostrar “Valores modificados” únicamente cuando exista un cálculo previo que haya quedado desactualizado; no mostrarlo durante la primera carga de datos.
- El resultado resume el contexto que lo produjo —modelo y rango de batería— para evitar que el usuario deba reconstruirlo de memoria.
- Para resultados inicialmente ocultos, usar una región viva separada y siempre disponible para anunciar el resumen calculado. No confiar en mostrar de golpe una región previamente excluida del árbol de accesibilidad.

## 14. Accesibilidad

- Objetivo mínimo: WCAG 2.2 nivel AA.
- Contraste mínimo de texto normal: 4.5:1.
- Mantener foco visible.
- El foco de enlaces, botones, campos, selects y regiones enfocables usa un contorno sólido de 3 px (`#055dac`) con separación de 2 px.
- Todos los controles deben funcionar con teclado.
- No usar color como única señal.
- Tablas con encabezados semánticos y `caption` cuando corresponda.
- Acordeones con `aria-expanded`, `aria-controls` e identificadores únicos.
- Imágenes decorativas junto a texto equivalente usan `alt=""`.
- Los iconos decorativos usan `aria-hidden="true"`.
- Mantener enlace para saltar al contenido principal.

## 15. Validación visual

Antes de dar por terminado un cambio importante:

1. Revisar a aproximadamente 1900 px de ancho.
2. Revisar a 500 px y, cuando sea posible, 390 px.
3. Comprobar tablas, acordeones, formularios, alertas y navegación.
4. Revisar contraste y foco.
5. Verificar IDs únicos y destinos de acordeones.
6. Ejecutar `git diff --check`.

## 16. Principios de experiencia de usuario

Todas las decisiones deben poder justificarse mediante estos principios, en este orden:

1. **Claridad:** la persona entiende qué página está viendo, qué puede hacer y qué información es confiable.
2. **Consistencia:** componentes equivalentes se ven y funcionan igual en todo el sitio.
3. **Economía visual:** cada elemento ocupa solamente el espacio necesario y no compite sin motivo.
4. **Reconocimiento antes que recuerdo:** opciones, unidades, límites y estados son visibles en el momento de usarlos.
5. **Control del usuario:** ningún dato editable cambia inesperadamente y ninguna acción irreversible ocurre sin confirmación.
6. **Prevención de errores:** se impiden combinaciones inválidas antes de calcular o enviar.
7. **Recuperación:** los errores indican qué pasó, dónde y cómo corregirlo.
8. **Accesibilidad:** la experiencia es equivalente con teclado, lector de pantalla, zoom y dispositivos táctiles.
9. **Confianza:** datos, fechas, procedencia y limitaciones se expresan sin exageraciones.
10. **Rendimiento percibido:** evitar saltos de layout, espacios reservados vacíos y dependencias remotas innecesarias.

### Heurísticas de Nielsen aplicadas

- **Visibilidad del estado:** mostrar carga, actualización, error, selección activa, acordeón abierto y resultado vigente.
- **Correspondencia con el mundo real:** usar palabras cotidianas como `Potencia del cargador`, `Batería inicial` y `Costo`, con unidades visibles.
- **Control y libertad:** ofrecer restablecimiento cuando sea útil, mantener campos editables y no cambiar valores automáticamente después de la inicialización.
- **Consistencia y estándares:** respetar patrones de Tabler, HTML semántico y convenciones ya adoptadas.
- **Prevención de errores:** validar obligatoriedad, rangos, fechas pasadas y relaciones entre campos.
- **Reconocimiento:** mostrar opciones frecuentes cerca del campo correspondiente y explicar abreviaturas cuando aparecen por primera vez.
- **Flexibilidad:** permitir edición manual además de presets; no obligar a recorrer pasos innecesarios.
- **Diseño minimalista:** eliminar repeticiones, ejemplos superfluos, títulos dobles y cajas sin función.
- **Diagnóstico y recuperación:** mensajes concretos, próximos al campo y redactados como solución.
- **Ayuda:** incluir ayuda contextual breve y fuentes al final cuando el dato sea variable o externo.

## 17. Tokens y variables obligatorias

Los estilos compartidos deben expresar decisiones mediante variables. Evitar valores aislados repetidos.

```css
:root {
  --tblr-primary: #0770d1;
  --tblr-primary-rgb: 7, 112, 209;
  --tblr-link-color: #0770d1;
  --tblr-link-hover-color: #055dac;
  --aion-ink: #182433;
  --aion-muted: #667382;
  --aion-border: #dce1e7;
  --aion-bg: #f6f8fb;
  --aion-soft: #edf6fd;
}
```

Estados aprobados:

| Estado | Uso | Tratamiento |
|---|---|---|
| Normal | contenido y controles | fondo blanco, texto `#182433` |
| Hover | filas, enlaces y botones | cambio sutil, sin desplazamiento |
| Activo | navegación o preset | azul suave y texto primario |
| Foco | cualquier control | contorno `3px #055dac`, offset `2px` |
| Información | contexto relevante | azul suave, icono monocromático |
| Advertencia | dato a confirmar o riesgo de error | amarillo, nunca rojo |
| Error | dato inválido o acción fallida | rojo con explicación textual |
| Éxito | confirmación real | verde con explicación textual |
| Deshabilitado | acción no disponible | contraste suficiente y `aria-disabled` cuando corresponda |

No introducir un color nuevo hasta comprobar que ningún token existente cumple la misma función.

## 18. Anatomía canónica de una página

El orden recomendado es:

1. enlace `Saltar al contenido`;
2. navegación principal;
3. encabezado con un único `h1` e icono MDI monocromático;
4. descripción breve, idealmente uno o dos párrafos;
5. alerta crítica, solo cuando sea necesaria;
6. navegación interna, solo cuando existan al menos tres destinos útiles y se cumplan los criterios funcionales definidos en esta guía;
7. secciones principales en orden de tarea o decisión;
8. fuentes, procedencia y fechas al final del contenido al que aplican;
9. acceso al grupo de WhatsApp en la navegación, no repetido arriba y abajo del contenido.

### Encabezado

- El `h1` describe la página, no el sitio completo.
- El icono es monocromático, decorativo y usa `aria-hidden="true"`.
- La descripción no repite literalmente el `h1`.
- Evitar pretítulos genéricos como `Herramienta`, `Uruguay`, `Información` o el nombre del grupo del menú si no agregan contexto.
- No colocar botones de acceso rápido que repitan inmediatamente la navegación interna o lateral.
- Si una acción es imprescindible, debe existir una acción principal clara; las demás quedan como enlaces secundarios.

### Secciones

- Cada sección responde una pregunta o tarea concreta.
- Un `h2` no debe ser seguido por otro título equivalente sin contenido intermedio.
- El primer elemento después de un título no debe quedar pegado ni excesivamente separado.
- Los metadatos no compiten con el título: tamaño pequeño, color secundario y ubicación posterior cuando sea posible.
- Si una sección se entiende mejor como tabla, usar tabla; si es una secuencia, usar lista; si es información breve comparable, usar tarjetas; no elegir componentes por decoración.

## 19. Escala tipográfica detallada

La familia es la definida por Tabler. No cargar otra familia salvo decisión global documentada.

| Rol | Tamaño | Línea | Peso | Color |
|---|---:|---:|---:|---|
| `body` | 14 px | 1.5 | 400 | `#182433` |
| `h1` | 24 px | 1.25 | 600 | `#182433` |
| `h2` | 18 px | 1.35 | 600 | `#182433` |
| `h3` | 16 px | 1.4 | 600 | `#182433` |
| título de tarjeta | 16 px | 1.4 | 600 | `#182433` |
| label | 14 px | 1.4 | 500–600 | `#182433` |
| encabezado de tabla | 12 px | 1.4 | 500–600 | secundario |
| helper | 12–13 px | 1.45 | 400 | `#667382` |
| metadato | 12 px | 1.4 | 400 | `#667382` |
| valor principal | 16–18 px | 1.3 | 600 | `#182433` |

Reglas adicionales:

- No usar mayúsculas sostenidas en títulos editoriales.
- Las mayúsculas se reservan para encabezados compactos de tabla o grupos de navegación.
- No usar peso 700 en párrafos, labels completos ni filas completas.
- La negrita destaca una etiqueta breve, no una oración entera.
- Los números comparables usan cifras tabulares.
- Las unidades permanecen junto al número mediante espacios no separables cuando sea necesario.
- No mezclar `kW`, `Kw` y `KW`; usar `kW`. Usar `kWh` para energía.
- En español usar coma decimal y punto de miles.

## 20. Sistema de espaciado detallado

Escala base:

| Token conceptual | Valor | Uso típico |
|---|---:|---|
| mínimo | 4 px | elementos inseparables |
| pequeño | 8 px | icono–texto, label–input, filas internas |
| medio | 12 px | tabla–nota, grupo compacto |
| estándar | 16 px | padding de tarjeta, controles relacionados |
| sección | 24 px | separación entre bloques principales |
| amplio | 32 px | cambio fuerte de tema, uso excepcional |

Aplicación:

- título de página → descripción: 8–12 px;
- descripción → alerta o navegación: 16–24 px;
- `h2` → contenido: 12–16 px;
- párrafos relacionados: 8–12 px;
- tabla → nota relacionada: 12 px;
- tabla → nueva sección: 24 px;
- botón → feedback: 8 px;
- campos de una misma etapa: 16 px;
- etapas de formulario: 20–24 px.

No sumar margen inferior de un componente y margen superior del siguiente sin comprobar el resultado. Los elementos ocultos o vacíos usan `display: none` y no reservan espacio.

## 21. Layout y comportamiento responsive

### Escritorio

- Barra lateral: `17rem`.
- Contenido: máximo `90rem`, alineado al comienzo del área útil.
- No centrar el contenido dejando el menú aislado a la izquierda.
- Las líneas de texto editorial no deben superar aproximadamente `52rem`.
- Formularios complejos pueden limitarse a `58rem`.
- Tablas comparativas pueden usar todo el ancho disponible.

### Puntos de comprobación

- `>= 1900px`: uso eficiente del espacio sin líneas excesivamente largas.
- `1440px`: escritorio habitual.
- `992px`: transición entre barra lateral y navegación superior.
- `680px`: adaptación de tablas complejas y paneles expandibles.
- `500px`: móvil amplio.
- `390px`: móvil de referencia obligatorio.
- `360px`: móvil angosto y botones apilados.

### Reglas móviles

- `page`, `page-wrapper` y contenedor principal usan `width: 100%`, `max-width: 100%` y `min-width: 0`.
- No ocultar un desborde real con `overflow-x: hidden`; corregir el elemento que lo provoca.
- Se admite scroll horizontal únicamente dentro de un contenedor identificado como desplazable.
- Ningún botón esencial queda fuera del primer ancho visible.
- El orden visual debe coincidir con el orden del DOM.
- Las tarjetas se apilan sin reducir la fuente.
- Las métricas compartidas pueden conservar columnas solo si cada valor sigue siendo legible.
- Las áreas táctiles buscan 44 × 44 px; los atajos compactos nunca bajan de 36 px de alto.

## 22. Navegación global e interna

### Menú global

- Mantener siempre los grupos `Vehículo`, `Carga`, `Propiedad` y `Comunidad` mientras esa taxonomía siga vigente.
- Usar nombres cortos en el menú y títulos completos en la página.
- La opción activa debe estar marcada visualmente y mediante `aria-current="page"`.
- El logo/nombre del sitio enlaza a Inicio.
- Los iconos tienen ancho visual uniforme y no dependen de color.
- En móvil, el botón del menú mantiene label dinámico y foco visible.
- La transición entre el lateral y el encabezado móvil ocurre en `992px`: lateral desde `992px` y menú colapsable hasta `991px`.
- En escritorio, la marca y WhatsApp permanecen visibles; la lista central es la única zona desplazable.
- Al cargar una página, la opción activa debe quedar visible dentro del área desplazable.
- `Pública` y `En casa` conservan esos textos visuales dentro del grupo `Carga`, pero sus nombres accesibles completos son `Carga pública` y `Carga en casa`.

Estructura canónica:

```text
Inicio

Vehículo
  Modelos y datos
  Seguridad
  Comandos de voz

Carga
  Pública
  En casa
  Apps
  Gestiones UTE

Propiedad
  Red GAC
  Mantenimiento
  Costos

Comunidad
  Videos y experiencias
  Problemas
  Preguntas
```

- `especificaciones.html` y `comparativa.html` son páginas heredadas: mientras sigan disponibles, deben redirigir a `Modelos y datos` y no reaparecer como destinos principales.
- `calculadora-publica.html` y la calculadora heredada marcan `Pública`; `calculadora-casa.html` marca `En casa`.

Los divisores horizontales no sustituyen títulos ni espaciado. Usarlos solamente para separar bloques extensos y semánticamente distintos dentro de una misma herramienta o sección compleja. Omitirlos entre secciones consecutivas cuando la jerarquía de títulos y el espacio vertical ya expresan la separación.

### Navegación interna

- Su incorporación requiere una decisión editorial y de UX; no es un componente obligatorio ni decorativo.
- El mínimo de tres destinos útiles es una condición necesaria, pero no suficiente. No crear secciones artificiales ni elevar subtítulos menores a `h2` solamente para alcanzar ese número.
- Agregarla únicamente cuando se cumplan **todas** estas condiciones:
  1. existen al menos tres secciones principales, estables y de jerarquía equivalente;
  2. cada destino responde una pregunta, tarea o categoría reconocible por sí misma;
  3. las etiquetas pueden ser breves, distintas entre sí y coherentes con sus `h2`;
  4. saltar directamente entre secciones reduce desplazamiento, retroceso o carga de memoria;
  5. el componente no duplica de forma inmediata el menú lateral, las acciones del encabezado ni otro selector existente.
- Además, debe existir al menos una señal concreta de utilidad:
  - la página supera claramente una pantalla de lectura y las secciones importantes quedan alejadas entre sí;
  - es razonable que una persona consulte las secciones en un orden diferente al publicado;
  - existen enlaces directos externos o internos que necesitan destinos estables mediante hash;
  - la persona vuelve con frecuencia a comparar bloques pares de una misma página.
- No agregar navegación interna cuando:
  - hay una o dos secciones principales;
  - la página es breve y todos los destinos se reconocen con poco desplazamiento;
  - el contenido forma un recorrido secuencial que conviene completar en orden, como un formulario o planificador;
  - una tabla de contenido repetiría categorías ya visibles en acordeones, pestañas, filtros o tarjetas;
  - los destinos serían notas, fuentes, alertas, resultados temporales o subtítulos secundarios;
  - el único motivo es lograr simetría con otra página.
- Antes de implementarla, revisar la página a 1440 × 900 px y a 390 × 844 px. Si el beneficio no es evidente en al menos uno de esos contextos, omitirla.
- Las etiquetas coinciden conceptualmente con los `h2`, aunque pueden abreviarse sin cambiar el significado.
- Usar un `<nav>` con nombre accesible, enlaces reales a IDs estables y comprensibles, y foco visible.
- El destino debe quedar visible sin ocultarse detrás de encabezados persistentes.
- La opción activa se actualiza según la sección realmente visible, el enlace seleccionado y el hash inicial. No comunicar el estado activo solo mediante color.
- En móvil, permitir ajuste en varias filas o desplazamiento horizontal deliberado sin provocar desbordamiento de la página.
- No hacerla fija durante el desplazamiento salvo que una prueba de uso demuestre que aporta más que el espacio que consume.
- En la auditoría final, comprobar que quitarla empeoraría objetivamente la orientación o el acceso. Si no existe esa diferencia, debe eliminarse.
- No repetir las mismas acciones como botones inmediatamente encima o debajo.

## 23. Botones, enlaces y acciones

Jerarquía:

1. una acción principal por contexto;
2. acciones secundarias outline;
3. enlaces de texto para referencias y navegación editorial;
4. acciones destructivas solo cuando existan y con confirmación.

Contenido:

- verbo + objeto: `Calcular carga`, `Restablecer valores`, `Consultar tarifas`;
- evitar `Ver más` cuando puede nombrarse el destino;
- no terminar botones con punto;
- no usar emojis;
- icono MDI decorativo con `aria-hidden="true"`;
- enlaces externos incluyen indicación visual y texto accesible de nueva pestaña.

Estados:

- hover sin movimiento ni cambio brusco de tamaño;
- foco más visible que hover;
- estado presionado en presets con `aria-pressed`;
- disabled no debe parecer una acción disponible;
- el texto no debe perder contraste en hover o active.

## 24. Tarjetas, métricas y resúmenes

- Una tarjeta agrupa contenido relacionado que puede entenderse como unidad.
- No encerrar cada párrafo en una tarjeta.
- No usar tarjetas para equivalencias que una tabla expresa mejor.
- Las tarjetas hermanas tienen padding, altura visual y jerarquía equivalentes.
- No usar sombras grandes; la elevación se limita a la sombra sutil aprobada.
- Los resúmenes horizontales usan ancho ajustado al contenido en escritorio y ancho completo en móvil.
- Los valores principales son más visibles que sus labels, pero nunca mayores que el `h1`.
- Las comparaciones no usan color para insinuar ganador salvo criterio explícito, verificable y explicado.

## 25. Tablas: especificación completa

### Estructura

```html
<div class="card table-card">
  <div class="table-responsive" role="region" aria-labelledby="titulo-tabla">
    <table class="table table-vcenter card-table">
      <caption class="visually-hidden">Descripción completa</caption>
      <thead>...</thead>
      <tbody>...</tbody>
    </table>
  </div>
</div>
```

### Semántica

- `caption` describe la finalidad, no repite solamente el `h2`.
- Encabezados de columna usan `scope="col"`.
- Encabezados de fila usan `scope="row"` cuando corresponde.
- Las unidades se indican en el encabezado si aplican a toda la columna.
- Los datos desconocidos dicen `A confirmar`, `Confirmar en app` o equivalente; no usar guiones ambiguos.

### Presentación

- Alinear texto a la izquierda, números comparables a la derecha y encabezados de columna al centro.
- No centrar párrafos ni valores extensos.
- Mantener padding consistente.
- Evitar celdas con párrafos largos; mover contexto a detalle expandible o nota.
- Conservar bordes suaves entre filas.
- El contenedor exterior controla el radio y recorta los fondos internos.
- No aplicar fondo celeste a una tabla completa salvo estado seleccionado.

### Tablas expandibles

- La fila resumen contiene lo necesario para decidir si abrir: identificador, datos clave y acción.
- `Ver detalle` / `Ocultar detalle` debe ser visible en escritorio.
- En móvil puede quedar solo el chevrón, con nombre accesible completo.
- El detalle usa un único `td` con `colspan` correcto.
- `aria-controls` apunta a un ID único; `aria-expanded` refleja el estado real.
- El chevrón rota, pero la rotación no es la única señal.
- La fila abierta usa fondo azul suave y mantiene contraste.
- El detalle no repite toda la fila: agrega explicación, tarifas desglosadas, fuente o acciones.
- Los logos son locales, decorativos si el nombre aparece al lado y tienen dimensiones explícitas.

## 26. Datos de carga, operadores y tarifas

Estas reglas son específicas del dominio del sitio:

- Para compatibilidad de la AION V, mostrar solamente conectores `Tipo 2` y `CCS2`.
- No listar otros estándares en tablas, tarjetas ni resúmenes. Si la compatibilidad no está confirmada, usar `Confirmar en app`.
- Diferenciar potencia publicada del cargador, potencia efectiva y límite del vehículo.
- No presentar una potencia de red como potencia garantizada durante toda la sesión.
- Cuando el operador varía por estación, horario o ubicación, decirlo explícitamente.
- Si la tarifa solo puede verificarse dentro de una app, no presentarla como actualización web automática.
- Distinguir fuente oficial, aplicación, automatización y aporte comunitario.
- Todos los importes visibles se muestran como precios finales. No agregar leyendas que indiquen que incluyen impuestos.
- Cuando una fuente publique importes netos, convertirlos antes de mostrarlos y conservar internamente la procedencia del cálculo.
- Usar moneda `$` para pesos uruguayos cuando el contexto sea inequívoco; aclarar `UYU` solo cuando exista riesgo de confusión con USD.
- Informar cargos base, energía, inactividad, reserva, estacionamiento o espacio privado cuando apliquen.
- No resumir como `precio por kWh` un esquema que también tiene cargos fijos o por tiempo.
- Las tarifas dinámicas deben incluir fecha de información y fecha de verificación cuando existan.
- Las fechas y fuentes se ubican al final del bloque o en metadatos discretos, no antes del contenido principal.

## 27. Formularios y calculadoras: patrón completo

### Flujo

- Ordenar los campos como la persona piensa la tarea.
- Agrupar solamente variables relacionadas.
- Separar etapas mediante espacio, no mediante una proliferación de líneas.
- Mostrar unidades como sufijo del campo, no dentro del label ni solamente en placeholder.
- No preseleccionar datos que puedan producir un resultado aparentemente válido sin decisión consciente.

### Campos

- `label` visible y asociado.
- Placeholder como ejemplo: `Ej. 180`, nunca como instrucción única.
- Helper breve inmediatamente debajo.
- Inputs blancos, borde `#7c8a9a`, texto oscuro.
- Dropdown con indicador visible y opción inicial instructiva cuando la selección sea obligatoria.
- Presets junto al campo que modifican.
- Campos inicial/final en la misma fila cuando el ancho lo permita.
- Fechas y horas validan pasado, obligatoriedad y coherencia.

### Validación

- Validar al calcular y, cuando mejore la experiencia, al abandonar el campo.
- No mostrar errores antes de que exista interacción relevante.
- El mensaje nombra la acción correctiva: `Ingresá la hora límite para calcular cuándo empezar.`
- La región de error usa `role="alert"` o asociación equivalente.
- Un error vacío no reserva altura.
- El foco se dirige al primer campo inválido después de una acción fallida.

### Resultados

- Permanecen ocultos hasta disponer de datos válidos.
- El título es explícito: `Resultado estimado`, `Horario sugerido de menor costo`.
- Resumen de contexto: modelo, batería inicial/final y condiciones relevantes.
- Pares de datos con `dl`, `dt`, `dd`.
- Dos decimales para potencia efectiva cuando así esté definido.
- Duraciones en `HH:mm` cuando la comparación temporal lo requiera.
- No mostrar la operación matemática si el usuario solo necesita el resultado.
- Las advertencias condicionales aparecen únicamente cuando se cumple la condición.
- Una región viva anuncia el resultado sin duplicarlo visualmente.
- `Restablecer valores` restaura el estado inicial y limpia resultados, errores y presets.

## 28. Alertas, notas y mensajes

Antes de crear una alerta, preguntar:

1. ¿requiere atención antes de continuar?;
2. ¿afecta una decisión o puede causar error?;
3. ¿ya está explicado en otro lugar?;
4. ¿una nota breve sería suficiente?

Composición:

- icono centrado verticalmente respecto del conjunto;
- icono con tamaño suficiente, aproximadamente 24 px en alertas principales;
- título breve;
- uno o más párrafos cortos;
- listas cuando hay tres o más condiciones;
- enlaces solamente si ayudan a resolver o verificar.

No usar rojo para información pendiente, cambios de versión o datos a confirmar. Esos casos son advertencias amarillas.

## 29. Fuentes, actualización y procedencia

- Las fuentes se colocan después de los datos que respaldan.
- Un bloque de fuentes no debe interrumpir el flujo principal.
- Para múltiples fuentes comparables, usar tabla con `Fuente`, `Información actualizada` y `Actualización automática`.
- Eliminar columnas redundantes como `Origen` si el nombre y enlace ya identifican la procedencia.
- El enlace conserva el nombre completo de la fuente.
- Logos de fuente: 22 × 22 px, locales, decorativos y no enlazados por separado.
- Diferenciar claramente:
  - fecha del dato;
  - fecha de última ejecución automática;
  - fecha de revisión manual;
  - tipo de fuente.
- No afirmar actualización automática cuando la información exige abrir una aplicación.
- Si falla una actualización, conservar el último dato válido y mostrar el estado sin reemplazarlo por cero o texto inventado.

## 30. Redacción y contenido editorial

### Voz

- Español de Uruguay, tratamiento de `vos`.
- Directo, cordial y técnico sin burocracia.
- Preferir `elegí`, `verificá`, `consultá`, `podés`.
- Evitar anglicismos si existe una palabra clara, salvo nombres de funciones o productos.

### Párrafos

- Una idea principal por párrafo.
- Usar punto y aparte para ideas completas consecutivas.
- Evitar párrafos mayores a cuatro líneas en escritorio.
- No unir advertencia, explicación y acción en una sola oración extensa.

### Listas

- Usar bullets para condiciones equivalentes, factores, requisitos o pasos no secuenciales.
- Usar números para procesos ordenados.
- Mantener estructura gramatical paralela.
- No crear una lista de un único elemento.

### Redundancia editorial

- No repetir `Uruguay` si la identidad global ya lo establece y no diferencia mercados.
- No repetir el modelo en cada oración si el contexto lo mantiene claro.
- No repetir la fuente debajo de cada subtítulo si existe un bloque de fuentes común.
- No repetir una limitación en alerta, tabla y nota; elegir la ubicación de mayor utilidad.
- No repetir el nombre de la sección en un subtítulo inmediato.
- No repetir `datos para el cálculo` si el título de la calculadora y los labels ya lo explican.
- La descripción del encabezado debe resumir el propósito de la página; no debe convertirse en una segunda navegación ni enumerar en otro párrafo lo que ya muestran los accesos internos.
- En formularios, cada texto cumple una sola función: el `label` identifica el dato, la ayuda explica formato o restricciones, el contexto informa un estado dinámico y el estado vacío indica brevemente qué falta. No repetir la misma instrucción en los cuatro lugares.
- Un placeholder no reemplaza al `label`, pero tampoco obliga a agregar una ayuda que solo diga que se abra o complete el control.
- Los estados vacíos mencionan la acción general pendiente, sin volver a enumerar todos los campos visibles salvo que esa enumeración ayude a localizar un error.
- Los supuestos desplegables contienen condiciones adicionales; no repiten que el resultado es estimado si el título, la tabla o una nota visible ya lo informan.
- La duplicación de datos para escritorio y móvil solo se admite cuando ambas representaciones son mutuamente excluyentes mediante CSS, responden al mismo contenido y se mantienen sincronizadas.
- Las repeticiones estructurales necesarias —por ejemplo, la etiqueta de navegación y el `h2` de destino, o una misma acción para distintos operadores— no se consideran redundancia editorial.

### Terminología, estados y fechas canónicas

Estas reglas son transversales y se aplican a todas las páginas públicas. Las reglas particulares de una sección pueden agregar contexto, pero no crear otra redacción para el mismo estado.

- Para la fecha en que se modificó manualmente una página o un bloque, usar `Última actualización`.
- Para la fecha propia del dato publicado por una fuente, usar `Información actualizada` o `Datos actualizados`, según la estructura ya existente.
- Si una automatización obtiene y reemplaza el dato publicado, usar `Última actualización automática`.
- Si una automatización solamente comprueba la fuente o confirma que el dato sigue vigente, usar `Última verificación automática`.
- No usar en páginas públicas variantes internas como `revisión editorial`, `revisión general`, `última revisión`, `actualización de esta sección` o `actualización de esta recopilación`.
- Las fechas completas visibles usan `dd/mm/aaaa` y, cuando estén escritas en HTML, se marcan preferentemente con `<time datetime="aaaa-mm-dd">`.
- Si solo se conoce mes y año, no inventar un día.
- No presentar una verificación manual como actualización automática.
- No actualizar una fecha si no cambió ni se volvió a comprobar la información a la que corresponde.

Estados canónicos:

- Dato todavía no publicado o pendiente de comprobar: `A confirmar.`
- Ausencia de información oficial: `No hay información oficial confirmada.`
- Función o servicio cuya indisponibilidad local esté confirmada: `No disponible en Uruguay.`
- Ausencia de una medida provisoria conocida: `No hay una alternativa temporal conocida.`
- Ausencia de una solución definitiva confirmada: `No hay una solución oficial confirmada.`

No alternar estos estados con expresiones equivalentes como `falta confirmar`, `sin datos`, `no hay solución actualmente`, `sin solución definitiva`, `no existe una corrección conocida` o `no hay una medida dentro del sistema`. Si hace falta explicar el motivo, conservar primero el texto canónico y agregar el contexto en un párrafo aparte.

### Copiar y compartir contenido

Estas reglas son **transversales** y se aplican a cualquier página que permita copiar contenido para compartirlo:

- La interfaz conserva Material Design Icons (MDI) monocromáticos. Los emojis no sustituyen los iconos estructurales ni se muestran dentro del botón.
- Como el portapapeles y WhatsApp reciben texto plano, el contenido copiado puede convertir los iconos de la interfaz en emojis semánticamente equivalentes para conservar jerarquía y facilitar el escaneo.
- Los emojis usados en el texto compartido deben acompañar al texto, nunca reemplazar información necesaria. No depender del color, la forma ni el emoji para comunicar el significado.
- Mantener una jerarquía breve y predecible: encabezado o título, contenido, datos operativos, advertencia si corresponde y enlace directo o fuente al final.
- Conservar los saltos entre ideas y párrafos. No convertir una tarjeta legible en la página en un único renglón largo al copiarla.
- Copiar solamente información visible o derivada directamente de ella. No incorporar afirmaciones, estados, fechas o alcances que la página no respalde.
- Si el contenido tiene un destino identificable, incluir un enlace directo y estable. Cuando exista un ancla semántica, preferir la URL de esa ancla sobre la URL genérica de la página.
- El botón debe describir la acción real. Usar `Copiar para WhatsApp` cuando copia texto pensado para compartir allí; no afirmar que abre o envía el mensaje si solamente escribe en el portapapeles.
- Confirmar el éxito o error de la copia visualmente y mediante una región viva ya presente en el DOM. El cambio de icono o etiqueta es temporal y luego vuelve al estado inicial.
- Mantener una alternativa de copiado cuando `navigator.clipboard` no esté disponible, sin degradar la estructura del texto.
- Validar el texto final generado, no solamente el HTML visible: emojis, acentos, saltos, orden, URL y ausencia de contenido duplicado.

Las correspondencias exactas de emojis, el orden de campos y los textos propios de cada tipo de contenido pertenecen a la regla específica de su página. No trasladar automáticamente el formato de Problemas a Preguntas, calculadoras, operadores u otras secciones.

## 31. Reglas por página y tipo de sección

### Inicio — `index.html`

- Funciona como portada y orientación, no como copia resumida de todas las páginas.
- Presenta versiones disponibles, accesos esenciales y novedades verificadas.
- No listar todos los enlaces ni repetir especificaciones extensas.
- Priorizar Seguridad, Especificaciones, Carga y Comunidad según relevancia.
- Revisar que las tarjetas enlacen a destinos distintos y útiles.

### Especificaciones — `especificaciones.html`

- Separar datos compartidos de diferencias entre versiones.
- Una sola tabla para diferencias principales cuando sea viable.
- Mecánica y eficiencia deben cubrir todas las versiones vigentes.
- No duplicar datos compartidos dentro de cada columna de versión.
- Fuentes oficiales y referencias complementarias al final.

### Comparativa — `comparativa.html`

- Comparar las tres denominaciones vigentes cuando corresponda.
- Columnas y filas deben mantener la misma unidad y nivel de precisión.
- No insinuar superioridad mediante color sin criterio explícito.
- Evitar múltiples tablas pequeñas si una tabla única permite comparar mejor.

### Modelos y datos — `especificaciones-versiones.html`

- La comparación detallada permite elegir exactamente dos modelos.
- El control de vista usa un selector segmentado claramente visible con las opciones `Ver todas` y `Ver solo diferencias`; conserva radios nativos accesibles, foco visible y estado seleccionado explícito.
- `Ver solo diferencias` compara únicamente los dos modelos elegidos, no las tres versiones disponibles ni la cantidad de grupos visuales de una fila.
- La igualdad se determina por el dato técnico canónico. Etiquetas de fuente, estados editoriales y aclaraciones como `Medición disponible en AION V` no convierten por sí solas un mismo valor en una diferencia.
- Cuando los dos valores canónicos coinciden, la fila completa se oculta en la vista de diferencias, aunque cada modelo necesite una nota de procedencia distinta en la vista completa.
- Al cambiar cualquiera de los modelos, recalcular de inmediato qué filas son realmente diferentes y mantener los encabezados sincronizados con la pareja visible.

### Seguridad — `seguridad.html`

- Separar claramente ANCAP, Euro NCAP, ADAS y advertencias.
- Explicar siglas y funciones sin inventar equipamiento.
- Las estrellas y porcentajes necesitan texto accesible.
- Tablas de puntuación con iconos monocromáticos y números neutrales.
- No repetir fuentes en cada título; consolidarlas al final del bloque correspondiente.

### Carga pública — `carga-publica.html`

- Contiene la calculadora pública, consumo del viaje, redes, conectores, tarifas de referencia y acceso a apps.
- Ordenar el recorrido según la tarea principal: calculadora pública → operadores → capacidad y límites → herramientas complementarias → fuentes y actualización → enlaces relacionados.
- Mantener `24 px` entre esos cuatro bloques principales. El título de cada bloque empieza en el borde superior de su sección y no suma un segundo margen.
- La navegación interna debe seguir ese mismo orden. El destino de `Calculadora` incluye los datos de batería necesarios para obtener el resultado; no debe saltar directamente a un paso intermedio.
- Operadores en orden alfabético.
- Usar tablas o filas expandibles para evitar una página excesivamente larga.
- En la tabla de operadores, usar una única columna `Conectores`. Tipo 2 ya identifica AC y CCS2 identifica DC: no mostrar además insignias AC/DC cuando el conector está confirmado.
- Distribuir la tabla de operadores priorizando el nombre, la identificación de carga y las tarifas. La potencia puede usar una columna más compacta y la acción de detalle debe conservar una medida suficiente para no quebrarse.
- Cuando el conector dependa del punto o no esté publicado, mostrar únicamente `Confirmar en app` en la tabla. La modalidad conocida puede conservarse dentro del detalle expandido, donde aporta contexto sin duplicar Tipo 2 o CCS2.
- Por debajo de `820 px`, transformar el resumen de operadores en filas compactas con nombre, logo y control de expansión; trasladar modalidad, potencia, conector y tarifa al panel de detalle, en lugar de comprimir cinco columnas. Aplicar también este patrón entre `992 px` y `1100 px`, porque en ese intervalo el menú lateral todavía reduce el ancho útil de la tabla.
- Mostrar únicamente Tipo 2 y CCS2; otros conectores no son relevantes para este sitio.
- En el bloque `AC, DC y conectores`, presentar cada concepto como una fila de lista con dos columnas: icono MDI fijo y texto completo. No combinar viñeta, icono e `inline-flex`; las continuaciones de línea deben conservar el mismo eje que el inicio del texto. La caja del icono debe tener la altura de la primera línea y compartir con ella el centro vertical, no limitarse a igualar sus bordes superiores.
- Tarifas finales, cargos adicionales y verificación en app cuando corresponda.
- Consolidar las fechas y procedencias de datos al final de la página; no repetir metadatos encima de la tabla de operadores.
- Presentar una sola descripción breve en el encabezado. Las instrucciones particulares permanecen junto al formulario o herramienta correspondiente.
- Bajo `Otras herramientas`, no agregar una introducción que se limite a repetir los nombres de las dos calculadoras.
- No mantener ocultos formularios, secciones ni lógica exclusiva de carga domiciliaria. Las herramientas compartidas deben presentarse bajo `Otras herramientas` y la planificación doméstica permanece en `carga-casa.html`.

### Aplicaciones — `aplicaciones.html`

- Orden alfabético dentro de cada grupo.
- Icono oficial local 36 × 36 px, nombre visible y descripción de una línea.
- Botones de tiendas visualmente equivalentes.
- Cobertura debajo de los botones, con bandera accesible y nombre del país.
- No duplicar una app en varios grupos sin explicar su alcance.

### Calculadora pública — integrada en `carga-publica.html`

- Flujo: modelo → batería inicial/final → tipo de carga AC/DC → potencia → cálculo.
- Exigir que la persona seleccione AC / Tipo 2 o DC / CCS2 y mostrar únicamente operadores y tarifas compatibles con esa elección.
- Mostrar AC / Tipo 2 y DC / CCS2 como opciones visibles con su icono MDI correspondiente y texto completo; no ocultarlas dentro de un desplegable ni depender únicamente del icono para identificarlas.
- Aplicar el límite AC de 6,6 kW para todas las versiones y el límite DC publicado para cada versión.
- La potencia efectiva de cada fila es la menor entre la potencia ingresada, la potencia publicada para ese operador y el límite del vehículo. Nunca usar la potencia ingresada como sustituto de un límite del operador conocido.
- Para UTE, usar como referencia pública máxima `120 kW` en DC hasta que una fuente oficial o UTE Mueve confirme otra potencia. Una entrada superior no debe presentar a UTE como si ofreciera esa capacidad.
- Incluir el cálculo de potencia mediante amperes y volts como herramienta complementaria.
- Los botones `Copiar resumen` usan `mdi-content-copy` en la interfaz. El resumen copiado usa emojis solo en el texto plano: `⚡` para carga o energía, `🔋` para batería, `⏱️` para duración, `💰` para costo, `📅` para vigencia tarifaria y `🔗` para el enlace directo a la herramienta.
- Sin valores preseleccionados que produzcan resultados involuntarios.
- Presets junto a potencia.
- Resultado accesible, contextual y sin notas irrelevantes.
- En el estado inicial, usar una indicación breve como `Completá los datos para ver la comparación`; no volver a enumerar versión, porcentajes, tipo y potencia cuando los campos ya están visibles y etiquetados.
- La ayuda de AC/DC explica el significado de los tipos de carga; el contexto dinámico informa la potencia elegida o el límite aplicado. No duplicar esas funciones.
- Los supuestos no repiten `El tiempo es aproximado` ni `Los costos son estimados` cuando el resultado y la nota orientativa ya comunican esas condiciones.
- El límite del modelo se informa solo cuando el cargador lo supera.

### Calculadora domiciliaria — integrada en `carga-casa.html`

- Explicar AC y Tarifa Residencial Triple Horario.
- Hora actual puede precargarse una vez y permanecer editable.
- Fecha predeterminada: hoy.
- Hora límite obligatoria cuando el modo la necesita.
- Impedir fecha/hora pasada.
- Duraciones en `HH:mm`.
- Franjas, energía y costo en una tabla legible.

### Carga en casa — `carga-casa.html`

- Integrar planificación domiciliaria, cálculo de potencia y consumo del viaje antes de la guía informativa.
- Explicar instalación, tarifa, franjas y recomendaciones de seguridad después de las herramientas.
- Usar fuentes oficiales al final.

### Gestiones UTE — `gestiones-ute.html`

- Presentar las gestiones en el orden en que una persona debería realizarlas.
- Separar cambio de tarifa, elección del Horario Punta, revisión de potencia y seguimiento del consumo.
- Aclarar que no todas las gestiones son necesarias para todos los suministros.
- Enlazar cada trámite a su fuente oficial y evitar repetir tarifas que ya se mantienen en las páginas Pública y En casa.

### Red GAC — `red.html`

- Montevideo primero y departamentos del interior en orden alfabético.
- No repetir el departamento dentro de direcciones ya agrupadas.
- Datos en bullets: dirección, celular, teléfono fijo, correo y horario.
- Celulares enlazados a WhatsApp; correos en minúsculas con `mailto:`.
- Ventas y postventa deben distinguirse sin duplicar fichas innecesariamente.

### Mantenimiento y postventa — `mantenimiento-postventa.html`

- Resumen compacto del esquema, alineado a la izquierda.
- Tabla principal de plan y costos por taller.
- Meses y kilometrajes alineados con números tabulares.
- Costos como precios finales, sin sufijo repetido en cada celda.
- Alineación, rotación y balanceo en tabla separada cuando corresponda.
- Equivalencias posteriores a 100.000 km en tabla auxiliar angosta.
- Diferenciar datos propios de Punta Motors de información confirmada para otros talleres.

### Costos — `costos.html`

- Separar precio, empadronamiento, patente, seguro y carga.
- UYU es el valor principal cuando el pago real ocurre en pesos.
- Cotización del dólar con fecha de actualización automática.
- Seguro como rango o factores, nunca como promesa.
- Evitar repetir fórmulas internas si no ayudan a la decisión.

### Comandos de voz — `comandos.html`

- Sección propia, no anidada en otra temática.
- Todas las tablas de comandos usan idéntica estructura y espaciado.
- Comando en inglés y función esperada en columnas equivalentes.
- Separar comandos confirmados de pendientes.
- Indicar versión del sistema probada.
- No repetir disponibilidad inmediatamente debajo del título y en la alerta.

### Videos — `videos.html`

- Agrupar por tema: pruebas, autonomía, reseñas, multimedia y colores.
- Los videos de crash tests de ANCAP y Euro NCAP pertenecen exclusivamente a `seguridad.html`; no duplicarlos en esta página.
- Los enlaces a videos de YouTube usan exactamente un icono MDI monocromático `mdi-youtube`; no usar un logo adicional generado por CSS, SVG, imagen o emoji.
- Cada recurso usa una tarjeta liviana con título descriptivo y una única acción externa `Ver video en YouTube ↗`, más la aclaración accesible de apertura en otra pestaña.
- Los títulos de página y sección usan MDI monocromáticos; no usar emojis estructurales ni imágenes externas del logo de YouTube.
- No agregar una caja general de alcance si repite la introducción o el aviso de versiones.
- Como existen cuatro categorías, incluir navegación interna hacia pruebas y autonomía, reseñas, multimedia y colores. El estado activo debe actualizarse al navegar y al desplazarse.
- Al final del listado, identificar el origen general de los enlaces y mostrar `Última actualización` en la línea siguiente.
- Después de los metadatos, usar un único bloque `También te puede servir` para enlazar Seguridad —donde permanecen los crash tests— y Modelos y datos.
- Títulos descriptivos y neutrales.
- No introducir nombres de versiones que el contenido no respalde.

### Problemas reportados — `problemas.html`

**Alcance:** todas las reglas de este apartado son exclusivas de `problemas.html`, salvo que otra sección de la guía las declare expresamente transversales. Complementan —y no reemplazan— las reglas globales de copiado, accesibilidad, redacción y componentes.

- Diferenciar síntoma, alcance, verificación y solución conocida.
- No presentar casos aislados como fallas universales.
- Si la solución es llevarlo a service oficial, indicarlo directamente.
- Evitar frases vagas como `sin solución definitiva` cuando existe un procedimiento recomendado.
- Separar el relato del problema de dos datos operativos: `Qué podés hacer` y `Estado de la solución`. No usar `workaround` ni presentar una medida temporal como solución definitiva.
- Las tarjetas de problemas usan el borde estándar del sitio, sin borde lateral de advertencia: son reportes, no alertas.
- Consolidar alcance, versiones afectadas y grado de confirmación en una sola nota antes de los reportes. No repetir luego `reportado por varios dueños` ni `no afecta a todas las unidades` en cada tarjeta.
- La nota general usa el patrón semántico de información: borde izquierdo azul, título visible e icono MDI `mdi-information-outline`.
- El `h1`, la descripción y los títulos de los reportes no deben repetir expresiones equivalentes como `problemas reportados`, `casos informados` y `reportes de propietarios` en tres niveles consecutivos.
- Cada tarjeta es un `<details class="issue-card">` identificado mediante `aria-labelledby`. Su `<summary>` contiene el icono, el título `h2`, la categoría y el indicador de expansión; el resto del contenido se agrupa en `.issue-card-content`.
- Las tarjetas comienzan contraídas para facilitar el escaneo. Se pueden abrir varias simultáneamente: no imponer comportamiento de acordeón exclusivo.
- Usar el control nativo `<summary>` para que Enter y Espacio funcionen sin JavaScript ni ARIA manual redundante. Mantener foco visible y un área interactiva de al menos 44 px de alto.
- Mostrar un chevron inequívoco alineado a la derecha. El estado abierto invierte su orientación y agrega un divisor suave entre encabezado y contenido; no usar un símbolo `+` que se transforme en una `×`.
- El encabezado puede usar un fondo gris muy suave en hover, sin mover, elevar ni cambiar el tamaño de la tarjeta.
- Si la URL contiene el ancla de un problema, abrir automáticamente esa tarjeta y llevarla a la vista. Conservar esta conducta al cambiar el hash.
- El título del problema es un `h2`; la categoría visual se coloca fuera del encabezado para que el nombre accesible no incluya etiquetas como `software`, `interior` o `service`.
- El encabezado visual usa un icono MDI monocromático de 24 × 24 px, sin caja, fondo ni borde propios. El icono es decorativo, lleva `aria-hidden="true"` y acompaña al título sin sustituirlo.
- La categoría usa un badge gris azulado, transparente y de borde suave. No usar naranja, rojo ni un color diferente por categoría: la categoría es metadato, no una advertencia ni un estado.
- Los títulos describen el síntoma o la situación. Las acciones —por ejemplo, revisar el gas durante el service— pertenecen a `Qué podés hacer`, no al título.
- Las categorías describen el área afectada (`software`, `conectividad`, `climatización`, `interior`, `suspensión`) y no el lugar donde se atiende el problema.
- El relato principal contiene solamente el síntoma y su contexto. No repite la acción recomendada ni el estado de la solución.
- Dentro de cada tarjeta, síntoma, contexto y consecuencia se escriben en párrafos separados cuando constituyen ideas completas. No resolverlo con `<br>` ni acumular oraciones mediante punto y seguido.
- Si `Qué podés hacer` o `Estado de la solución` contienen más de una idea, cada una usa su propio `<p>` dentro del `<dd>`.
- `Qué podés hacer` ofrece una acción concreta y prudente. Si implica modificar sellos, burletes, software o componentes, debe aclarar si es una experiencia comunitaria no confirmada y recomendar consultar antes con un service oficial.
- `Estado de la solución` no repite literalmente la acción anterior: informa si existe confirmación oficial, si requiere diagnóstico o si la corrección fue reportada en un service.
- `Qué podés hacer` aparece primero y `Estado de la solución` inmediatamente debajo, tanto en escritorio como en móvil. Son una secuencia de lectura, no datos para comparar en columnas.
- Ambos bloques usan fondo transparente, sin bordes ni subtarjetas, y se distinguen mediante sus títulos e iconos. Mantener un espacio breve y uniforme entre ellos.
- Aplicar los estados canónicos globales de la sección `30`: `No hay una alternativa temporal conocida.` y `No hay una solución oficial confirmada.`
- Cuando corresponda acudir a postventa, enlazar `service oficial` o `services oficiales` con la página interna de la Red GAC.
- Evitar sujetos ambiguos como `equipos` cuando podrían significar teléfonos, vehículos o sistemas multimedia.
- El llamado para aportar un problema o una solución aparece una sola vez al final, en un bloque de ancho ajustado al contenido y alineado a la izquierda.
- Después del aviso general de versiones y antes del listado se muestra una única caja `Sobre estos reportes`. Debe explicar cómo interpretar `Qué podés hacer` y `Estado de la solución`, además de aclarar que la aparición y el alcance pueden variar entre vehículos. No debe repetir el origen general ni la fecha publicados al final.
- Ordenar los reportes por impacto y necesidad de acción, no por fecha ni alfabéticamente: primero comportamiento del vehículo y casos que conviene revisar en taller; después climatización e interior; al final conectividad y software. Mantener el mismo orden en escritorio, móvil, lectura asistida y tabulación.
- El acceso contextual usa `Ir al grupo de WhatsApp`: identifica el destino real sin prometer que el mensaje se enviará automáticamente.
- Cada problema usa un título semántico y un identificador estable para permitir enlaces directos.
- Cada tarjeta ofrece `Copiar para WhatsApp`; copia título, descripción y enlace directo, y confirma el resultado de forma visible y mediante una región viva.
- El texto copiado conserva los saltos entre párrafos y coloca la descripción de `Qué podés hacer` y `Estado de la solución` debajo de cada rótulo. No compactar nuevamente todo el contenido en una sola línea.
- El mensaje copiado sigue este orden específico: `🚙 GAC AION V — problema reportado por la comunidad`, título con emoji contextual, descripción, `🔧 Qué podés hacer`, `ℹ️ Estado de la solución`, `⚠️ No todos los vehículos lo presentan` y `🔗 Más información` con enlace directo.
- Para el título del problema, usar la correspondencia contextual definida en la implementación: `🕒` zona horaria, `📱` conectividad, `❄️` climatización, `🚪` puertas, `🚗` vehículo o interior y `🔧` service o intervención mecánica. Si se agrega otra categoría, elegir un emoji inequívoco y documentarlo aquí.
- Los MDI permanecen en la interfaz; estos emojis se usan únicamente en el contenido compartido. No trasladar automáticamente este encabezado, esta advertencia ni esta correspondencia a otras páginas.
- La acción de copiado se ubica inmediatamente después de `Estado de la solución` y alineada a la izquierda. El icono debe coincidir con el borde de lectura del contenido. Para conservar esa alineación y dar aire al estado hover, usar padding horizontal compensado con un margen izquierdo negativo equivalente; el fondo interactivo puede extenderse hacia la izquierda, pero el icono no debe desplazarse. No aislarla en la esquina inferior derecha ni obligar a recorrer todo el ancho de la tarjeta. Usa el icono MDI correspondiente, fondo transparente, borde transparente y un área interactiva de 40 px de alto; el hover puede usar azul muy suave. No usa emojis ni adopta el color de WhatsApp porque no abre esa aplicación directamente.
- Las tarjetas no se elevan, desplazan ni cambian de sombra al pasar el puntero. Solo el `<summary>` comunica interacción mediante cursor, fondo sutil, chevron y foco.
- Las tarjetas usan una sola superficie blanca, borde suave, sin sombra y padding contenido. No superponer tarjeta, caja de icono, subtarjetas operativas y botón delineado dentro del mismo componente.
- El listado de problemas usa un ancho máximo de `62rem`, alineado a la izquierda. No estirar las tarjetas hasta todo el ancho disponible cuando eso genera líneas excesivamente largas y separa visualmente las acciones de su contenido.
- Los rótulos `Qué podés hacer` y `Estado de la solución` usan texto secundario y peso 500. Deben distinguirse claramente del título principal sin perder legibilidad.
- La página termina con el origen general de los reportes y, en la línea inmediatamente inferior, la fecha de la `Última actualización`. No presentar ambos metadatos en una misma línea ni inventar fechas o versiones individuales que la comunidad no haya documentado.
- Antes de cerrar cualquier cambio, revisar las seis tarjetas completas para detectar redundancias, afirmaciones universales, recomendaciones sin confirmar, títulos que describan acciones y diferencias de estructura.
- Validar que los badges no formen parte del texto de los encabezados, que los enlaces directos con ancla sigan funcionando y que el copiado conserve título, descripción, guía operativa, advertencia de alcance y URL canónica.

### Preguntas frecuentes — `preguntas.html`

- Preguntas redactadas como las formularía una persona.
- Una respuesta principal directa en la primera oración.
- Detalles en párrafos o bullets posteriores.
- Después del aviso general de versiones y antes del primer grupo temático se muestra una única caja informativa `Sobre estas respuestas`. Explica que las preguntas se abren de forma independiente y recuerda verificar en la fuente enlazada los precios, tarifas, disponibilidad u otras condiciones variables.
- Esta caja no repite el origen ni la fecha que aparecen al final de la página, no enumera nuevamente los temas y no sustituye las advertencias específicas que correspondan dentro de una respuesta.
- Agrupar y ordenar las preguntas según el recorrido de la persona, no alfabéticamente: `Compra y versiones`, `Funciones y conectividad`, `Carga en casa`, `Carga pública y costos`, `Autonomía y consumo` y `Uso y comunidad`. Dentro de cada grupo, ubicar primero las preguntas más generales, preventivas o decisivas y después las operativas o de detalle.
- Cada pregunta usa una tarjeta expandible nativa `<details class="faq-card">`. El `<summary>` contiene un icono MDI decorativo, un título semántico `h3` y un chevron; la respuesta y sus acciones quedan fuera del `<summary>`.
- Las preguntas comienzan contraídas y se pueden abrir varias simultáneamente. No implementar un acordeón exclusivo.
- Aplicar el mismo comportamiento ligero aprobado para las tarjetas de problemas: superficie blanca única, borde suave, sin sombra ni movimiento, hover gris solamente en el encabezado y divisor al abrir.
- Usar un chevron que cambia de orientación. No usar `+` que se transforme en `×`.
- Toda el área del `<summary>` es interactiva, conserva foco visible y una altura mínima de 44 px. El control nativo debe funcionar con Enter y Espacio sin ARIA manual redundante.
- El título de cada pregunta es un `h3`, debajo del `h2` de su grupo temático. El icono de pregunta usa MDI monocromático, es decorativo y no sustituye al texto.
- Cada pregunta tiene un identificador estable. Si la URL contiene su ancla, abrir la tarjeta y llevarla a la vista tanto al cargar como al cambiar el hash.
- La acción de copiado se ubica al final de la respuesta, alineada con el borde de lectura. Usa el mismo tratamiento liviano y transparente de la acción equivalente en Problemas, sin color de WhatsApp porque copia texto y no abre la aplicación.
- Cada acción `Copiar para WhatsApp` usa `mdi-content-copy` en la interfaz y una región viva asociada para confirmar éxito o error.
- El texto compartido comienza con `❓`, conserva los párrafos, transforma las listas en bullets de texto sin duplicar el contenido de elementos anidados y termina con `🔗 Más información` más el ancla directa de la pregunta.
- Las preguntas incorporadas dinámicamente deben usar la misma utilidad y el mismo formato que las preguntas presentes en el HTML; no mantener una segunda implementación de portapapeles.
- Evitar duplicar secciones completas existentes; enlazarlas cuando corresponda.
- Mantener datos prácticos concretos, como tornillería, herramientas o disponibilidad de apps, con fuentes cuando sean variables.
- La página termina con un bloque compacto que identifica el origen general de las respuestas y, en la línea inmediatamente inferior, la fecha de la `Última actualización`.
- Después de esos metadatos se ofrece una única invitación contextual para aportar otra pregunta o respuesta mediante `Ir al grupo de WhatsApp`. Mantenerla alineada a la izquierda, con ancho ajustado al contenido y el mismo patrón visual transversal usado para contribuciones comunitarias.
- No repetir esta invitación entre grupos temáticos ni dentro de cada respuesta; el acceso final complementa al acceso persistente del menú sin competir con el contenido principal.

### Servicios heredado — `servicios.html`

- No mantener dos páginas activas con contenido divergente sobre mantenimiento.
- Si funciona como compatibilidad o redirección hacia `mantenimiento-postventa.html`, debe conservar una salida accesible y no duplicar el contenido completo.
- Los enlaces internos y del menú deben apuntar a la página canónica vigente.
- Cualquier texto que permanezca debe respetar la misma terminología, jerarquía y fecha de actualización que la página canónica.

### Prototipo del sistema — `prototipo-tabler.html`

- Es una referencia visual y funcional, no una fuente canónica de precios o especificaciones.
- Debe contener ejemplos reales del sistema: navegación, alertas, tarjetas, tabla expandible, formulario, validación y resultado.
- Toda decisión visual aprobada primero en el prototipo debe documentarse en esta guía antes de migrarse globalmente.
- Debe mantenerse marcado como no indexable mientras no sea una página pública.
- Su validación incluye escritorio, 390 px, teclado, estados expandidos y ausencia de desbordamiento.
- Los ejemplos nunca deben sustituir silenciosamente datos más recientes de las páginas productivas.

## 32. Accesibilidad WCAG 2.2 AA: lista exhaustiva

### Perceptible

- Contraste de texto normal mínimo 4.5:1.
- Contraste de texto grande mínimo 3:1.
- Componentes y estados visuales mínimo 3:1 contra colores adyacentes.
- La información no depende exclusivamente de color, forma, posición o icono.
- Texto ampliable al 200% sin pérdida de contenido o funcionalidad.
- Reflow a 320 CSS px salvo tablas deliberadamente desplazables.
- Imágenes informativas con alternativa; decorativas con `alt=""`.

### Operable

- Todo funciona con teclado.
- Orden de foco lógico y coherente con el DOM.
- Foco nunca oculto detrás de componentes persistentes.
- Objetivos táctiles adecuados y separados.
- Enlace para saltar al contenido.
- No usar atajos de una sola tecla sin mecanismo para desactivarlos.
- Acordeones, menús y selects operables sin puntero.

### Comprensible

- `lang="es"` en el documento.
- Labels e instrucciones persistentes.
- Errores identifican el campo y explican la corrección.
- Navegación y componentes consistentes entre páginas.
- Cambios de contexto no ocurren al enfocar un control.
- Resultados automáticos se anuncian sin mover el foco inesperadamente.

### Robusto

- HTML semántico válido.
- IDs únicos.
- Nombre, rol y valor disponibles para controles personalizados.
- `aria-expanded` y `aria-controls` sincronizados.
- Regiones vivas existentes antes de insertar mensajes.
- No agregar ARIA redundante o contradictoria con elementos nativos.

## 33. Procedimiento obligatorio para cualquier cambio

### Antes de editar

1. Leer esta guía completa en los apartados aplicables.
2. Revisar `prototipo-tabler.html`.
3. Inspeccionar la página completa y sus estilos/scripts compartidos.
4. Identificar datos dinámicos, fuentes y automatizaciones.
5. Revisar cambios locales para no sobrescribir trabajo del usuario.
6. Determinar componentes existentes que puedan reutilizarse.

### Durante la edición

1. Hacer cambios mínimos de código, pero con revisión total de la página.
2. Corregir redundancias detectadas en toda la página.
3. Corregir incoherencias jerárquicas detectadas en toda la página.
4. Preservar datos y lógica no relacionados.
5. Evitar nuevas variantes visuales.
6. Mantener contenido dinámico en una única fuente canónica.
7. Comprobar estados no ideales: vacío, error, carga y datos extensos.

### Después de editar

1. Leer la página completa de arriba abajo.
2. Comparar todos los niveles de títulos y componentes equivalentes.
3. Ejecutar una segunda auditoría específica de redundancias.
4. Ejecutar una segunda auditoría específica de jerarquía.
5. Probar teclado, foco, labels, acordeones y validaciones.
6. Revisar 1900, 1440, 992, 680, 500, 390 y 360 px según el riesgo.
7. Confirmar que `documentElement.scrollWidth` no supere su ancho salvo excepción deliberada.
8. Validar JavaScript y datos estructurados.
9. Ejecutar `git diff --check`.
10. Informar archivos tocados, cambios y validación.
11. No publicar, hacer commit ni push salvo pedido explícito.

## 34. Criterios globales de aceptación

Una página queda aprobada solamente cuando se cumple todo lo siguiente:

- [ ] Existe un único `h1`.
- [ ] Menú, `title` y `h1` son conceptualmente coherentes.
- [ ] La jerarquía visual y semántica fue revisada en toda la página.
- [ ] Las redundancias fueron revisadas en toda la página.
- [ ] No hay títulos dobles ni subtítulos que repitan al padre.
- [ ] Párrafos largos fueron divididos cuando contienen ideas distintas.
- [ ] Componentes equivalentes comparten estilos y comportamiento.
- [ ] No hay espacios vacíos reservados por elementos sin contenido.
- [ ] No hay tablas o acordeones pegados.
- [ ] Las esquinas de tarjetas y tablas se ven completas.
- [ ] No existe desbordamiento horizontal inesperado.
- [ ] Los textos breves de formularios, herramientas, tarjetas, estados y resultados aprovechan el ancho del componente y no parecen cortados por un límite editorial.
- [ ] Los límites de longitud de línea se usan solamente en contenido de lectura continua y no como regla genérica para `.section-copy`.
- [ ] Las cajas de información, nota, advertencia y llamada ajustan su ancho al contenido sin superar el contenedor; solo usan una medida editorial fija cuando llevan expresamente `.narrow-reading-width`.
- [ ] Las cajas, avisos desplegables, tarjetas aisladas y tablas auxiliares no dejan grandes áreas vacías cuando podrían ajustar su ancho al contenido.
- [ ] Las tarjetas en grillas y las tablas comparativas o de resultados conservan ancho completo únicamente cuando la alineación o la comparación lo requieren.
- [ ] Todas las columnas de tablas fueron revisadas en busca de zigzags de alineación; las mezclas restantes aportan una ventaja comparativa real y las excepciones uniformes usan `data-column-align`.
- [ ] Las tablas dinámicas fueron verificadas después de renderizar datos o resultados, no solamente mediante inspección del HTML inicial.
- [ ] La experiencia móvil conserva acciones y contexto.
- [ ] Los controles tienen labels, foco visible y operación por teclado.
- [ ] Los resultados y errores son anunciables.
- [ ] Los colores cumplen WCAG 2.2 AA.
- [ ] Los iconos estructurales son MDI y monocromáticos.
- [ ] Los logos son locales y accesibles.
- [ ] Las fuentes y fechas están ubicadas sin interrumpir el flujo.
- [ ] Los datos no verificados están identificados como tales.
- [ ] Los importes visibles son precios finales y no incluyen leyendas tributarias redundantes.
- [ ] En carga se muestran solamente conectores Tipo 2 y CCS2.
- [ ] JavaScript, IDs, enlaces internos y acordeones fueron validados.
- [ ] `git diff --check` finaliza correctamente.

## 35. Gobierno y mantenimiento del sistema

- `docs/sistema-diseno-tabler.md` es la especificación normativa.
- `prototipo-tabler.html` es la referencia visual y funcional viva.
- `AGENTS.md` obliga a consultar y aplicar ambas.
- Los estilos reutilizables deben migrar a hojas compartidas al implementar el sistema en producción.
- Una decisión nueva debe documentarse aquí antes o junto con su adopción global.
- Si el prototipo y la guía difieren, no elegir silenciosamente: reconciliar ambos y dejar una única regla.
- Las excepciones deben estar justificadas por contenido, accesibilidad o funcionalidad; no por preferencia aislada.
- Cada revisión global debe eliminar variantes obsoletas para evitar deuda visual.
- No usar el prototipo como fuente de datos técnicos; solo como fuente de diseño y comportamiento.

## 36. Estado consolidado de la implementación

Este apartado funciona como inventario operativo de las decisiones ya adoptadas. No reemplaza las especificaciones detalladas anteriores: permite comprobar rápidamente que una modificación nueva no revierta acuerdos vigentes.

### 36.1 Fuentes canónicas y responsabilidad de cada archivo

| Archivo | Responsabilidad |
|---|---|
| `docs/sistema-diseno-tabler.md` | Reglas normativas de diseño, contenido, UX, accesibilidad y validación. |
| `AGENTS.md` | Obliga a aplicar esta guía, revisar la página completa y no publicar sin pedido explícito. |
| `prototipo-tabler.html` | Referencia visual y funcional viva de los componentes compartidos. |
| `_shared.css` | Tokens, layout, tipografía, navegación, componentes y comportamiento responsive compartidos. |
| `mobile-nav.js` | Navegación lateral/móvil, estado accesible y comportamiento común del menú. |
| `copy-share.js` | Utilidad común para copiar contenido, anunciar el resultado y conservar una alternativa de compatibilidad. |
| CSS o JavaScript de una página | Solo comportamiento o presentación que no tenga equivalente transversal reutilizable. |

Reglas de mantenimiento:

- Una decisión transversal se implementa primero en el componente compartido y se documenta aquí.
- No duplicar en cada HTML una regla que pueda vivir en `_shared.css`, `mobile-nav.js` o `copy-share.js`.
- El CSS local no puede redefinir el padding horizontal del contenido, la escala tipográfica global, el menú ni los estados comunes de botones.
- Una excepción local debe indicar qué necesidad de contenido, accesibilidad o funcionalidad la justifica.
- Si una regla documentada y la implementación difieren, reconciliarlas en la misma tarea; no conservar dos criterios vigentes.

### 36.2 Páginas públicas y compatibilidad

Páginas canónicas vigentes:

```text
index.html
especificaciones-versiones.html
seguridad.html
comandos.html
carga-publica.html
carga-casa.html
aplicaciones.html
gestiones-ute.html
red.html
mantenimiento-postventa.html
costos.html
videos.html
problemas.html
preguntas.html
```

Páginas heredadas o de compatibilidad que también deben conservar coherencia visual y accesibilidad:

```text
especificaciones.html
comparativa.html
calculadora.html
calculadora-publica.html
calculadora-casa.html
cargadores.html
servicios.html
```

- Las páginas heredadas no reaparecen como destinos principales del menú.
- Si redirigen a una página canónica, cargan `_shared.css`, usan una estructura semántica mínima y ofrecen un enlace accesible como alternativa.
- No mantener dos copias divergentes del mismo contenido ni de la misma lógica.

### 36.3 Layout y alineación comprobados

- Barra lateral de escritorio: `17rem`.
- Contenido máximo: `90rem`, alineado al comienzo del área útil.
- Padding horizontal canónico del contenido:
  - más de `1024 px`: `32 px`;
  - de `721 px` a `1024 px`: `24 px`;
  - hasta `720 px`: `16 px`.
- La transición entre lateral y navegación móvil ocurre en `992 px`.
- Ninguna página agrega un desplazamiento horizontal propio al contenedor `.page`.
- El menú no queda aislado de un contenido centrado: el cuerpo comienza inmediatamente después del lateral.
- Las líneas editoriales largas se limitan aproximadamente a `52rem`; formularios complejos, a `58rem`; tablas comparativas pueden usar el ancho disponible.
- La comprobación de coherencia debe comparar como mínimo `1900`, `1440`, `1024`, `991`, `720`, `390` y `360 px`.
- El contenido no puede producir desbordamiento horizontal global. Las tablas desplazables son la única excepción deliberada y deben identificarse de forma accesible.

### 36.4 Tipografía e interlineado vigentes

- Texto general, listas, alertas, notas y contenido expandido: `line-height: 1.55`.
- Texto compacto de tarjetas y acordeones: `1.5`.
- Celdas de tabla: `1.4`–`1.45`.
- Encabezados de tabla: `1.35`.
- Ayudas, fuentes y metadatos: `1.45`.
- Los títulos conservan su escala propia entre `1.2` y `1.45` y nunca heredan el interlineado del cuerpo.
- Una idea completa por párrafo. Las ideas consecutivas se separan mediante párrafos y márgenes, no mediante un interlineado excesivo ni `<br>`.
- El texto común nunca supera visualmente al título que lo contiene.
- Esta escala se audita en todas las páginas, no solamente en Preguntas o Problemas.

### 36.5 Componentes transversales ya adoptados

Navegación:

- Identidad: `GAC AION V Uruguay` y `Guía comunitaria no oficial`.
- Grupos: `Vehículo`, `Carga`, `Propiedad` y `Comunidad`.
- Opción activa con `aria-current="page"`, texto e icono del mismo color y peso 600.
- Hover de cada opción: texto e icono cambian juntos, sin movimiento ni cambio de tamaño.
- WhatsApp permanece disponible en escritorio y dentro del menú móvil.
- Las etiquetas breves del menú conservan correspondencia conceptual con el `h1`.

Iconos y acciones:

- MDI monocromáticos para navegación, títulos, botones, alertas y controles.
- Los iconos estructurales forman parte del HTML inicial. No guardar emojis visibles para sustituirlos por MDI después de `DOMContentLoaded`, porque produce destellos de contenido anterior y depende innecesariamente de JavaScript.
- JavaScript puede agregar comportamiento o estados, pero no debe ser necesario para que el primer render muestre la tipografía, el texto y los iconos definitivos.
- Al cambiar estilos o scripts compartidos que puedan permanecer en caché, versionar sus referencias mediante un parámetro estable de publicación y actualizarlo en todas las páginas afectadas.
- Logos oficiales locales para empresas y aplicaciones.
- Sin emojis en botones ni como iconos estructurales.
- Los emojis se permiten en texto plano copiado para WhatsApp cuando aportan jerarquía y siempre acompañan texto.
- Hover, foco y estado activo no modifican dimensiones ni peso de manera que desplacen el contenido.

Tarjetas:

- Superficie blanca, borde estándar, radio consistente y sombra nula o muy sutil según el patrón.
- No envolver cada párrafo en una tarjeta.
- No elevar, mover ni escalar tarjetas en hover.
- Los resúmenes horizontales ajustan su ancho al contenido en escritorio y usan el ancho disponible en móvil.

Tablas:

- Contenedor exterior con radio y `overflow: hidden` para conservar las cuatro esquinas.
- Encabezados compactos, semánticos y con contraste AA.
- Números comparables con cifras tabulares cuando ayuden al escaneo.
- Tabla expandible cuando resumen y detalle pertenezcan al mismo conjunto.
- La fila expandida agrega información; no repite toda la fila resumen.
- En móvil, identificador y acción permanecen visibles sin exigir desplazamiento horizontal.

Alertas y notas:

- Borde izquierdo semántico de `4 px` y borde estándar en los demás lados.
- Información azul, advertencia amarilla, error rojo y confirmación verde.
- Icono MDI, título visible y texto breve; el color no comunica el estado por sí solo.
- No repetir el mismo mensaje inmediatamente fuera de la caja.

Formularios y calculadoras:

- Labels visibles, controles blancos, bordes legibles, ayudas asociadas y unidades como sufijo.
- Campos en el orden mental de la tarea.
- Sin resultados válidos producidos por selecciones preestablecidas que requieren una decisión consciente.
- Errores vacíos y estados vacíos no reservan altura.
- Presets junto al campo que modifican y con `aria-pressed`.
- Resultados semánticos con `dl`, `dt` y `dd`, contexto del cálculo y región viva.
- `Restablecer valores` limpia campos, errores, presets y resultados.

### 36.6 Patrón comunitario compartido

Preguntas y Problemas comparten estos criterios:

- tarjetas expandibles nativas con `<details>` y `<summary>`;
- varias tarjetas pueden permanecer abiertas;
- estado inicial contraído;
- área interactiva mínima de 44 px;
- foco visible, chevron inequívoco y divisor suave al abrir;
- superficie blanca, borde suave, sin sombra ni desplazamiento;
- anclas estables que abren la tarjeta correspondiente;
- acción `Copiar para WhatsApp` alineada con el contenido;
- región viva para confirmar éxito o error;
- origen general al final y `Última actualización` en la línea siguiente;
- una sola invitación contextual final para participar en el grupo;
- acceso persistente a WhatsApp en el menú sin duplicar llamados dentro de cada tarjeta.

El bloque informativo superior:

- aparece una sola vez después del aviso general de versiones;
- explica cómo interpretar o recorrer el contenido;
- no repite origen, fecha ni todos los títulos de sección;
- usa el patrón transversal de información con icono MDI y borde izquierdo azul.

Estas reglas no hacen idéntico el contenido compartido:

- Problemas usa `h2` por reporte, categoría visual fuera del nombre accesible, `Qué podés hacer` y `Estado de la solución`.
- Preguntas usa `h2` para cada grupo y `h3` para cada pregunta.
- El texto copiado de Problemas conserva síntoma, acción, estado y advertencia de alcance.
- El texto copiado de Preguntas conserva pregunta, respuesta, listas y enlace directo.

### 36.7 Orden editorial vigente

Problemas:

1. comportamiento del vehículo y casos que conviene revisar en taller;
2. climatización e interior;
3. conectividad y software.

Preguntas:

1. Compra y versiones.
2. Funciones y conectividad.
3. Carga en casa.
4. Carga pública y costos.
5. Autonomía y consumo.
6. Uso y comunidad.

En ambos casos, ordenar por necesidad de decisión y recorrido de la persona, no alfabéticamente ni por fecha.

### 36.8 Metadatos, estados y llamados comunitarios

- Usar `Última actualización` para cambios manuales de una página o bloque.
- Mostrar `Origen` y, en la línea inmediatamente inferior, `Última actualización`.
- Usar `Información actualizada`, `Última actualización automática` y `Última verificación automática` solamente con el significado definido en la sección `30`.
- No usar `Última revisión editorial` ni variantes equivalentes.
- Los estados pendientes o no confirmados usan las frases canónicas de la sección `30`.
- La invitación contextual final debe describir el aporte concreto de esa página.
- El botón que abre el grupo usa `Ir al grupo de WhatsApp`; no prometer envío automático.
- El acceso contextual final se alinea a la izquierda y ajusta su ancho al contenido.

### 36.9 Validación consolidada

Para cualquier página modificada:

1. revisar la página completa, no solamente el bloque solicitado;
2. auditar redundancias y jerarquía de arriba abajo;
3. comparar componentes equivalentes dentro de la página y con el sistema compartido;
4. probar navegación, hover, foco, teclado, expansión, anclas, formularios y copiado según corresponda;
5. comprobar escritorio, transición del menú y móvil;
6. verificar un único `h1`, secuencia de títulos, labels, captions, nombres accesibles e IDs únicos;
7. comprobar contraste WCAG 2.2 AA y ausencia de información comunicada solo por color;
8. confirmar que `documentElement.scrollWidth` no supere el ancho visible;
9. validar que elementos ocultos o vacíos no reserven espacio;
10. revisar que tablas, alertas y tarjetas no queden pegadas y que sus esquinas se vean completas;
11. ejecutar las validaciones de JavaScript o datos que correspondan;
12. ejecutar `git diff --check`;
13. informar archivos tocados, alcance y resultado;
14. no publicar, hacer commit ni push salvo pedido explícito.

La revisión de referencia debe cubrir las páginas canónicas, las páginas heredadas afectadas y `prototipo-tabler.html`. Una corrección global no se considera completa si solamente se comprueba una muestra visual.
