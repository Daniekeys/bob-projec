/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        secondary: "#464646",
        primary: "#38b000",
        customBlack: "#1D1D1D",
        ash: "#333",
        grey2: "#4F4F4F",
      },
    },
  },
  plugins: [],
};
