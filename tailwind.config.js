/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primer-bg": "#E9E5D7",
        "primer-contrast": "#070200",
        "primer-accent": "#FE5B12",
      },
    },
  },
  plugins: [],
};
