# Repository Guidelines

## Project Structure & Module Organization

This portfolio is an Astro 6 static site. Route entry points live in `src/pages/`, shared page shells in `src/layouts/`, and reusable UI in `src/components/`. Project-specific component groups belong in subfolders such as `src/components/projects/`. Keep structured portfolio content in `src/data/`, browser behavior in `src/scripts/`, and shared tokens and responsive rules in `src/styles/global.css`.

Static files are served from `public/`: use `public/assets/` for images and icons and `public/fonts/` for local fonts. The contact endpoint is implemented separately in `api/contact.ts`. Generated output (`dist/`), dependencies (`node_modules/`), and review artifacts under `tmp/` are not source files.

## Build, Test, and Development Commands

- `npm install`: install the locked dependencies. Use Node.js `>=22.12 <27`.
- `npm run dev`: start Astro's local development server with hot reload.
- `npm run check`: run Astro and TypeScript diagnostics.
- `npm run build`: run diagnostics and create the production site in `dist/`.
- `npm run preview`: serve the completed production build locally.

Run `npm run build` before handing off any change.

## Coding Style & Naming Conventions

Use two-space indentation, single quotes in TypeScript and JavaScript, and semicolons. TypeScript uses Astro's strict configuration; avoid `any` and type DOM queries and payloads explicitly. Name Astro components in PascalCase (`ProjectCard.astro`), scripts and data modules in kebab-case or lowercase (`section-reveal.ts`, `projects.ts`), and CSS classes in descriptive kebab-case.

Favor semantic HTML, mobile-first CSS, Flexbox, existing custom properties, and small reusable selectors. Preserve the Spanish/English `.lang-es` and `.lang-en` pattern when editing visible text. No formatter or linter is configured, so match surrounding code.

## Testing Guidelines

There is currently no automated test framework or coverage requirement. Treat `npm run check` and `npm run build` as required verification. For UI changes, manually test narrow mobile and desktop widths, both themes, both languages, keyboard focus, reduced motion, and horizontal overflow. Document these checks in the pull request.

## Commit & Pull Request Guidelines

History follows Conventional Commit-style subjects, for example `feat: enhance hero section` and `refactor: improve code structure`. Use an imperative, scoped summary and keep each commit focused.

Pull requests should explain the intent, list validation commands, link relevant issues, and include before/after screenshots for visual changes. Call out configuration or content updates explicitly.

## Security & Configuration

Copy `.env.example` locally and provide `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`. Never commit secrets or real environment files. Preserve the validation, honeypot, size limits, and HTML escaping in `api/contact.ts`.
