/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", 'sans-serif'],
        title: ["Special Gothic Condensed One",' sans-serif']
      }
    },
  },
  plugins: [],
}