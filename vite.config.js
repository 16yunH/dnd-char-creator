import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dnd-char-creator/', // 确保打包后的静态资源路径兼容 GitHub Pages
})