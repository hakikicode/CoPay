module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan: { A400: "#12e1ff", A200: "#41ffff" },
        blue_gray: {
          100: "#d3d3d3",
          800: "#245756",
          900: "#333333",
          "100_01": "#d2d2d2",
          "900_02": "#131b42",
          "900_01": "#1d4645",
          "900_9a": "#102f2e9a",
          "900_7f": "#3333337f",
        },
        gray: {
          100: "#f2f2f2",
          200: "#efefef",
          300: "#dadada",
          700: "#5e5e5e",
          800: "#3e3e3e",
          900: "#0b2322",
          "900_99": "#102e2d99",
          "900_01": "#0c2323",
        },
        red: { 100: "#f1d7c8", "100_01": "#f1d7c7", A700: "#fa0a0a" },
        black: {
          900: "#000000",
          "900_0a": "#0000000a",
          "900_19": "#00000019",
          "900_59": "#00000059",
        },
        deep_orange: { 100: "#e8c5b0" },
        white: { A700_80: "#ffffff80", A700: "#ffffff" },
        orange: { 50: "#fff2e6" },
      },
      fontFamily: { commissioner: "Commissioner", rubik: "Rubik" },
      boxShadow: {
        bs: "0px 24px  48px 0px #0000000a",
        bs2: "68px 38px  80px 0px #00000019",
        bs1: "50px 50px  100px 0px #00000059",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
