import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta si estás en producción
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/' : '/',
});
