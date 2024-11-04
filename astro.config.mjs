// @ts-check
import { defineConfig } from 'astro/config';
import lottie from 'astro-integration-lottie';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), lottie()]
});