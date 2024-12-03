/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGreen: '#428A70'
      },
      fontFamily:{
        roboto : ["Roboto" , "sans-serif"]
      }
    },
  },
  plugins: [],
}

