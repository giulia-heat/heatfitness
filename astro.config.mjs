// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.heatfitness.app',
  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});