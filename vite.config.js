/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    cssInjectedByJsPlugin({ topExecutionPriority: false }),
  ],
  build: {
    outDir: 'docs',
  },
}));
