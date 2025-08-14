<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    

    <div class="flex-grow flex flex-col md:flex-row">
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

</script>

