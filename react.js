/** Configuration for React projects */
module.exports = {
  extends: [
    "react-app",
    "plugin:jest-dom/recommended",
    "./base",
    "./prettier",
    "./testing-library"
  ],

  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },

  plugins: ["import", "jsx-a11y", "react", "react-hooks", "jest-dom"],

  root: true,

  rules: {
    "import/order": "error",

    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off"
  },

  settings: {
    react: {
      version: "detect"
    }
  }
};
