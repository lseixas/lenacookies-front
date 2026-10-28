import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project Pages: https://lseixas.github.io/lenacookies-front/
export default defineConfig({
  plugins: [react()],
  base: '/lenacookies-front/',
})
