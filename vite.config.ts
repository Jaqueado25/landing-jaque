import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // Configuración adicional de Vite si es necesaria
  server: {
    port: 4321,
    open: true,
  },
  build: {
    target: 'esnext',
    sourcemap: true,
  },
});
