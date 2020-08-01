module.exports = {
  extends: ["../react"],

  overrides: [
    {
      extends: ["../typescript"],
      files: ["**/*.ts", "**/*.tsx"],
    },
  ],
};
