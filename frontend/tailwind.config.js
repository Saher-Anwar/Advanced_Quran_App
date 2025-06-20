/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}', 
    './screens/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}'
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        quranGreen: '#1FAB89',
      },
      fontFamily: {
        arabic: ['Amiri', 'serif']
      }
    },
  },
  plugins: [],
};
