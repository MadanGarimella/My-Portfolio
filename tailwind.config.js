/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // important for theme toggle
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",   // Indigo
        secondary: "#06B6D4", // Cyan
        darkbg: "#0B0F19",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}