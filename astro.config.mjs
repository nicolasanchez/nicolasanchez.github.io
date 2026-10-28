// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nicolasanchez.github.io',
  // Static output only: no server runtime, no client JS unless explicitly added.
  output: 'static',
});
