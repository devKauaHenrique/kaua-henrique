/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'gradiente-1': '#cfd9df',
        'gradiente-2': '#e2ebf0',
        'gradiente-3': '#1c1c1c',
        'gradiente-4': '#0e0e0e',
        'azul-principal': '#2C54E0',
        'azul-fundo': '#b1c4fb',
      },
      height: {
        'screen-minus-header': 'calc(100vh - 5rem)'
      },
    },
  },
  plugins: [],
}

