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
        ecmaVersion: "latest",
        sourceType: "module",

        // typescript-eslint specific options
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: true,
      },

      plugins: ["@typescript-eslint"],

      extends: [
        "plugin:@typescript-eslint/eslint-recommended", // turns off rules that are useless in TypeScript
        "plugin:import/typescript",

        "./plugins/typescript-static",
        process.env.CI ? "./plugins/typescript-types" : null, // run slower rules only in CI
      ].filter(Boolean),

      rules: {
        "node/no-unsupported-features/es-syntax": "off",

        // Disable unnecessary "import" rules
        // https://typescript-eslint.io/docs/linting/troubleshooting/#eslint-plugin-import
        "import/named": "off",
        "import/namespace": "off",
        "import/default": "off",
        "import/no-named-as-default-member": "off",
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
