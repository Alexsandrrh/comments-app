import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { default as checkerPlugin } from 'vite-plugin-checker';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin(),
    checkerPlugin({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/**/**/**/**/**/*.{ts,tsx}" --fix',
      },
    }),
    tsconfigPathsPlugin(),
  ],
});
