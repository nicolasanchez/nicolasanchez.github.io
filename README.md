# nicolasanchez.github.io

Personal portfolio with a terminal-inspired design. Live at <https://nicosantor.com>.

[![CI](https://github.com/nicolasanchez/nicolasanchez.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/nicolasanchez/nicolasanchez.github.io/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Features

- Single-page portfolio: **About**, **Skills**, **Projects** and **Contact**, with a fixed navigation bar.
- Terminal-inspired design (`nicolás@sec:~$` prompts, JetBrains Mono, dark theme).
- Animated hero: hex columns and a radar sweep in CSS; columns filled with JavaScript.
- Active section highlighted in the navigation bar while scrolling (`IntersectionObserver`).
- Responsive layout and `prefers-reduced-motion` support.
- Self-hosted font (no third-party requests).
- CI with secret scanning (Gitleaks), type checking, formatting checks and build.
- Automatic deployment to GitHub Pages on every push to `main`, served on a custom domain via Cloudflare.

## Demo / Screenshots

<!-- TODO: add a screenshot or GIF of the site -->

Live site: <https://nicosantor.com>

## Getting started

Requirements: Node.js 22.23.4+ and npm.

```bash
git clone https://github.com/nicolasanchez/nicolasanchez.github.io.git
cd nicolasanchez.github.io
npm ci
npm run dev
```

The dev server runs at <http://localhost:4321>.

## Usage

| Command           | Action                              |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the local dev server          |
| `npm run build`   | Build the static site into `dist/`  |
| `npm run preview` | Serve the production build locally  |
| `npm run check`   | Type-check `.astro` and `.ts` files |
| `npm run lint`    | `astro check` + `prettier --check`  |
| `npm run format`  | Format the codebase with Prettier   |

### Editing content

Skills, projects and contact links live in `src/data/site.ts`. Logos are in `public/icons/`.
To add a screenshot to a project, put the image in `public/` and set its `image` field.

## Tech stack

- [Astro](https://astro.build) (static output)
- JavaScript for small client-side enhancements
- TypeScript (strict)
- Prettier + `prettier-plugin-astro`
- GitHub Actions + GitHub Pages

## Security notes

- Static site: no backend, no database, no user input processed server side.
- No third-party client-side scripts, fonts or trackers.
- Secret scanning with Gitleaks in CI and locally (`gitleaks dir . --redact --no-banner`).
- GitHub Actions run with least-privilege `permissions`; only the deploy workflow can write to Pages.

## License

[MIT](LICENSE) © Nicolás Sánchez Torregrosa
