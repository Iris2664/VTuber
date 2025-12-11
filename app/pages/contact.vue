<template>
  <div>
    <div class="relative h-96">
      <img src="~/assets/img/bk-img.webp" alt="background image" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="absolute inset-0 flex items-center justify-center p-8 text-white">
        <div>
          <h2 class="text-4xl font-bold">お問い合わせ</h2>
        </div>
      </div>
    </div>
    <div class="px-10 py-9">
      <section>
        <div class="responsive-iframe-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSekEB9rUza2F-9gtwRQr38Pc4GAoie77xQHHIMc0JH5-hevYQ/viewform?embedded=true"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            読み込んでいます…
          </iframe>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.responsive-iframe-container {
  position: relative;
  overflow: hidden;
  padding-top: 150%; /* フォームの縦横比に応じて調整 (例: 1491 / 640 = ~233% → padding-top: 233%;) */
}

.responsive-iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>