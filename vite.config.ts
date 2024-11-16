import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'c:/Users/thiag/OneDrive/Documentos/repos/multi-entries-app/index.html',
        dash: 'c:/Users/thiag/OneDrive/Documentos/repos/multi-entries-app/dash.html',
      },
      output: {
        manualChunks: () => 'app.min.js',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
