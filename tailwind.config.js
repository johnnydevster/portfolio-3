module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "Helvetica", "sans-serif"],
      inter: ["Inter", "Helvetica", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      screens: {
        fbp: "1024px",
      },
      spacing: {
        "header-lg": "var(--header-height-expanded)",
        "header-md": "var(--header-height-minimized)",
      },
      colors: {
        "slate-dark": {
          DEFAULT: "#090e19",
          lighter: "#0a1121",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
