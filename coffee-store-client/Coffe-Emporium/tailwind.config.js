/** @type {import('tailwindcss').Config} */
const textShadow = require('tailwindcss-textshadow');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rancho: ['Rancho', 'cursive'],
      }
    },
  },
  plugins: [
    
    require('daisyui'),
    [textShadow],
  ],
}