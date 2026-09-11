import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import i18next from '@gutenye/astro-i18next/integration';

export default defineConfig({
  site: 'https://example.com',
  compressHTML: true,
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "form-action 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
      ],
      scriptDirective: {
        resources: [
          { resource: "'self'", kind: 'element' },
          { resource: "'none'", kind: 'attribute' },
        ],
      },
      styleDirective: {
        resources: [
          { resource: "'self'", kind: 'element' },
          { resource: "'unsafe-inline'", kind: 'attribute' },
        ],
      },
    },
  },
  integrations: [i18next({ lng: 'es', preload: ['es', 'en'] })],
  vite: {
    plugins: [tailwindcss()],
  },
});
