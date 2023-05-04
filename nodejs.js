const {
  IGNORE_PATTERNS,
  FILE_PATTERN_TESTING,
  FILE_PATTERN_INTERNALS,
  FILE_PATTERN_CONFIG,
} = require("./utils");

/**
 * Configuration for Node (non-browser) projects
 * */
module.exports = {
  extends: [
    "./base",

    "./plugins/import",
    "./plugins/node",
    "./plugins/unicorn",

    "prettier",
  ],

  env: {
    browser: false,
    es2020: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: "latest",
  },

  root: true,

  ignorePatterns: IGNORE_PATTERNS,

  overrides: [
    {
      // Enable testing rules only for test files
      files: FILE_PATTERN_TESTING,
      extends: ["./plugins/jest"],
    },
    {
      // Disable rules for non-production files
      files: FILE_PATTERN_INTERNALS,
      rules: {
        "node/no-unpublished-require": "off",
      },
    },
    {
      // Disable rules for configuration files
      files: FILE_PATTERN_CONFIG,
      rules: {
        "node/no-unpublished-require": "off",
      },
    },
  ],
};
