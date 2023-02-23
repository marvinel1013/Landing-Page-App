/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#04DFBE",
        secondary: "#2D474E",
      },
    },
  },
  plugins: [],
};
