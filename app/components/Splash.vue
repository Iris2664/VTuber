<template>
  <div class="splash-screen" :class="{ 'fade-out': !isVisible }">
    <img src="~/assets/img/logo.png" alt="logo" class="logo" width="800" height="600">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 1s ease-out, visibility 1s ease-out;
}

.splash-screen.fade-out {
  opacity: 0;
  visibility: hidden;
}

.logo {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
</style>