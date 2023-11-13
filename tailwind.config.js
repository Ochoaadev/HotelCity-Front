/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gris: "#808080",
        blanco: "#FFFFFF",
        beige:"#D4B996",
        crema:"#F3E5AB"
      },
    },
  },
  plugins: [],
}