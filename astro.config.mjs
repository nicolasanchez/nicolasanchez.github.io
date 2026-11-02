// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nicosantor.com',
  // Static output only: no server runtime, no client JS unless explicitly added.
  output: 'static',
});
