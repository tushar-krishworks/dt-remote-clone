/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#006FFD",
          2: "#FE7A36",
        },
        g: {
          1: "#71727A",
          2: "#8696BB",
          3: "#EAF2FF",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
