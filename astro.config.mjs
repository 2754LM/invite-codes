// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://2754lm.github.io',
  base: '/invite-codes',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
    }),
  ],
  build: {
    format: 'directory',
  },
});