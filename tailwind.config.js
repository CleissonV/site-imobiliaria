export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        realty: { bg: '#f7f4ef', dark: '#1a1208', gold: '#b8860b', accent: '#2c3e50', card: '#ffffff', border: '#e8e0d0', text: '#3d3020', muted: '#8a7a60' }
      },
      fontFamily: {
        serif: ['Italiana', 'serif'],
        sans: ['Raleway', 'sans-serif']
      }
    }
  },
  plugins: []
}
