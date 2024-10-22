import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Luan Phan",
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  vite: {
    assetsInclude: ['**/*.JPG'],
  },
  themeConfig: {
    nav: [],
    sidebar: [],
    socialLinks: []
  }
})
