/**
 * Configuration for TypeScript projects
 * */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    // typescript-eslint specific options
    warnOnUnsupportedTypeScriptVersion: true,
  },

  plugins: ["@typescript-eslint"],

  extends: [
    "plugin:@typescript-eslint/eslint-recommended", // turns off rules that are useless in TypeScript
    "plugin:import/typescript",

    "./plugins/typescript-static",
    // "./plugins/typescript-types",

    "prettier/@typescript-eslint",
  ],
};
