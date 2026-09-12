// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ji-peng.com',
  publicDir: './static',
  outDir: './dist',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
