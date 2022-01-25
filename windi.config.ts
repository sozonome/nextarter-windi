/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'windicss/helpers';
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio';
import formsPlugin from 'windicss/plugin/forms';
import typographyPlugin from 'windicss/plugin/typography';

import { shortcuts } from './src/lib/styles/shortcuts';

export default defineConfig({
  // attributify: true,
  darkMode: 'class',
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
  },
  shortcuts,
  plugins: [aspectRatioPlugin, formsPlugin, typographyPlugin()],
});
