module.exports = {
  env: {
    es6: true,
    browser: true
  },
  extends: ["plugin:flowtype/recommended", "standard", "standard-react"],
  parser: "babel-eslint",
  plugins: ["react", "flowtype"]
};
