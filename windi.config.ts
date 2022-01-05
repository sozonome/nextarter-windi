// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'windicss/helpers';

import { shortcuts } from './src/styles/shortcuts';

export default defineConfig({
  // attributify: true,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  shortcuts,
});
