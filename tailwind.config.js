/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dnd-dark': '#1a1815',        // 深灰偏棕，类似暗木黑
        'dnd-parchment': '#f4ead5',   // 羊皮纸主色
        'dnd-paper': '#e8deb8',       // 旧纸张加深
        'dnd-gold': '#b89456',        // 古金
        'dnd-gold-dark': '#8a6e3e',   // 黯淡古金
        'dnd-red': '#822424',         // 暗红/血红
        'dnd-red-dark': '#5c1313',    // 极暗红
        'dnd-indigo': '#28324a'
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'parchment-pattern': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.05\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" fill=\"%23e8deb8\"/%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23n)\" opacity=\"0.2\"/%3E%3C/svg%3E')",
        'dark-texture': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.04\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100\" height=\"100\" fill=\"%231a1815\"/%3E%3Crect width=\"100\" height=\"100\" filter=\"url(%23n)\" opacity=\"0.15\" blend-mode=\"multiply\"/%3E%3C/svg%3E')"
      }
    },
  },
  plugins: [],
}