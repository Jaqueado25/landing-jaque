// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://automatizapro.com', // Reemplaza con tu dominio real
  integrations: [
    tailwind({
      // Configuración de Tailwind CSS
      config: {
        // Ruta a tu archivo de configuración de Tailwind
        path: './tailwind.config.mjs',
        // Aplicar estilos base de forma manual
        applyBaseStyles: false,
      },
    }),
    sitemap(),
  ],
  // Configuración de compilación
  output: 'static',
  // Configuración de Vite
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
    // Configuración para mejor rendimiento
    build: {
      target: 'esnext',
    },
    // Configuración de CSS
    css: {
      postcss: './postcss.config.mjs',
    },
  },
  // Configuración del servidor de desarrollo
  server: {
    host: true, // Habilita el acceso desde la red local
    port: 4321, // Puerto personalizado
  },
  // Configuración de compilación
  build: {
    // Configuración de compilación predeterminada
  },
});