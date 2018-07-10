module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: [
    "react",
    "jsx-a11y",
    "import"
  ],
  rules: {
    'react/forbid-prop-types': 0
  },
  globals: {
    navigator: true,
    document: true,
  }
}