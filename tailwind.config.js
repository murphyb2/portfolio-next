module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      dspBlue: "var(--blue)",
      dspDarkBlue: "var(--dark-blue)",
      dspLightBlue: "var(--light-blue)",
      dspWhite: "var(--white)",
      dspRed: "var(--red)",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      dspBlue: "var(--blue)",
      dspDarkBlue: "var(--dark-blue)",
      dspLightBlue: "var(--light-blue)",
      dspWhite: "var(--white)",
      dspRed: "var(--red)",
    }),
    fontFamily: {
      body: ["futura-pt"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
