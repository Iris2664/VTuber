import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // 猫海あやめカラー（漆黒Ver.）
        'deep-sea': '#020408',    // ほぼ黒
        'neon-cyan': '#00F0FF',   // 発光シアン
        'hair-teal': '#288991',   // 髪色
        'text-gray': '#E2E8F0',   // 文字色
      },
      fontFamily: {
        // Fira Codeを優先適用
        mono: ['"Fira Code"', 'Consolas', 'Monaco', 'monospace'],
      },
      // 浮遊アニメーション
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  }
}