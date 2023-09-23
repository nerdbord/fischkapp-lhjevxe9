import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fischkapp-lhjevxe9/',
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './src/setupJest.ts',
  },
})
