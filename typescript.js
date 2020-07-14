/** Configuration for TypeScript projects */
module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    // typescript-eslint specific options
    warnOnUnsupportedTypeScriptVersion: true
  },

  plugins: ["@typescript-eslint"],

  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-ignore": "off",

    // disable duplicate rules:
    "no-array-constructor": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "after-used",
        ignoreRestSiblings: true
      }
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error"
  }
};
