module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/Hero/top-image2.svg')",
      },
      backgroundColor: {
        'primary': '#8CD278',
        'secondary':'#F1F2F0'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
