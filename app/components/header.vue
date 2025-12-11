<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-[#020408]/85 backdrop-blur-md border-b border-white/5 transition-all duration-300">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      
      <NuxtLink to="/" class="flex items-center gap-2 group" @click="closeMenu">
        <span class="w-2.5 h-4 bg-neon-cyan animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
        <span class="font-mono font-bold text-lg tracking-wider text-slate-200 group-hover:text-neon-cyan transition-colors">
          nekomi_ayame<span class="text-neon-cyan">.exe</span>
        </span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8 font-mono text-sm">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.name" 
          :to="item.path"
          class="relative text-slate-400 hover:text-white transition-colors py-1 group"
          :class="{ 'text-neon-cyan font-bold': isActive(item.path) }"
        >
          <span class="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity mr-1 absolute -left-3">></span>
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-full h-[1px] bg-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </NuxtLink>
        
        <NuxtLink to="/contact" class="px-4 py-1.5 border border-neon-cyan/50 text-neon-cyan rounded hover:bg-neon-cyan hover:text-[#020408] transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
          Contact
        </NuxtLink>
      </nav>

      <button 
        @click="toggleMenu" 
        class="md:hidden text-slate-300 hover:text-neon-cyan focus:outline-none transition-colors"
        aria-label="Toggle Menu"
      >
        <div class="relative w-6 h-6">
          <span 
            class="absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300"
            :class="isMenuOpen ? 'top-3 rotate-45' : 'top-1'"
          ></span>
          <span 
            class="absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300"
            :class="isMenuOpen ? 'opacity-0' : 'top-3'"
          ></span>
          <span 
            class="absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300"
            :class="isMenuOpen ? 'top-3 -rotate-45' : 'top-5'"
          ></span>
        </div>
      </button>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden border-t border-slate-800 bg-[#020408]/95 backdrop-blur-xl absolute w-full left-0 top-16 shadow-2xl">
        <nav class="flex flex-col p-4 space-y-2 font-mono">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.name" 
            :to="item.path"
            @click="closeMenu"
            class="block py-3 px-4 text-slate-300 hover:text-neon-cyan hover:bg-white/5 rounded border-l-2 border-transparent hover:border-neon-cyan transition-all"
          >
            <span class="text-neon-cyan mr-2">></span>{{ item.name }}
          </NuxtLink>
          
          <NuxtLink 
            to="/contact" 
            @click="closeMenu"
            class="block py-3 px-4 mt-4 text-center font-bold text-[#020408] bg-neon-cyan rounded hover:bg-white transition-colors"
          >
            Contact Me
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

// メニュー項目の定義
// トップページ内のアンカーリンクには /# をつけて、別ページからでも戻れるようにする
const menuItems = [
  { name: 'TOP', path: '/' },
  { name: 'Profile', path: '/#profile' },
  { name: 'Schematics', path: '/#model' },
  { name: 'Hardware', path: '/#hardware' }, // 追加した機材セクションへのリンク
  { name: 'Guidelines', path: '/guidelines' },
]

// メニュー開閉トグル
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// リンククリック時にメニューを閉じる
const closeMenu = () => {
  isMenuOpen.value = false
}

// 現在のルートと一致するか判定（簡易的なハイライト用）
const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  if (path.startsWith('/#')) return false // アンカーリンクは常にハイライトなしにするか、スクロール監視が必要（今回は簡易版）
  return route.path.startsWith(path)
}
</script>