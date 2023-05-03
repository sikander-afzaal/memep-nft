const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Press Start 2P", ...defaultTheme.fontFamily.sans],
        fifaks: "fifaks",
      },
      boxShadow: { btn: "0px 4px 0px #11111A, inset 0px 6px 0px #FFFFFF" },
      colors: {
        primaryYellow: "#FFEE05",
        primaryRed: "#C91414",
        dark: "#030714",
        secondaryBlack: "#11111A",
        lightBlue: "#0096C4",
        aspidBlue: "#0287FF",
        success: "#00CF53",
        fail: "#FF0000",
      },
      backgroundImage: {
        sectionBg: "url('/section-bg.png')",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(400px,1fr))",
      },
    },
  },
  plugins: [],
};
