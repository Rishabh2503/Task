/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  rules: {
    // ...
    quotes: ["error", "single"], // or 'double' if you prefer
    // ...
  },
};
