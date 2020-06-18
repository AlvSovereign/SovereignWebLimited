module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
  },
  theme: {
    extend: {},
    colors: {
      black: "#000",
      gold: "#ffc001",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Geomanist", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
}
