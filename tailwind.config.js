/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "DM-Sans": ["DM Sans", "sans-serif"],
      },
      colors: {
        lightPurple: "#dacffc",
        darkPurple: "#7650dc",
        ligthYellow: "#f9eee1",
        darkYellow: "#ffcb6b",
        white: "#ffffff",
        black: "#121212",
        grey: "#efefef",
      },
    },
  },
  plugins: [],
};
