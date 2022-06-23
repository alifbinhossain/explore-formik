module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1267E4",
        secondary: "#FF8717",
        tertiary: "#ED1C3D",
        white_orange: "#F5F2EF",
        black: "#07031F",
      },
      fontFamily: {
        lora: ["Lora"],
        inter: ["Inter"],
      },
    },
  },
  variants: {},
  plugins: [],
};
