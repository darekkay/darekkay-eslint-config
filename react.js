/**
 * Configuration for React projects
 * */
module.exports = {
  extends: [
    "./base",

    "./plugins/unicorn",
    "./plugins/import",
    "./plugins/jest",
    "./plugins/jest-dom",
    "./plugins/react",
    "./plugins/testing-library",

    "./plugins/prettier",
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

  root: true,

  settings: {
    react: {
      version: "detect",
    },
    "import/extensions": [".js", ".jsx"],
  },

  rules: {
    "import/no-nodejs-modules": "error",
  },
};
