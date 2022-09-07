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
    spacing: {
      0: "0px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "36px",
      "3xl": "48px",
      "4xl": "60px",
      "5xl": "90px",
    },
    extend: {
      spacing: {
        "header-lg": "var(--header-height-expanded)",
        "header-md": "var(--header-height-minimized)",
      },
      colors: {
        "slate-dark": {
          DEFAULT: "#090e19",
          lighter: "#11192e",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
