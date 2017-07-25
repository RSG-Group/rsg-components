module.exports = {
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": ["plugin:flowtype/recommended", "eslint-config-airbnb"],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "flowtype"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "after-used"
    }],
    // For global variable definitions.
    "no-var": "off",
    // For JSX in .js files.
    "react/jsx-filename-extension": "off",
    // For import issues with Meteor.
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off"
  }
};
