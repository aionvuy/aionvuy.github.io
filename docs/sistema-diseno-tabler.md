# Sistema de diseño Tabler — AION V Uruguay

Esta guía es la referencia visual permanente del sitio. Su objetivo es mantener una interfaz moderna, sobria, compacta, consistente y accesible sin tener que redefinir criterios en cada cambio.

Referencia visual viva: `prototipo-tabler.html`.

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

| Elemento | Tamaño orientativo | Peso |
|---|---:|---:|
| Texto general | `0.875rem` / 14 px | 400 |
| Pretítulo | `0.75rem` / 12 px | 500, mayúsculas |
| Título de página | `1.5rem` / 24 px | 600 |
| Título de sección | `1.125rem` / 18 px | 600 |
| Título de tarjeta o subsección | `1rem` / 16 px | 500–600 |
| Etiqueta de campo o tabla | `0.75rem`–`0.875rem` | 500–600 |
| Ayuda y metadatos | `0.75rem`–`0.8125rem` | 400 |

Reglas:

- Un único `h1` por página.
- Los bloques principales usan `h2`; los componentes internos usan `h3`.
- El texto normal nunca debe verse más grande o pesado que el título que lo contiene.
- Evitar títulos gigantes y exceso de negrita.
- Usar párrafos cortos y punto y aparte cuando haya dos ideas completas.
- El texto secundario usa el color muted, no un tamaño ilegible.

## 4. Espaciado

Usar la escala de Tabler como base:

- 4 px: separación mínima entre elementos relacionados.
- 8 px: icono y texto, labels y controles relacionados.
- 16 px: padding habitual y separación interna.
- 24 px: separación entre secciones principales.

Reglas:

- No acumular márgenes de componentes consecutivos.
- Las tablas, alertas y acordeones no deben quedar pegados entre sí.
- Los elementos vacíos no reservan altura.
- En móvil se reduce el ancho, no la legibilidad.

## 5. Layout

- Menú lateral de escritorio: `17rem`.
- Contenido: ancho máximo `90rem`.
- El contenido queda alineado a la izquierda después del menú, no centrado de forma aislada.
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
- La navegación interna de una página usa `nav-pills` compactas y desplazables horizontalmente cuando sea necesario.
- La navegación interna debe reflejar la sección realmente visible. Observar las secciones completas, no solo títulos de poca altura, y verificar también los accesos directos mediante hash.
- Las etiquetas del menú deben ser breves, idealmente de una a tres palabras.
- El título de la página puede ampliar la etiqueta del menú, pero debe conservar su concepto principal y una redacción reconocible. Ejemplo: `Cargadores` en el menú y `Cargadores y carga pública` como título.
- Evitar que menú y título usen expresiones diferentes para una misma sección.

### Contexto geográfico

- La identidad global `AION V · UY` ya establece que el sitio corresponde a Uruguay.
- No repetir `Uruguay` en pretítulo, título, descripción y pie de una misma página si no agrega información.
- Sí mencionar el país cuando sea necesario para diferenciar cobertura, disponibilidad, normativa, tarifas, fuentes o mercados.

## 7. Iconos, emojis y logos

- Interfaz, menús, títulos y botones: Material Design Icons (MDI) monocromáticos.
- Botones: icono pequeño a la izquierda con separación consistente.
- Enlaces externos: `mdi-open-in-new` cuando aporte claridad.
- No colocar emojis dentro de botones.
- Evitar mezclar emojis de colores con iconos monocromáticos en un mismo nivel visual.
- Los emojis pueden usarse dentro del contenido editorial cuando comuniquen una advertencia o información y no exista ya un componente con icono.
- Logos de operadores y aplicaciones: archivos oficiales locales, tamaño uniforme, `alt=""` si el nombre textual aparece al lado.

## 8. Botones y enlaces

- Acción principal: `btn btn-primary` con fondo `#0770d1` y texto blanco.
- Acciones secundarias: `btn btn-outline-primary`.
- WhatsApp puede conservar `btn-outline-success` y el icono oficial.
- El verde de WhatsApp sobre superficies claras usa como mínimo `#0d7a35`; no usar el verde nativo claro de Tabler para texto o borde porque no alcanza contraste AA.
- Dentro de una misma fila, todos los botones equivalentes deben compartir color, tamaño y altura.
- No usar un color diferente sin una diferencia semántica real.
- En teléfonos angostos, los botones pueden apilarse; no deben desbordar la pantalla.
- Cuando haya una acción principal y dos secundarias en el encabezado móvil, la principal ocupa una fila completa y las secundarias pueden compartir la fila siguiente; por debajo de `360px`, se apilan todas.
- Los enlaces dentro de texto siguen siendo enlaces, no botones grandes.

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
- Mantener alineaciones coherentes por columna.
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
3. encabezado con un único `h1` e icono Tabler;
4. descripción breve, idealmente uno o dos párrafos;
5. alerta crítica, solo cuando sea necesaria;
6. navegación interna, si existen al menos tres destinos útiles;
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

