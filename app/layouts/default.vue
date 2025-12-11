<template>
  <div class="min-h-screen bg-deep-sea text-text-gray font-mono overflow-x-hidden relative">
    
    <div class="fixed inset-0 z-0 opacity-10 pointer-events-none"
         style="background-image: linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px); background-size: 40px 40px;">
    </div>

    <div class="relative z-10">
       <Header /> <slot />
    </div>

    <Footer /> 
  </div>
</template>