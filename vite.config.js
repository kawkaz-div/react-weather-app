import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/react-weather-app/',
  plugins: [react()],
})

