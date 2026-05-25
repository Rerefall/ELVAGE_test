import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages のプロジェクトサイトは /<repo>/ 配下で配信されるため base を合わせる
export default defineConfig({
  plugins: [react()],
  base: '/ELVAGE_test/',
})
