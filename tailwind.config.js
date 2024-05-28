/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        palette: {
          primary: "#3A0CA3",
          secondary: {
            100: "#EAE3FF",
            200: "#DBDBFE",
          },
          accent: "#4200FF",
          gray: {
            100: "#EEEEEE",
            200: "#C3C2C2",
            300: "#9B9B9B",
            400: "#6D6A75",
            500: "#666",
            600: "#595959",
            700: "#3E4958",
            800: "#444444",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
