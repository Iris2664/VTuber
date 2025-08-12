<template>
  <div class="min-h-screen flex flex-col">

    <div class="flex flex-col md:flex-row flex-grow">
      <div class="w-full md:w-1/5">
        <Header />
      </div>

      <div class="w-full md:w-4/5">
        <main>
          <NuxtPage />
        </main>
      </div>
    </div>
    
    <Footer />
  </div>
</template>
<script lang="ts">

</script>