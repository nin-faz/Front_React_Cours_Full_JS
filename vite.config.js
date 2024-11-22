import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined // Désactiver les imports dynamiques
      }
    },
    outDir: 'dist', // Répertoire de sortie pour les fichiers précompilés
    target: 'es2015' // Assurez la compatibilité avec Chrome extensions
  },
  plugins: [react()],
})

