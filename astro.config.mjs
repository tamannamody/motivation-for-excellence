import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production: https://motivationforexcellence.org at the root.
// GitHub Pages preview sets SITE_URL and BASE_PATH in the deploy workflow.
export default defineConfig({
  site: process.env.SITE_URL || 'https://motivationforexcellence.org',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
