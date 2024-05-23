/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Outfit': 'Outfit Variable, sans-serif',
    },
    extend: {
      boxShadow: {
        'custom': '0 0px 50px 0 hsla(0, 0%, 0%, 0.15)',
      },
    },
  },
  plugins: [],
}