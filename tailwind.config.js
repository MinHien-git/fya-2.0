/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
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
      light_yellow_100: "#FAF1D7",
      sand: "#FBEFCD",
      border: "#2F2E41",
      blue: "#0071F2",
    },
    extend: {
      aspectRatio: {
        "5/6": "5 / 6",
        "4/3": "4 / 3",
        "4/1": "4 / 1",
      },
      translate: {
        200: "200%",
      },
      fontFamily: {
        title: ["DM Sans", ...defaultTheme.fontFamily.sans],
        header: ["DM Sans", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
});
