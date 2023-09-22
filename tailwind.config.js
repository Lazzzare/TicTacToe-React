/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        LightBlue: "#31C3BD",
        LightBlueHover: "#65E9E4",
        LightYellow: "#F2B137",
        LightYellowHover: "#FFC860",
        DarkNavy: "#1A2A33",
        SemiDarkNavy: "#1F3641",
        Silver: "#A8BFC9",
        SilverHover: "#DBE8ED",
      },
    },
  },
  plugins: [],
};
