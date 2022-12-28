module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/Hero/hero-image.png')",
        "dots-pattern": "url('/images/Usecase1/use_case_dots_bg_1920_270.svg')",
        "merit-bg": "url('/images/Merit/new-website-images-bcore.png')",
        "yamashita": "url('/images/Usecase1/yamashita-top-1.png')",
        "ewc": "url('/images/Usecase2/office_image_blur.png')",
        "tokyu": "url('/images/Usecase3/tokyu_top.png')",
      },
      backgroundColor: {
        primary: "#8CD278",
        secondary: "#F1F2F0",
      },
      fontFamily: {
        ud: ["BIZ UDPGothic"],
        noto: ["Noto Sans JP"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
