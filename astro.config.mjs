// @ts-check
import { defineConfig } from 'astro/config';
import lottie from 'astro-integration-lottie';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cucc.site',
  integrations: [tailwind({
    applyBaseStyles:false,
  }), lottie(), icon(), react(), sitemap()]
});