### Navegación interna

- Usarla solo cuando reduzca desplazamiento o ayude a comprender una página larga.
- Las etiquetas coinciden con los `h2`, aunque pueden abreviarse sin cambiar el concepto.
- El destino debe recibir foco o quedar visible sin ocultarse detrás de encabezados persistentes.
- La opción activa se actualiza según la sección visible.
- Debe poder desplazarse horizontalmente sin producir scroll de toda la página.
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
- icono Tabler decorativo con `aria-hidden="true"`;
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

- Alinear texto a la izquierda y números comparables a la derecha cuando mejore el escaneo.
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

## 31. Reglas por página y tipo de sección

### Inicio — `index.html`

- Funciona como portada y orientación, no como copia resumida de todas las páginas.
- Presenta versiones disponibles, accesos esenciales y novedades verificadas.
- No listar todos los enlaces ni repetir especificaciones extensas.
- Priorizar Seguridad, Especificaciones, Carga y Comunidad según relevancia.
- Revisar que las tarjetas enlacen a destinos distintos y útiles.

### Especificaciones — `specs.html`

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

### Seguridad — `seguridad.html`

- Separar claramente ANCAP, Euro NCAP, ADAS y advertencias.
- Explicar siglas y funciones sin inventar equipamiento.
- Las estrellas y porcentajes necesitan texto accesible.
- Tablas de puntuación con iconos monocromáticos y números neutrales.
- No repetir fuentes en cada título; consolidarlas al final del bloque correspondiente.

### Cargadores — `carga-publica.html`

- Contiene la calculadora pública, consumo del viaje, redes, conectores, tarifas de referencia y acceso a apps.
- Operadores en orden alfabético.
- Usar tablas o filas expandibles para evitar una página excesivamente larga.
- Mostrar únicamente Tipo 2 y CCS2; otros conectores no son relevantes para este sitio.
- Tarifas finales, cargos adicionales y verificación en app cuando corresponda.

### Aplicaciones — `apps.html`

- Orden alfabético dentro de cada grupo.
- Icono oficial local 36 × 36 px, nombre visible y descripción de una línea.
- Botones de tiendas visualmente equivalentes.
- Cobertura debajo de los botones, con bandera accesible y nombre del país.
- No duplicar una app en varios grupos sin explicar su alcance.

### Calculadora pública — integrada en `carga-publica.html`

- Flujo: modelo → batería inicial/final → potencia → cálculo.
- Sin valores preseleccionados que produzcan resultados involuntarios.
- Presets junto a potencia.
- Resultado accesible, contextual y sin notas irrelevantes.
- El límite del modelo se informa solo cuando el cargador lo supera.

### Calculadora domiciliaria — integrada en `ute-carga-casa.html`

- Explicar AC y Tarifa Residencial Triple Horario.
- Hora actual puede precargarse una vez y permanecer editable.
- Fecha predeterminada: hoy.
- Hora límite obligatoria cuando el modo la necesita.
- Impedir fecha/hora pasada.
- Duraciones en `HH:mm`.
- Franjas, energía y costo en una tabla legible.

### Carga en casa — `ute-carga-casa.html`

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
- Botones o enlaces de video usan icono `play`.
- Títulos descriptivos y neutrales.
- No introducir nombres de versiones que el contenido no respalde.

### Problemas conocidos — `problemas.html`

- Diferenciar síntoma, alcance, verificación y solución conocida.
- No presentar casos aislados como fallas universales.
- Si la solución es llevarlo a service oficial, indicarlo directamente.
- Evitar frases vagas como `sin solución definitiva` cuando existe un procedimiento recomendado.

### FAQ — `faq.html`

- Preguntas redactadas como las formularía una persona.
- Una respuesta principal directa en la primera oración.
- Detalles en párrafos o bullets posteriores.
- Evitar duplicar secciones completas existentes; enlazarlas cuando corresponda.
- Mantener datos prácticos concretos, como tornillería, herramientas o disponibilidad de apps, con fuentes cuando sean variables.

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
