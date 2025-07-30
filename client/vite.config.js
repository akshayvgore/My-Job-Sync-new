import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base:"/My-Job-Sync-new/",
  plugins: [react(), tailwindcss()],
})
