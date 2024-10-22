import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://malloc-nbytes.github.io/EARL-web/",
  build: {
    outDir: 'build',
  }
})
