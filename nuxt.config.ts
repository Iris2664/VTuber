// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  // ===================================
  // ⚙️ ランタイム設定 (環境変数)
  // ===================================
  runtimeConfig: {
    public: {
      // 公開設定
    }
  },

  // ===================================
  // ⚙️ デプロイ設定 (カスタムドメイン/静的生成)
  // ===================================
  // 静的生成（SSG）と出力先設定
  ssr: true,
  // Nuxt 3 uses Nitro for deployment targets; use the 'static' preset for static hosting
  nitro: {
    preset: 'static'
  },
  
  app: {
    // カスタムドメイン (vtuber.iris2664.com) のため、ベースURLはルート '/'
    baseURL: '/', 
    buildAssetsDir: '/_nuxt/', // buildAssetsDir はそのままでOK
    
    head: {
      title: '猫海あやめ | 情報科学系プログラマーVTuber 公式サイト',
      titleTemplate: '%s - 猫海あやめ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '情報科学に精通した猫、猫海あやめの公式サイト。TypeScript/Rust/セキュリティ/CTFなどの技術活動情報を発信します。' },
        { name: 'theme-color', content: '#020408' },

        // 🌐 OGP (Open Graph Protocol)
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://vtuber.iris2664.com/' },
        { property: 'og:title', content: '猫海あやめ | 情報科学系プログラマー 公式サイト' },
        { property: 'og:description', content: '情報科学に精通した猫、猫海あやめの公式サイト。TypeScript/Rust/セキュリティ/CTFなどの技術活動情報を発信します。' },
        { property: 'og:image', content: '/ogp_image.png' },
        { property: 'og:locale', content: 'ja_JP' },

        // 🐦 Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@Iris2664' },
        { name: 'twitter:creator', content: '@Iris2664' },
        { name: 'twitter:image', content: '/ogp_image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600&display=swap' }
      ]
    }
  },
})