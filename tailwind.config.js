/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ultra-hero-section': "url('/assets/images/ultra-wide-bg.jpg')",
        'large-hero-section': "url('/assets/images/large-bg.jpg')",
        'medium-hero-section': "url('/assets/images/medium-bg.jpg')",
        'small-hero-section': "url('/assets/images/small-bg.jpg')",
      },
      colors: {
        neutral: {
          50: "#E8E7E9",
          100: "#D1CFD3",
          200: "#BAB7BE",
          300: "#A39FA8",
          400: "#8B8792",
          500: "#746F7C",
          600: "#5D5767",
          700: "#464051",
          800: "#2F283B",
          900: "#181025",
        },
        tinted: {
          50: "#EEEBF1",
          100: "#DCD8E4",
          200: "#CBC4D6",
          300: "#BAB1C8",
          400: "#A89DBA",
          500: "#978AAD",
          600: "#5D5767",
          700: "#523B76",
          800: "#634F84",
          900: "#523B76",
        },
        primary: {
          50: "#DDD4EC",
          300: "#BCA9DA",
          500: "#9A7EC7",
          700: "#7953B5",
          900: "#573195",
          main: "#7953B5",
          dark: "#573195",
        },
        secondary: {
          50: "#FFF3CD",
          300: "#FEE79B",
          500: "#FDDC6A",
          700: "#FDD038",
          900: "#DBB01E",
          main: "#FDD038",
          dark: "#DBB01E",
        },
        success: {
          50: "#E5FCF2",
          300: "#21ECAC",
          500: "#03B76F",
          700: "#007142",
          900: "#00422A",
        },
        warning: {
          50: "#FFFBEB",
          300: "#FCD34D",
          500: "#F59E0B",
          700: "#B45309",
          900: "#78350F",
        },
        error: {
          50: "#FFEDED",
          300: "#FF8A8A",
          500: "#F05656",
          700: "#D32D2D",
          900: "#830F0F",
        },
      },
      boxShadow: {
        primary: "1px 2px 15px 1px rgba(0, 0, 0, 0.05)",
        secondary: "3px 2px 15px 2px rgba(0, 0, 0, 0.07)",
      },
      lineHeight: {
        smallHead: "1.149230769230769",
        largeHead: "1.030508474576271",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    }),
  ],
};
