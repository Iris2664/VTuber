<template>
  <div class="relative w-full overflow-hidden text-slate-200">
    
    <div class="fixed top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    <div class="fixed bottom-0 left-0 w-[500px] h-[500px] bg-hair-teal/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

    <section class="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-0">
      <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        <div class="flex-1 w-full max-w-xl space-y-8 animate-fade-in-up">
          <div class="flex items-center gap-3 text-neon-cyan/90 font-bold tracking-wider text-sm md:text-base border-b border-neon-cyan/20 pb-2 w-fit font-mono">
            <span class="animate-pulse">Compiling...</span>
            <span class="text-slate-600">::</span>
            <span>nekomi-ayame v1.0.0</span>
          </div>

          <h1 class="text-3xl md:text-6xl font-bold leading-tight">
            Hello, World!<br />
            I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-hair-teal drop-shadow-lg">Nekomi Ayame</span>
          </h1>

          <div class="group relative bg-[#020408]/90 border border-slate-700/50 rounded-lg p-6 backdrop-blur-md shadow-2xl transition-all hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <div class="absolute top-3 left-4 flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <pre class="mt-4 text-sm md:text-base font-mono overflow-x-auto"><code class="language-rust text-slate-300">
<span class="text-purple-400">pub fn</span> <span class="text-blue-400">main</span>() {
    <span class="text-purple-400">let</span> me = <span class="text-yellow-300">VirtualCat</span> {
        name: <span class="text-green-400">"猫海あやめ"</span>,
        stack: <span class="text-purple-400">vec!</span>[<span class="text-green-400">"TS"</span>, <span class="text-green-400">"Rust"</span>, <span class="text-green-400">"Security"</span>],
        os: <span class="text-purple-400">vec!</span>[<span class="text-green-400">"ChromeOS"</span>, <span class="text-green-400">"macOS"</span>],
        likes: <span class="text-purple-400">vec!</span>[<span class="text-green-400">"Mille Crepe"</span>, <span class="text-green-400">"Strawberry"</span>]
    };
    <span class="text-blue-400">println!</span>(<span class="text-green-400">"Hello, {:?}!"</span>, me);
}</code></pre>
          </div>

          <p class="text-slate-400 leading-relaxed text-base md:text-lg">
            情報科学に精通した猫。<br>
            資格もしっかり持ってる系VTuberとして、<br>
            <span class="text-neon-cyan font-bold">君のタイムラインを安全に運用（デバッグ）します！</span>
          </p>

          <div class="flex flex-wrap gap-4 pt-2">
            <a v-for="link in links" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
               class="relative px-6 py-3 overflow-hidden font-bold text-neon-cyan border border-neon-cyan rounded-md group transition-all hover:text-deep-sea hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              <span class="absolute top-0 left-0 w-full h-full bg-neon-cyan -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span class="relative z-10 flex items-center gap-2">
                {{ link.icon }} {{ link.name }}
              </span>
            </a>
          </div>
        </div>

        <div class="flex-1 flex justify-center items-center relative w-full h-[50vh] md:h-[80vh]">
          <div class="absolute w-[80%] h-[80%] bg-gradient-to-t from-neon-cyan/30 to-transparent blur-[80px] rounded-full animate-pulse"></div>
          <img 
            src="~/assets/img/nekomi_parker.webp" 
            alt="Nekomi Ayame" 
            class="relative z-10 h-full w-auto object-contain drop-shadow-[0_0_25px_rgba(0,240,255,0.25)] animate-float"
          />
        </div>
      </div>

      <a href="#profile" class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80 z-20">
        <span class="text-[10px] md:text-xs font-mono tracking-[0.3em] text-neon-cyan animate-pulse">DIVE_DEEPER</span>
        <div class="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-[50%] bg-white blur-[1px] animate-drop"></div>
        </div>
      </a>
    </section>

    <section id="profile" class="relative py-24 container mx-auto px-4 border-t border-slate-800/50">
      <div class="flex items-end gap-4 mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-neon-cyan">01_Entity_Data</h2>
        <span class="text-slate-500 font-mono text-sm mb-1">>> User Profile Loaded</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="space-y-6">
          <dl class="space-y-4 font-mono text-sm md:text-base">
            <div v-for="item in profileSpecs" :key="item.label" class="flex flex-col md:flex-row md:items-center justify-between border-b border-dashed border-slate-800 pb-2 hover:bg-white/5 transition-colors px-2">
              <dt class="text-hair-teal font-bold opacity-80">> {{ item.label }}</dt>
              <dd class="text-slate-300 md:text-right font-mono">
                <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer" class="text-neon-cyan hover:underline">
                    {{ item.value }}
                </a>
                <span v-else>{{ item.value }}</span>
              </dd>
            </div>
          </dl>
          
          <div class="pt-4 space-y-4">
              
              <div class="p-6 bg-slate-900/40 border-l-2 border-neon-cyan rounded-r-lg space-y-4">
                  <div>
                    <h4 class="text-hair-teal font-bold mb-2 text-sm">>> User Preferences (Likes)</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">ミルクレープ</span>
                      <span class="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">いちご</span>
                      <span class="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">旅行</span>
                      <span class="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">ボドゲ</span>
                      <span class="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">ChromeOS</span>
                    </div>
                  </div>
                  <div>
                    <h4 class="text-red-400 font-bold mb-2 text-sm">>> Error Conditions (Dislikes)</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-red-900/20 text-red-300 rounded-full text-xs border border-red-900/50">Discriminatory Remarks</span>
                      <span class="px-3 py-1 bg-red-900/20 text-red-300 rounded-full text-xs border border-red-900/50">No Response (Timeout)</span>
                    </div>
                  </div>
              </div>

              <div class="p-6 bg-slate-900/40 border-l-2 border-hair-teal rounded-r-lg space-y-4">
                  <h4 class="text-neon-cyan font-bold mb-2 text-sm">>> Communication Protocol (Greeting)</h4>
                  <div v-for="greeting in greetings" :key="greeting.type" class="flex justify-between items-center text-sm font-mono text-slate-300">
                      <span class="text-hair-teal font-bold">{{ greeting.type }}</span>
                      <span>{{ greeting.phrase }}</span>
                  </div>
              </div>
          </div>
        </div>

        <div class="bg-slate-900/30 p-6 md:p-8 rounded-lg border border-white/5 backdrop-blur-sm">
          
          <div class="mb-10">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
               <span class="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
               Tech_Stack
            </h3>
            
            <div class="grid grid-cols-1 gap-4">
              <div v-for="stack in techStacks" :key="stack.category" class="bg-black/40 p-4 rounded border border-slate-700/50">
                <h4 class="text-xs font-mono text-neon-cyan mb-2 border-b border-slate-700/50 pb-1 inline-block">
                  [{{ stack.category }}]
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in stack.items" :key="tech" class="px-2 py-1 bg-slate-800 text-slate-200 text-xs md:text-sm rounded hover:text-neon-cyan transition-colors cursor-default">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span class="w-2 h-2 bg-hair-teal rounded-full"></span>
              Active_Processes
            </h3>
            <div class="space-y-3">
              <div v-for="act in activities" :key="act.title" class="flex items-start gap-3 p-3 bg-black/40 rounded border border-slate-800 hover:border-hair-teal transition-colors">
                <span class="text-xl mt-1">{{ act.icon }}</span>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-200 text-sm">{{ act.title }}</span>
                    <span v-if="act.status" class="text-[10px] font-mono text-neon-cyan bg-neon-cyan/10 px-1 rounded">{{ act.status }}</span>
                  </div>
                  <p class="text-xs text-slate-500 mt-1">{{ act.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="timeline" class="relative py-24 container mx-auto px-4 border-t border-slate-800/50">
      <div class="flex items-end gap-4 mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-neon-cyan">01_1_Update_Log</h2>
        <span class="text-slate-500 font-mono text-sm mb-1">>> Version History Loaded</span>
      </div>

      <div class="relative pl-6 md:pl-10 space-y-10 border-l-2 border-slate-700/50">
        
        <div v-for="(item, index) in timeline" :key="index" class="relative group">
          <div class="absolute -left-6 md:-left-10 transform -translate-x-1/2 w-4 h-4 bg-neon-cyan rounded-full transition-all group-hover:scale-150 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
          
          <div class="bg-black/40 p-5 md:p-6 rounded-lg shadow-xl border border-slate-800 ml-4 md:ml-6 transition-all group-hover:border-hair-teal group-hover:shadow-[0_0_15px_rgba(40,137,145,0.5)]">
            <div class="flex items-center gap-4 mb-2 border-b border-slate-700/50 pb-2">
              <span class="text-sm font-bold text-neon-cyan font-mono tracking-wider">
                [{{ item.version }}]
              </span>
              <span class="text-xs font-mono text-slate-500">
                {{ item.date }}
              </span>
            </div>
            
            <h3 class="text-lg font-bold text-white mb-1">
              {{ item.title }}
            </h3>
            <p class="text-sm text-slate-400">
              {{ item.desc }}
            </p>
          </div>
        </div>

        <div class="absolute top-0 -left-6 md:-left-10 transform -translate-x-1/2 w-3 h-3 bg-hair-teal rounded-full"></div>
        <div class="absolute bottom-0 -left-6 md:-left-10 transform -translate-x-1/2 w-3 h-3 bg-hair-teal rounded-full"></div>

      </div>
    </section>

    <section id="model" class="relative py-24 bg-black/20">
      <div class="absolute inset-0 opacity-10 pointer-events-none" 
           style="background-image: linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(to right, #00F0FF 1px, transparent 1px); background-size: 50px 50px;">
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex items-end gap-4 mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-neon-cyan">02_Schematics</h2>
          <span class="text-slate-500 font-mono text-sm mb-1">>> Model View: v1.0.0</span>
        </div>
        
        <div class="w-full bg-[#050811] border border-slate-700 rounded-lg p-2 md:p-8 relative overflow-hidden group">
          <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan"></div>
          <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan"></div>
          <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan"></div>
          <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan"></div>
          
          <img 
            src="~/assets/img/three-view-drawing.png" 
            alt="Nekomi Ayame 3D Model Schematics" 
            class="w-full h-auto object-contain rounded transition-transform duration-500 group-hover:scale-[1.01]"
          />
          
          <div class="absolute bottom-4 right-6 text-xs text-neon-cyan font-mono bg-black/80 px-2 py-1 border border-neon-cyan/30">
            SCALE: 1:1<br>
            RENDER: CYCLES
          </div>
        </div>

        <div class="mt-8 text-center">
           <p class="text-slate-500 text-sm mb-3">※ 二次創作活動については、以下のガイドラインをご一読ください。</p>
           <NuxtLink to="/guidelines" class="text-neon-cyan border-b border-neon-cyan hover:text-white transition-colors font-mono tracking-wide">
             >> Read Guidelines (二次創作ガイドライン)
           </NuxtLink>
        </div>
      </div>
    </section>

    <section id="hardware" class="relative py-24 container mx-auto px-4 border-b border-white/5">
      <div class="flex items-end gap-4 mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-neon-cyan">03_Hardware_Specs</h2>
        <span class="text-slate-500 font-mono text-sm mb-1">>> Neofetch Executed</span>
      </div>

      <div class="bg-[#1e1e2e] p-6 md:p-10 rounded-lg font-mono text-sm md:text-base shadow-xl border border-slate-700 max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row gap-8 items-start">
          <div class="text-neon-cyan font-bold leading-tight hidden md:block select-none opacity-80 text-xs md:text-sm">
            <pre>
   /\___/\
  (  o o  )  &lt; Meow!
  /       \
 (         )
  \_______/
   U     U
            </pre>
          </div>
          <div class="flex-1 space-y-2 w-full">
            <div class="text-white font-bold mb-4 border-b border-slate-600 pb-2">
              user@nekomi-ayame-pc
              <span class="text-slate-500">--------------------</span>
            </div>
            <div v-for="spec in pcSpecs" :key="spec.key" class="flex gap-4">
              <span class="text-neon-cyan min-w-[80px] md:min-w-[120px]">{{ spec.key }}</span>
              <span class="text-slate-300">: {{ spec.value }}</span>
            </div>
            <div class="pt-6 text-slate-500">
              <span class="text-green-400">user@nekomi:~$</span> <span class="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="assets" class="relative py-24 container mx-auto px-4">
      <div class="flex items-end gap-4 mb-12 border-b border-white/10 pb-4">
        <h2 class="text-3xl md:text-4xl font-bold text-neon-cyan">04_System_Assets</h2>
        <span class="text-slate-500 font-mono text-sm mb-1">>> Dependencies Loaded</span>
      </div>

      <div class="grid grid-cols-1 gap-4">
        <a 
          v-for="asset in assets" 
          :key="asset.name" 
          :href="asset.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group flex flex-col md:flex-row md:items-center justify-between p-4 bg-black/40 border border-slate-800 rounded hover:border-neon-cyan/50 hover:bg-slate-900/60 transition-all duration-300"
        >
          <div class="flex items-center gap-4">
            <span class="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded min-w-[100px] text-center">
              [{{ asset.category }}]
            </span>
            <span class="text-text-gray font-mono group-hover:text-neon-cyan transition-colors">
              {{ asset.name }}
            </span>
          </div>
          <div class="flex items-center gap-4 mt-2 md:mt-0 text-sm text-slate-400">
            <span class="font-mono opacity-60">By {{ asset.author }}</span>
            <span class="text-neon-cyan opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">-></span>
          </div>
        </a>
      </div>
    </section>

    <section class="py-24 text-center">
      <h2 class="text-2xl font-bold text-white mb-6">Contact Protocol</h2>
      <p class="text-slate-400 mb-8">お仕事のご依頼・コラボのお誘いはこちらから</p>
      
      <NuxtLink to="/contact" 
         class="inline-flex items-center gap-3 px-8 py-4 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-bold rounded hover:bg-neon-cyan hover:text-deep-sea transition-all duration-300 group">
        <span>>> Establish Connection</span>
        <span class="group-hover:translate-x-1 transition-transform">-></span>
      </NuxtLink>
    </section>

  </div>
</template>

<script setup lang="ts">
// =========================
// データ定義
// =========================
const links = [
  { name: 'YouTube', url: 'https://youtube.com/Iris2664jp', icon: '📺' },
  { name: 'X (Twitter)', url: 'https://x.com/Iris2664', icon: '🐦' },
  { name: 'GitHub', url: 'https://github.com/Iris2664', icon: '🐙' },
  { name: 'Vgeek! Page', url: 'https://vgeekpro.com/talents/iris2664', icon: '🐈' }, 
]

const profileSpecs = [
  { label: 'Unit Name', value: '猫海 あやめ / NEKOMI Ayame' },
  { label: 'Model Type', value: 'Blue Cat / Programmer' },
  { label: 'Affiliation', value: 'Vgeek! (ぶいぎーく！)' },
  { label: 'Origin (出身)', value: 'Chiba, Japan' },
  { label: 'Habitat (生息)', value: 'Internet & Tokyo' },
  { label: 'Boot Date', value: '2024-08-26' },
  { label: 'Birthday', value: '05-14 (May 14th)' },
  { label: 'Licence (資格)', value: 'IT Passport (IP), Info Sec Mgmt (SG)' },
  { label: 'Fan Mark', value: '🐱🌊' }, 
  { label: 'Fan Name', value: 'Diver-san (ダイバーさん)' },
  { label: 'General Tag', value: '#ねこあやちゃん' },
  { label: 'Art Tag (FA)', value: '#ねこあやArt' },
  { label: 'Physical World Link', value: 'iris2664.com', url: 'https://www.iris2664.com/' }, 
]

const greetings = [
  { type: '配信開始', phrase: 'こんあやめ！' },
  { type: '配信終了', phrase: 'おつあや！' },
];

const timeline = [
  { version: 'v1.0.0', date: '2024-08-26', title: 'System Boot', desc: 'VTuberとして初配信を開始。活動開始。' },
  { version: 'v1.1.0', date: '2024-08-31', title: 'Affiliation Confirmed', desc: 'IT系VTuberグループ「ぶいぎーく！」への所属が決定。' },
  { version: 'v1.2.0', date: '2025-02-21', title: 'Milestone: 100 Subscribers', desc: 'YouTubeチャンネル登録者100人突破を達成。' },
  { version: 'v2.0.0', date: '2025-12-01', title: 'Project Migration', desc: '新衣装リリースと合わせ、公式サイトを全面リニューアル。' },
];

const techStacks = [
  { 
    category: 'Languages', 
    items: ['TypeScript', 'Rust', 'Python'] 
  },
  { 
    category: 'Frameworks / Web', 
    items: ['Nuxt.js', 'Vue.js', 'Tailwind CSS'] 
  },
  { 
    category: 'Security / Core', 
    items: ['CTF (Pwn/Web/OSINT)', 'Low-layer', 'Linux (Ubuntu)'] 
  },
  { 
    category: 'Tools', 
    items: ['VS Code', 'Git', 'Docker'] 
  },
]

const activities = [
  { title: 'Competitive Programming', desc: 'AtCoder / Algorithm', icon: '⚡', status: 'Running' },
  { title: 'CTF / Security', desc: 'Hack the Box / Vulnerability Assessment', icon: '🛡️', status: 'Running' },
  { title: 'IT Law & Cases', desc: '情報法・IT関連判例の学習', icon: '⚖️', status: 'Loading' },
  { title: 'Game Streaming', desc: 'FPS, RPG, Board Games', icon: '🎮', status: 'Online' },
]

const pcSpecs = [
  { key: 'OS', value: 'Windows 11 Pro / WSL2 (Ubuntu)' },
  { key: 'CPU', value: 'AMD Ryzen 5 4600H' },
  { key: 'GPU', value: 'AMD Radeon Graphics' },
  { key: 'Memory', value: '24.0 GB DDR4' },
  { key: 'Storage', value: '512GB SSD' },
  { key: 'Editor', value: 'VS Code' },
  { key: 'Terminal', value: 'Windows Terminal' },
]

const assets = [
  { category: 'Hair Model', name: 'Messy hair / ふわくしゃヘア', author: 'Serena Kupopo', url: 'https://kupopo.booth.pm/items/6222901' },
  { category: 'Hair Texture', name: 'TORINGOヘアテクスチャ', author: 'しらとりこはね', url: 'https://shiratori.booth.pm/items/3190732' },
  { category: 'Face Parts', name: '瞳アイライン眉まつげセット', author: 'しらとりこはね', url: 'https://shiratori.booth.pm/items/3044951' },
  { category: 'Eye Texture', name: 'VRoid向け アニ目テクスチャ', author: 'Team Aether', url: 'https://teamaether.booth.pm/items/1214971' },
  { category: 'Skin Texture', name: 'アニメ風肌テクスチャ', author: 'Team Aether', url: 'https://teamaether.booth.pm/items/1247301' },
  { category: 'Outfit', name: '病みかわパーカーセットB', author: 'もねこ', url: 'https://yuzumone.booth.pm/items/4337378' },
]
</script>

<style scoped>
/* スムーズスクロールを有効化 (グローバルCSSで設定されている場合不要) */
html {
  scroll-behavior: smooth;
}
.animate-float { animation: float 6s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.animate-drop { animation: drop 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
@keyframes drop { 0% { transform: translateY(-100%); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(200%); opacity: 0; } }
</style>