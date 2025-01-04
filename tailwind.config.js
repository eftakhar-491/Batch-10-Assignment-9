/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui', ...],
      HA: ["Homemade Apple"],
      RR: ["Roboto"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
