# Instrucciones permanentes del proyecto AION V Uruguay

Estas reglas se aplican a todo cambio realizado por Codex dentro de este repositorio.

## Sistema visual obligatorio

Antes de modificar interfaz, estilos o componentes:

1. Leer `docs/sistema-diseno-tabler.md`.
2. Usar `prototipo-tabler.html` como referencia visual y funcional del sistema.
3. Mantener la identidad basada en Tabler, sin mezclar componentes visuales incompatibles.
4. Reutilizar componentes y estilos compartidos antes de crear variantes nuevas.

La guía define de forma obligatoria:

- tipografía y jerarquías;
- colores y contraste;
- ancho y alineación del contenido;
- navegación lateral y móvil;
- títulos, subtítulos y texto secundario;
- botones e iconos;
- tarjetas, tablas, acordeones, alertas y formularios;
- espaciado y comportamiento responsive;
- requisitos de accesibilidad WCAG.

## Criterios de implementación

- Hacer cambios mínimos y preservar contenido o lógica no relacionados.
- No sustituir datos verificados por ejemplos del prototipo.
- No inventar información técnica, precios, disponibilidad ni resultados.
- Mantener los textos en español de Uruguay y usar párrafos breves.
- Aplicar en todas las páginas públicas la terminología, los estados canónicos y las etiquetas de actualización definidos en la sección `30` de `docs/sistema-diseno-tabler.md`; no crear variantes locales para conceptos equivalentes.
- Aplicar transversalmente las reglas de copiado y contenido compartido de la sección `30` de la guía. Las reglas, textos, orden y emojis documentados dentro de una página concreta solo se reutilizan fuera de ella cuando la guía los identifica expresamente como globales.
- Usar Material Design Icons (MDI) monocromáticos para elementos estructurales de interfaz.
- No usar emojis dentro de botones ni como sustituto inconsistente de iconos del sistema.
- Los logos de empresas y aplicaciones deben ser archivos locales oficiales.
- No agregar una variante visual nueva si ya existe un componente equivalente en la guía.

## Revisión integral obligatoria de cada página

El alcance de control de calidad es siempre la **página completa**, aunque el pedido del usuario mencione únicamente una sección, una tabla, un texto o un control.

En toda página modificada se debe:

1. revisar de arriba abajo encabezado, navegación, contenido, fuentes y pie;
2. buscar redundancias en **toda la página**, no solamente cerca del cambio;
3. revisar la jerarquía semántica y visual de **toda la página**, incluyendo todos los títulos, subtítulos, tarjetas, tablas, alertas, formularios y notas;
4. comprobar la coherencia entre la etiqueta del menú, el título del documento, el `h1`, la descripción y la navegación interna;
5. comparar todos los componentes equivalentes para detectar diferencias de tipografía, color, tamaño, espaciado, bordes, sombras, iconos y comportamiento;
6. revisar el flujo completo de lectura y de interacción en escritorio y móvil;
7. corregir las redundancias y fallas jerárquicas detectadas, aun cuando estén fuera del bloque inicialmente solicitado, preservando datos y lógica no relacionados.

No se considera completa una tarea si el cambio puntual funciona pero permanecen en esa página textos duplicados, niveles de título incoherentes, componentes equivalentes con estilos distintos o problemas responsive/accesibles visibles.

La definición exhaustiva de estas auditorías está en las secciones `0`, `30`, `33` y `34` de `docs/sistema-diseno-tabler.md`.

## Validación requerida

Para cambios visuales relevantes:

- ejecutar la auditoría total de redundancias y jerarquía de la página;
- revisar escritorio y móvil;
- comprobar que no exista desbordamiento horizontal inesperado;
- verificar contraste WCAG 2.2 AA;
- mantener foco visible, labels, estructura semántica y controles operables con teclado;
- ejecutar `git diff --check`;
- no publicar, hacer commit ni push salvo pedido explícito del usuario.
