import reactRefresh from '@vitejs/plugin-react-refresh'
import livereload from 'vite-plugin-live-reload'
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

defineConfig(() => {
  return {
    build: {
      outDir: 'build'
    },
    plugins: [ react(), reactRefresh(), livereload('src/**/*.{js,jsx,ts,tsx}') ],

  }
});

export default defineConfig;