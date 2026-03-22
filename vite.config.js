import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // 👈 allows access from any device
    port: 5173         // default vite port (you can change)
  }
})