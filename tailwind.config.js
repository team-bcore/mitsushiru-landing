module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/Hero/top-image2.svg')",
        "dots-pattern": "url('/images/Usecase1/use_case_dots_bg_1920_270.svg')",
      },
      backgroundColor: {
        primary: "#8CD278",
        secondary: "#F1F2F0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
