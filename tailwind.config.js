/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#58C7F3",
        "light-white": "#ffffff2b"
      }
    },
  },
  plugins: [require('daisyui')],
}