/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blanco: "#FFFFFF",
        AzulO:"#172554",
        crema:"#F3E5AB"
      },
    },
  },
  plugins: [],
}