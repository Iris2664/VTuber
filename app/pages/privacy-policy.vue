<template>
  <div class="relative w-full min-h-screen overflow-hidden text-slate-300 font-mono">
    
    <div class="fixed top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    <div class="fixed bottom-0 left-0 w-[500px] h-[500px] bg-hair-teal/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 py-20">
      
      <header class="mb-16 text-center animate-fade-in-up">
        <div class="inline-block mb-4 text-neon-cyan border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1 rounded text-sm tracking-widest">
          SECURITY PROTOCOL
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          PRIVACY POLICY
        </h1>
        <p class="text-slate-500">プライバシーポリシー</p>
      </header>

      <div class="bg-[#050811]/90 border border-slate-700 rounded-lg p-6 md:p-12 shadow-2xl backdrop-blur-sm animate-fade-in-up delay-100">
        
        <div class="space-y-12">

          <section>
            <p class="leading-relaxed">
              猫海あやめ（以下、「当方」といいます。）は、当方の提供するウェブサイト（以下、「本サイト」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
            </p>
          </section>

          <section>
            <h3 class="text-lg font-bold text-neon-cyan mb-4 flex items-center gap-2">
              <span class="w-1 h-6 bg-neon-cyan block"></span>
              第1条（個人情報の利用目的）
            </h3>
            <p class="leading-relaxed mb-4">
              当方は、お問い合わせフォーム等を通じて得た個人情報（お名前、メールアドレス等）を、以下の目的のためにのみ利用します。
            </p>
            <ul class="list-disc list-outside ml-6 space-y-2 text-slate-400">
              <li>お問い合わせに対する回答や確認のご連絡のため</li>
              <li>不正・不当な目的でサービスを利用しようとするユーザーの特定、ご利用のお断りのため</li>
            </ul>
          </section>

          <section>
            <h3 class="text-lg font-bold text-neon-cyan mb-4 flex items-center gap-2">
              <span class="w-1 h-6 bg-neon-cyan block"></span>
              第2条（個人情報の第三者提供）
            </h3>
            <p class="leading-relaxed">
              当方は、ユーザーからお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、第三者に開示いたしません。
            </p>
            <ul class="list-disc list-outside ml-6 mt-4 space-y-2 text-slate-400">
              <li>ユーザー本人の同意がある場合</li>
              <li>法令に基づき開示することが必要である場合</li>
            </ul>
          </section>

          <section>
            <h3 class="text-lg font-bold text-neon-cyan mb-4 flex items-center gap-2">
              <span class="w-1 h-6 bg-neon-cyan block"></span>
              第3条（免責事項）
            </h3>
            <p class="leading-relaxed mb-4">
              本サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
            </p>
            <p class="leading-relaxed">
              また本サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
              本サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
          </section>

          <section>
            <h3 class="text-lg font-bold text-neon-cyan mb-4 flex items-center gap-2">
              <span class="w-1 h-6 bg-neon-cyan block"></span>
              第4条（お問い合わせ）
            </h3>
            <p class="leading-relaxed">
              本ポリシーに関するお問い合わせは、下記のお問い合わせフォームよりお願いいたします。
            </p>
            <div class="mt-4">
              <NuxtLink to="/contact" class="inline-flex items-center gap-2 text-white border border-slate-600 bg-slate-800 px-4 py-2 rounded hover:border-neon-cyan hover:text-neon-cyan transition-colors">
                <span>>> お問い合わせフォームへ</span>
              </NuxtLink>
            </div>
          </section>

        </div>
        
        <div class="mt-16 text-center border-t border-slate-800 pt-8">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-neon-cyan border-b border-neon-cyan hover:text-white transition-colors pb-1">
            &lt;&lt; Return to Top
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* フェードインアニメーション */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
.delay-100 {
  animation-delay: 0.1s;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>