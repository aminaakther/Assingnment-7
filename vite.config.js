import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ToastContainer } from 'react-toastify'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})