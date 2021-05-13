const { FILE_PATTERN_TYPESCRIPT, FILE_PATTERN_INTERNALS } = require("./utils");

/**
 * Configuration for TypeScript projects
 * */
module.exports = {
  overrides: [
    {
      files: FILE_PATTERN_TYPESCRIPT,

      parser: "@typescript-eslint/parser",

      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",

        // typescript-eslint specific options
        project: "./tsconfig.json",
        warnOnUnsupportedTypeScriptVersion: true,
      },

      plugins: ["@typescript-eslint"],

      extends: [
        "plugin:@typescript-eslint/eslint-recommended", // turns off rules that are useless in TypeScript
        "plugin:import/typescript",

        "./plugins/typescript-static",
        process.env.CI ? "./plugins/typescript-types" : null, // run slower rules only in CI

        "prettier",
      ].filter(Boolean),

      rules: {
        "node/no-unsupported-features/es-syntax": "off",
      },
    },
    {
      // Disable rules for non-production files
      files: FILE_PATTERN_INTERNALS,
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ],
};
