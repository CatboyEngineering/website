/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        ceNight: '#222831',
        ceDarkest: '#181d23',
        ceDusk: '#31363F',
        ceSeaFoam: '#76ABAE',
        ceCloud: '#EEEEEE'
      },
      fontFamily: {
        lilitaOne: ['Lilita One', 'sans-serif']
      }
    }
  },
  plugins: []
};
