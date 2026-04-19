import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "B-Sharp",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact' }
    ],

    socialLinks: [
      { icon: 'facebook', link: 'https://fb.me/AOBSharp' },
      { icon: 'instagram', link: 'https://www.instagram.com/AOBSharp' }
    ]
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
