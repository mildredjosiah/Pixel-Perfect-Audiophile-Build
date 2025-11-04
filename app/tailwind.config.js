/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        audioblack: "#000000",
        audiomain: "#D87D4A",
        audiomainlight: "#FBAF85",
        audiogray: "#F1F1F1",
      },
    },
  },
  plugins: [],
};
