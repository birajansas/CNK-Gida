/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },

    extend: {
      fontFamily: {
        open: ['Open Sans', 'sans-serif']
      },

      colors: {
        'cnk-black': '#000000',
        'cnk-red': '#E31E24',
        'cnk-darkred': '#C40307',
        'cnk-gray': '#D5D5D5',
      },
    },
  },
  plugins: [],
}

