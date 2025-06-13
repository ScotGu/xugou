import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
        // 如果后端 API 不包含 /api 前缀，可以重写路径
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 如果需要代理其他路径，可以添加更多配置
    },
    // 如果需要指定前端开发服务器端口
    port: 5173,
  },
})
