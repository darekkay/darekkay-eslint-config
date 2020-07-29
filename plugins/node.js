/**
 *
 * Rules for eslint-plugin-node
 * https://github.com/mysticatea/eslint-plugin-node#-rules
 *
 * */
module.exports = {
  plugins: ["node"],

  rules: {
    "node/callback-return": "error",
    "node/exports-style": "error",
    "node/file-extension-in-import": "off",
    "node/global-require": "off",
    "node/handle-callback-err": "off",
    "node/no-callback-literal": "off",
    "node/no-deprecated-api": "error",
    "node/no-exports-assign": "error",
    "node/no-extraneous-import": "off",
    "node/no-extraneous-require": "error",
    "node/no-missing-import": "off",
    "node/no-missing-require": "error",
    "node/no-mixed-requires": "off",
    "node/no-new-require": "error",
    "node/no-path-concat": "error",
    "node/no-process-env": "off",
    "node/no-process-exit": "off",
    "node/no-restricted-import": "off",
    "node/no-restricted-require": "off",
    "node/no-sync": "off",
    "node/no-unpublished-bin": "error",
    "node/no-unpublished-import": "off",
    "node/no-unpublished-require": "error",
    "node/no-unsupported-features/es-builtins": "error",
    "node/no-unsupported-features/es-syntax": "error",
    "node/no-unsupported-features/node-builtins": "error",
    "node/prefer-global/buffer": "off",
    "node/prefer-global/console": "off",
    "node/prefer-global/process": "off",
    "node/prefer-global/text-decoder": "off",
    "node/prefer-global/text-encoder": "off",
    "node/prefer-global/url": "off",
    "node/prefer-global/url-search-params": "off",
    "node/prefer-promises/dns": "off",
    "node/prefer-promises/fs": "off",
    "node/process-exit-as-throw": "error",
    "node/shebang": "error",
  },
};
