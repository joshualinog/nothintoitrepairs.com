module.exports = {
  content: ["./src/**/*.{html,njk,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        lexendTera: ["Lexend Tera", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        taupe: "#4a4235",
        reseda: "#776e45",
        black: "#020100",
        khaki: "#b3ac9c",
        coyote: "#776654",
        aliceblue: "#f2f8fc",
      },
    },
  },
  plugins: [],
};
