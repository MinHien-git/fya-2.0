/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#476FD4",
      secondary: "#FFCB37",
      text: "#5A5A61",
      tertiary: "#EDF2FD",
      light_yellow: "#FDFBED",
      light_blue: "#9CCAFF",
      dark_blue: "#13366F",
      light_gray: "#F9FBFF",
      border: "#2F2E41",
    },
    extend: {
      aspectRatio: {
        "5/6": "5 / 6",
        "4/3": "4 / 3",
        "4/1": "4 / 1",
      },
      fontFamily: {
        title: ["Montserrat"],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
