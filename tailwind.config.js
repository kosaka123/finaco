module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "scale-up": {
          "0%": {
            opacity: "0",
            scale: "0",
          },
          "100%": {
            opacity: "1",
            scale: "1",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "scale-up": "scale-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
