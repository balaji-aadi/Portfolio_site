/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        Montserrat: "Montserrat",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
    screens: {
      "2xl": { max: "2500px" },
      // => @media(max-width : 1535px);

      xl: { max: "1535px" },
      // => @media(max-width : 1279px);

      lg: { max: "1024px" },
      // => @media(max-width : 1024px);

      md: { max: "767px" },
      // => @media(max-width : 767px);

      sm: { max: "639px" },
      // => @media(max-width : 639px);

      xs: { max: "480px" },
      //  => @media(max-width : 480px);
    },
  },
  plugins: [],
};
