<template>
  <div class="min-h-screen flex flex-col">
    <Splash :is-visible="showSplash" />
    <div class="flex-grow flex flex-col md:flex-row">
      <div class="w-full md:w-1/6 p-6 shadow-xl md:sticky md:top-0 md:h-screen">
        <Header />
      </div>
      <div class="w-full md:w-5/6 flex flex-col">
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

// refの型を明示的に指定
const showSplash = ref<boolean>(true);

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
  }, 1200); // x秒後にフェードアウトを開始
});
</script>