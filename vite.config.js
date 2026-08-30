import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('ts-fsrs')) return 'vendor-fsrs';
            if (id.includes('lucide-react')) return 'vendor-lucide';
            if (id.includes('react-router')) return 'vendor-router';
            if (id.includes('react')) return 'vendor-react';
            return 'vendor';
          }
          if (id.includes('/data/flashcards/') || id.includes('/data/mcqs/')) return 'data';
          if (id.includes('/data/keywordMaps')) return 'keyword-maps';
        },
      },
    },
  },
})
