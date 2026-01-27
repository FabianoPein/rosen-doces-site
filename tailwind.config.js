/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",      // Adicionado: Procura na pasta pages
    "./components/**/*.{js,ts,jsx,tsx}", // Adicionado: Procura na pasta components
    "./*.{js,ts,jsx,tsx}"                 // Adicionado: Procura arquivos soltos na raiz (como App.tsx se estiver fora do src)
  ],
  theme: {
    extend: {
      colors: {
        rosen: {
          cream: '#fff8dc',
          wine: '#C95A54',
          darkWine: '#3B110F',
          gold: '#daa520',
          brown: '#8b4513',
          dark: '#2c2c2c',
          muted: '#6b6b6b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}