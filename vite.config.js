import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = '/TP-7-Catalogo-de-Productos/'

export default defineConfig({
  plugins: [react()],
  base: repoName,
})
