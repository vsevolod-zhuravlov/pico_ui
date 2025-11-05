import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo name as base for GitHub Pages, or root for local/other deployments
  base: process.env.GITHUB_ACTIONS ? '/pico_ui/' : '/',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      }
    ]
  }
})