module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        devBlue: "var(--blue)",
        devDarkBlue: "var(--dark-blue)",
        devLightBlue: "var(--light-blue)",
        devWhite: "var(--white)",
        devRed: "var(--red)",
      },
    },
    fontFamily: {
      body: ["futura-pt"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
