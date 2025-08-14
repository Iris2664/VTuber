<template>
    <header>
        <div class="flex items-center justify-between ">
            <div>
                <img class="text-center" src="~/assets/img/logo.png" alt="logo" width="1100" height="300">
                <h1 class="text-2xl font-bold px-4 pt-0">
                    <NuxtLink to="/">HINATA Ayame</NuxtLink>
                </h1>
                <p class="px-4 pt-1 pb-2">
                    個人勢のYouTuber、陽向あやめ
                    VTuber | Artist | Streamer
                </p>
            </div>

            <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
                <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </button>

        </div>

        <nav :class="{'hidden': !isMenuOpen, 'flex flex-col space-y-2 p-4': isMenuOpen}"
            class="md:flex md:flex-col md:space-y-2 md:p-4 text-xl">
            <NuxtLink to="/" class="hover:text-gray-400">Home</NuxtLink>
            <NuxtLink to="/profile" class="hover:text-gray-400">Profile</NuxtLink>
            <NuxtLink to="/news" class="hover:text-gray-400">News</NuxtLink>
            <NuxtLink to="/guidelines" class="hover:text-gray-400">Guidelines</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-gray-400">Contact</NuxtLink>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>