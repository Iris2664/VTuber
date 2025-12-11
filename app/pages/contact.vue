<template>
  <div class="relative w-full min-h-screen overflow-hidden text-slate-300 font-mono">
    
    <div class="fixed top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    <div class="fixed bottom-0 left-0 w-[500px] h-[500px] bg-hair-teal/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 py-20">
      
      <header class="mb-8 text-center animate-fade-in-up">
        <div class="inline-block mb-4 text-neon-cyan border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1 rounded text-sm tracking-widest">
          SECURE CONNECTION
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          CONTACT
        </h1>
        <p class="text-slate-500">お問い合わせフォーム</p>
      </header>

      <div class="mb-8 text-center animate-fade-in-up" style="animation-delay: 0.1s;">
        <p class="text-sm text-slate-400 bg-black/40 inline-block px-6 py-3 rounded-full border border-slate-700">
          ※ お問い合わせの前に、
          <NuxtLink to="/privacy-policy" class="text-neon-cyan font-bold hover:underline hover:text-white transition-colors">
            プライバシーポリシー
          </NuxtLink>
          をご確認ください。
        </p>
      </div>
      <div class="bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-700 animate-fade-in-up delay-100" style="animation-delay: 0.2s;">
        
        <div class="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center gap-2">
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div class="ml-4 text-xs text-slate-500 font-sans bg-white px-3 py-0.5 rounded-md border border-slate-200 shadow-sm flex-1 text-center">
            https://forms.google.com/contact
          </div>
        </div>

        <div class="responsive-iframe-container bg-white">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSekEB9rUza2F-9gtwRQr38Pc4GAoie77xQHHIMc0JH5-hevYQ/viewform?embedded=true"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Contact Form"
          >
            読み込んでいます…
          </iframe>
        </div>
      </div>

      <div class="mt-12 text-center">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-neon-cyan border-b border-neon-cyan hover:text-white transition-colors pb-1">
          &lt;&lt; Return to Top
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* フェードインアニメーション */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Googleフォーム用レスポンシブコンテナ */
.responsive-iframe-container {
  position: relative;
  overflow: hidden;
  padding-top: 160%; /* スマホ用縦長比率 */
}

@media (min-width: 768px) {
  .responsive-iframe-container {
    padding-top: 100%; /* PC用 */
  }
}

.responsive-iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>