/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "index.html",
    "contactUs.html",
    "galery.html",
    "services.html",
  ],
  extend: {
    fontFamily: {
      iranSans: ["iranSans", "sans-serif"],
    },
  },
  plugins: [],
};
