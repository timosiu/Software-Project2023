/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Original light theme
        "haven-red": "#d7573b",
        "light-bg": "#ebebeb",
        "light-text": "#180202",
        "light-accent": "#9b9b9b",

        // Original dark theme
        // "dark-bg": "#141414",
        // "dark-text": "#fde7e7",
        // "dark-accent": "#636363",

        // "Disabled" dark theme
        "dark-bg": "#ebebeb",
        "dark-text": "#180202",
        "dark-accent": "#9b9b9b",
      },
      fontFamily: {
        ephesis: ["Ephesis", "cursive"],
      },
    },
  },
  plugins: [],
};
