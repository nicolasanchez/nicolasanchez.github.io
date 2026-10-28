# nicolasanchez.github.io

Personal site and security writeups. Deployed to GitHub Pages.

## Stack

- Astro (static output, no client JS by default), TypeScript strict.
- Writeups: content collection in `src/content/writeups/`, schema in `src/content.config.ts`.
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

- Writeups default to `draft: true`. Only publish retired HTB/THM machines.
- Redact credentials, flags, internal IPs and personal data in every writeup and screenshot.
- Never commit `loot/`, `.env*`, keys or raw tool output with sensitive data.

## /repo-check checklist

- [ ] README in English with screenshots or a GIF (Demo section not TODO).
- [ ] CI green on `main`.
- [ ] `gitleaks dir . --redact --no-banner` clean.
- [ ] `npm run lint` and `npm run build` pass locally.
- [ ] Conventional Commits, one logical change per commit.
- [ ] No drafts of active machines published; writeups redacted.
- [ ] Diff reviewed with the `appsec-reviewer` subagent before opening a PR.
