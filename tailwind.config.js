/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#476FD4",
      secondary: "#FFCB37",
      text: "#5A5A61",
      tertiary: "#EDF2FD",
    },
    extend: {
      aspectRatio: {
        "5/6": "5 / 6",
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};
