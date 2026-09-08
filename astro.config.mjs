import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import i18next from '@gutenye/astro-i18next/integration';

export default defineConfig({
  site: 'https://example.com',
  integrations: [i18next({ lng: 'es', preload: ['es', 'en'] })],
  vite: {
    plugins: [tailwindcss()],
  },
});
