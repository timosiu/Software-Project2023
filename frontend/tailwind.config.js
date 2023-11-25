/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "haven-red": "#d7573b",
        "light-bg": "#ebebeb",
        "light-text": "#180202",
        "light-accent": "#9b9b9b",
        "dark-bg": "#141414",
        "dark-text": "#fde7e7",
        "dark-accent": "#636363",
      },
      fontFamily: {
        ephesis: ["Ephesis", "cursive"],
      },
    },
  },
  plugins: [],
};
