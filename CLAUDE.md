# nicolasanchez.github.io

Single-page personal portfolio (nicosantor.com). Deployed to GitHub Pages.

## Stack

- Astro (static output), TypeScript strict. Small client-side scripts in components (hex columns, active nav link).
- Content (skills, projects, contact links): `src/data/site.ts`. Logos: `public/icons/`.
- Prettier with `prettier-plugin-astro`. No ESLint, no unit tests (no logic to test); the build is the smoke test.
- CI: `.github/workflows/ci.yml` (Gitleaks + lint + build). Deploy: `.github/workflows/deploy.yml`.

## Commands

```bash
npm ci              # install exact locked deps
npm run dev         # dev server on http://localhost:4321
npm run build       # static build into dist/
npm run preview     # serve dist/
npm run lint        # astro check + prettier --check .
npm run format      # prettier --write .
gitleaks dir . --redact --no-banner
```

Before saying something is done: `npm run lint && npm run build`.

## Content rules

- Redact credentials, internal IPs and personal data in every screenshot.
- Never commit `loot/`, `.env*`, keys or raw tool output with sensitive data.

## /repo-check checklist

- [ ] README in English with screenshots or a GIF (Demo section not TODO).
- [ ] CI green on `main`.
- [ ] `gitleaks dir . --redact --no-banner` clean.
- [ ] `npm run lint` and `npm run build` pass locally.
- [ ] Conventional Commits, one logical change per commit.
- [ ] Diff reviewed with the `appsec-reviewer` subagent before opening a PR.
