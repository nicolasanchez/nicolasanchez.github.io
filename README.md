# nicolasanchez.github.io

Personal site and security writeups.

[![CI](https://github.com/nicolasanchez/nicolasanchez.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/nicolasanchez/nicolasanchez.github.io/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Features

- **About**, **Projects** and **Writeups** pages.
- Writeups authored in Markdown/MDX with a typed schema (title, date, platform, difficulty, tags).
- `draft` flag (on by default) so writeups of active machines are never published.
- Fully static output: zero client-side JavaScript by default.
- Light/dark theme following the OS preference.
- CI with secret scanning (Gitleaks), type checking, formatting checks and build.
- Automatic deployment to GitHub Pages on every push to `main`.

## Demo / Screenshots

<!-- TODO: add a screenshot or GIF of the site -->

Live site: <https://nicolasanchez.github.io>

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

### Adding a writeup

Create `src/content/writeups/<slug>.md`:

```markdown
---
title: 'Machine name'
date: 2026-10-28
platform: HTB
difficulty: Easy
tags: [web, privesc]
summary: 'One-line summary.'
draft: false
---
```

Only set `draft: false` once the machine is retired.

## Tech stack

- [Astro](https://astro.build) (static output, content collections)
- TypeScript (strict)
- Prettier + `prettier-plugin-astro`
- GitHub Actions + GitHub Pages

## Security notes

- Static site: no backend, no database, no user input processed server side.
- No third-party client-side scripts or trackers.
- Secret scanning with Gitleaks in CI and locally (`gitleaks dir . --redact --no-banner`).
- GitHub Actions run with least-privilege `permissions`; only the deploy workflow can write to Pages.
- Writeups redact credentials, flags, internal IPs and personal data, and only cover retired machines.

## License

[MIT](LICENSE) © Nicolás Sánchez Torregrosa
