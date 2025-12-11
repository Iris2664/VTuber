// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  // ▼ app: head の設定を更新します
  app: {
    head: {
      title: '猫海あやめ | 情報科学系プログラマーVTuber 公式サイト', // サイトの基本タイトル
      titleTemplate: '%s - 猫海あやめ', // 個別ページタイトルのテンプレート
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '情報科学に精通した猫、猫海あやめの公式サイト。TypeScript/Rust/セキュリティ/CTFなどの技術活動情報を発信します。' },
        { name: 'theme-color', content: '#020408' }, // ダークテーマカラー

        // ===================================
        // 🌐 OGP (Open Graph Protocol)
        // ===================================
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'hhttps://vtuber.iris2664.com/' }, // 👈 サイトのURLに置き換えてください
        { property: 'og:title', content: '猫海あやめ | 情報科学系プログラマー 公式サイト' },
        { property: 'og:description', content: '情報科学に精通した猫、猫海あやめの公式サイト。TypeScript/Rust/セキュリティ/CTFなどの技術活動情報を発信します。' },
        { property: 'og:image', content: '/ogp_image.png' }, // 👈 publicフォルダ直下に画像ファイルを配置
        { property: 'og:locale', content: 'ja_JP' },

        // ===================================
        // 🐦 Twitter Card
        // ===================================
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@Iris2664' }, // 👈 自分のXアカウント名に置き換えてください
        { name: 'twitter:creator', content: '@Iris2664' },
        { name: 'twitter:image', content: '/ogp_image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Google Fonts (Fira Code) の読み込み
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600&display=swap' }
      ]
    }
  },

  // ... (runtimeConfigなどの既存の設定が続く) ...
})