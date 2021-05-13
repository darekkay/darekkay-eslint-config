module.exports = {
  extends: [
    "../base.js",

    "../plugins/import.js",
    "../plugins/jest.js",
    "../plugins/jest-dom.js",
    "../plugins/node.js",
    "../plugins/react.js",
    "../plugins/testing-library.js",
    "../plugins/typescript-static.js",
    "../plugins/typescript-types.js",
    "../plugins/unicorn.js",

    "../plugins/prettier.js",
  ],

  plugins: ["@typescript-eslint"],
};
