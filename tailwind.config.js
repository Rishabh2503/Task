/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  rules: {
    // ...
    'quotes': ['error', 'single'], // or 'double' if you prefer
    // ...
  },
};
