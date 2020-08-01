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
    process.env.CI ? "./plugins/typescript-types" : null, // run slower rules only in CI

    "prettier/@typescript-eslint",
  ].filter(Boolean),
};
