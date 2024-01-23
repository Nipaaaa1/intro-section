/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      backgroundImage: {
        heroDesktop: "url('/images/image-hero-desktop.png')",
      },
    },
  },
  plugins: [],
};
