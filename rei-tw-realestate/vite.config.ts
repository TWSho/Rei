import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/rei-tw-realestate/', // GitHubリポジトリ名に合わせて設定
  plugins: [react()],
})
