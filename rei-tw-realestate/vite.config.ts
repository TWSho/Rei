import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Rei/', // GitHubリポジトリ名に合わせて修正
  plugins: [react()],
})
