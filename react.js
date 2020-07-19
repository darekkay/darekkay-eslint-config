/** Configuration for React projects */
module.exports = {
  extends: [
    "react-app",
    "plugin:jest-dom/recommended",
    "./base",
    "./prettier",
    "./testing-library",
  ],

  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },

  plugins: ["import", "jsx-a11y", "react", "react-hooks", "jest-dom"],

  root: true,

  rules: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
      },
    ],

    "react/jsx-curly-brace-presence": "error",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/external-module-folders": ["node_modules"],
    "import/resolver": {
      node: {
        moduleDirectory: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
