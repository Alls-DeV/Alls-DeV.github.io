import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

export default defineConfig({
  site: 'https://Alls-DeV.github.io',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
