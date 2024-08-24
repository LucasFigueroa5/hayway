/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {spacing: {
      '30': '30px',
    },},
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
};