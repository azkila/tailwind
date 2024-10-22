/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/node_modules/flowbite/**/*.{html,js}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "night"],
    extend: {},
  },
  
    
  plugins: [require('daisyui', 'flowbite/plugin'),],
}