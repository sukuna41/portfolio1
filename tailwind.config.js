/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "39px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
      secondary: {
        src: "/fonts/SAOUITT-Regular",
      },
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#00ff00",
          hover: "#00e187",
          sao: "#fefefe",
          neon: "#00eaff",
          cyan: "#00c2c7",
          emerald: "#00ff90",
          danger: "#ff3c3c",
          ungu: "#6c63ff",
          baja: "#cfd8dc",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-acordion-content-height" },
        },

        "accordion-up": {
          from: { height: "var(--radix-acordion-content-height" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
