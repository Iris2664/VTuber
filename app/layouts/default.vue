<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    
    <Splash :is-visible="showSplash" />

    <div v-if="showContent" class="flex-grow flex flex-col md:flex-row">
      <div class="w-full md:w-1/6 p-6 shadow md:sticky md:top-0 md:h-screen">
        <Header />
      </div>

      <div class="w-full md:w-5/6 flex flex-col flex-grow">
        <main class="flex-grow">
          <NuxtPage />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Splash from '~/components/Splash.vue';

const showSplash = ref<boolean>(false);
const showContent = ref<boolean>(false);

onMounted(() => {
  const hasVisited = sessionStorage.getItem('visited');

  if (!hasVisited) {
    showSplash.value = true;

    // スプラッシュ画面が表示されている間はコンテンツを非表示
    setTimeout(() => {
      showSplash.value = false;
      
      // スプラッシュ画面がフェードアウトした後にコンテンツを表示
      setTimeout(() => {
        showContent.value = true;
        sessionStorage.setItem('visited', 'true');
      }, 1000); // フェードアウトの時間に合わせる
    }, 3000); // ロゴ表示時間
  } else {
    // 2回目以降の訪問では直接コンテンツを表示
    showContent.value = true;
  }
});
</script>

<style>
@import url('~/assets/css/main.css');
</style>