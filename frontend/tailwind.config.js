module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["futura-pt-bold", "sans-serif"],
      body: ["futura-pt", "sans-serif"],
      sans: ["futura-pt"],
    },
    extend: {
      gridTemplateColumns: {
        footer: "10% auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
