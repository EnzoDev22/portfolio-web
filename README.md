# Portfolio de Enzo

Portfolio personal bilingüe construido con Astro 7, i18next y Tailwind CSS 4 a partir de un diseño responsive de Figma.

## Requisitos

- Node.js `>=22.12 <27`.
- Las variables de entorno documentadas en `.env.example` para habilitar el formulario de contacto.

## Comandos

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Estructura

- `src/components`: secciones y componentes reutilizables.
- `src/data`: datos estructurales de proyectos, habilidades y experiencia.
- `src/layouts`: layout HTML y metadatos compartidos.
- `src/locales`: contenido en español e inglés.
- `src/pages`: portada y detalles de proyectos localizados.
- `src/styles`: estilos globales y tokens visuales.
- `public/assets`: imágenes e iconos estáticos.
- `api/contact.ts`: endpoint del formulario de contacto.

## Despliegue

El sitio está configurado para `https://portfolio-enzo-delsole.vercel.app` y se despliega en Vercel. Antes de publicar, configurá `RESEND_API_KEY`, `CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL` en el entorno del proyecto.

Los CV localizados se sirven como:

- `public/cv-enzo-del-sole-es.pdf`
- `public/cv-enzo-del-sole-en.pdf`
