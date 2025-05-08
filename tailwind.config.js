/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e91e63", // Pink
        secondary: "#4caf50", // Green
        accent: "#ff9800", // Orange
      },
    },
  },
  plugins: [],
};
