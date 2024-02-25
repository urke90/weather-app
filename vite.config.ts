import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// ----------------------------------------------------------------

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/lib': path.resolve(__dirname, 'src/lib'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/api': path.resolve(__dirname, 'src/api'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // imported variables globally so they could be used across the app.
        additionalData: `@import "./src/styles/_variables.scss";`,
      },
    },
  },
});
