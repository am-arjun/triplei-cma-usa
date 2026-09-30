import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves the site from /<repo>/; set BASE_PATH for that build.
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
    // @elt/tokens is a symlink into the prototype repo; resolve through it
    preserveSymlinks: false,
  },
  server: { fs: { allow: ['..'] } },
})
