/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inknut-antiqua':['Inknut Antiqua', 'serif'],
      },
      backgroundImage: {
        'background':"url('/assets/image/background.png')",
      },
    },
  },
  plugins: [],
}

