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
        "primer-contrast-2": "#111",
        "primer-border": "#c8c2b8",
      },
    },
  },
  plugins: [],
};
