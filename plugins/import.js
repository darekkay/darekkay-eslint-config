/**
 *
 * Rules for eslint-plugin-import
 * https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
 *
 * */
module.exports = {
  plugins: ["import"],

  settings: {
    "import/external-module-folders": ["node_modules"],
    "import/resolver": {
      node: {
        moduleDirectory: ["src"],
        extensions: [".js", ".jsx"],
      },
    },
  },

  rules: {
    "import/default": "off",
    "import/dynamic-import-chunkname": "off",
    "import/export": "error",
    "import/exports-last": "off",
    "import/extensions": "off",
    "import/first": "error",
    "import/group-exports": "off",
    "import/max-dependencies": "off",
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-anonymous-default-export": "off",
    "import/no-commonjs": "off",
    "import/no-cycle": "off",
    "import/no-default-export": "off",
    "import/no-deprecated": "error",
    "import/no-duplicates": "error",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "error",
    "import/no-internal-modules": "off",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-default": "error",
    "import/no-named-export": "off",
    "import/no-namespace": "off",
    "import/no-nodejs-modules": "off",
    "import/no-relative-parent-imports": "off",
    "import/no-restricted-paths": "off",
    "import/no-self-import": "error",
    "import/no-unassigned-import": "off",
    "import/no-unresolved": "error",
    "import/no-unused-modules": "off",
    "import/no-useless-path-segments": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/prefer-default-export": "off",
    "import/unambiguous": "off",

    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
      },
    ],
  },
};
