const {
  IGNORE_PATTERNS,
  FILE_PATTERN_TESTING,
  FILE_PATTERN_INTERNALS,
  FILE_PATTERN_CONFIG,
} = require("./utils");

/**
 * Configuration for React projects
 * */
module.exports = {
  extends: [
    "./base",

    "./plugins/unicorn",
    "./plugins/import",
    "./plugins/react",

    "prettier",
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

  ignorePatterns: IGNORE_PATTERNS,

  settings: {
    react: {
      version: "detect",
    },
    "import/extensions": [".js", ".jsx"],
  },

  rules: {
    "import/no-nodejs-modules": "error",
  },

  overrides: [
    {
      // Enable testing rules only for test files
      files: FILE_PATTERN_TESTING,
      extends: [
        "./plugins/jest",
        "./plugins/jest-dom",
        "./plugins/testing-library",
      ],
    },
    {
      // Disable rules for non-production files
      files: FILE_PATTERN_INTERNALS,
      rules: {
        "import/no-nodejs-modules": "off",
      },
    },
    {
      // Disable rules for configuration files
      files: FILE_PATTERN_CONFIG,
      rules: {
        "import/no-nodejs-modules": "off",
      },
    },
  ],
};
