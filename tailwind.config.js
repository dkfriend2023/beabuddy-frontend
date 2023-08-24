/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "250px", max: "350px" },
      // => @media (min-width: 640px) { ... }

      md: { min: "350px", max: "500px" },
      // => @media (min-width: 768px) { ... }

      lg: { min: "500px", max: "800px" },
      // => @media (min-width: 1024px) { ... }

      xl: { min: "800px", max: "1000px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": { min: "1000px" },
      // => @media (min-width: 1536px) { ... }
    },
    height: {
      screen: "100dvh",
    },
  },
  plugins: [],
};
