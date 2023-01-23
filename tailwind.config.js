/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      fontSize: [],
      colors: {
        secondary: "#677487",
      },
    },
  },
  plugins: [],
};
