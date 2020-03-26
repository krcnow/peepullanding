import Typography from "typography";

const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Avenir Next", "sans-serif"],
  bodyFontFamily: ["Avenir Next", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;
