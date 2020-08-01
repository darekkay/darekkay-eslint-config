module.exports = {
  extends: ["../nodejs"],

  overrides: [
    {
      extends: ["../typescript"],
      files: ["**/*.ts", "**/*.tsx"],
    },
  ],
};
