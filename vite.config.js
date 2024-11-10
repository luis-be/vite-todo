import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteGitHubPages from 'vite-plugin-gh-pages'; // Asegúrate de importar correctamente el plugin

export default defineConfig({
  base: '/vite-todo/', // Cambia esto para que coincida con el nombre de tu repositorio
  plugins: [
    vue(),
    ViteGitHubPages(), // Usa el plugin de GitHub Pages correctamente
  ],
});
