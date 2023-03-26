/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        vsm: "400px",
      },

      colors: {
        primary: {
          50: "#F3EEFF",
          100: "##F3EEFF",
          200: "#c3b4fc",
          300: "#9e8bf9",
          400: "#7a62f6",
          500: "#5749f3",
          600: "#4a3eeb",
          700: "#3d34e3",
          800: "#3029db",
          900: "#231ed3",
          1000: "#1613cb",
        },
      },

      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        display: ["Raleway", ...defaultTheme.fontFamily.sans],
        DistantGalaxy: ["DistantGalaxy", ...defaultTheme.fontFamily.sans],
      },

      keyframes: {
        floatKey: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(1rem)",
          },
        },
        "100%": {
          transform: "translateY(0)",
        },
      },

      animation: {
        floating: "floatKey 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
