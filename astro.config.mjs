// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://labo.wagomu.me',
  adapter: cloudflare(),
  integrations: [react()],
});