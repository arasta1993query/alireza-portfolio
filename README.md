# Alireza Asghari Tabrizi

Personal portfolio and résumé site built with Vue 3, TypeScript, and Vite. The production build prerenders the page into HTML for search engines and static hosting.

## Run locally

Use Node.js 20.19+ or 22.12+ and pnpm 12.14.0.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

## Verify and build

```sh
pnpm run typecheck
pnpm run build
pnpm run preview
```

Publish the generated `dist/` directory to any static host.

## Edit the site

- Profile, projects, experience, and skills are in `src/content/portfolio.ts`.
- Vue sections and shared UI are in `src/components/`.
- Styles are in `src/styles.css`.
- Résumés, images, and icons are in `public/`.
