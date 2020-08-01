/* eslint-disable node/no-unpublished-require */
const findRules = require("eslint-find-rules");
const logger = require("@darekkay/logger");

const eslintConfigs = [
  "nodejs.js",
  "react.js",
  "internals/typescript-node.js",
  "internals/typescript-react.js",
];

process.env.CI = "true"; // include rules that are only executed in CI environment

let newRulesAvailable = false;

eslintConfigs.forEach((eslintConfigPath) => {
  logger.info(`Finding new rules for: ${eslintConfigPath}`);
  const newRulesAvailableForConfig = findRules(
    eslintConfigPath
  ).getUnusedRules();

  if (newRulesAvailableForConfig.length > 0) {
    newRulesAvailable = true;
    logger.warn(`New rules available:`, newRulesAvailableForConfig);
  } else {
    logger.success("No new rules available.");
  }
});

if (newRulesAvailable) {
  process.exit(1);
}
