/* eslint-disable node/no-unpublished-require */
const findRules = require("eslint-find-rules");
const logger = require("@darekkay/logger");

const eslintConfigs = ["internals/config-all.js"];

process.env.CI = "true"; // include rules that are only executed in CI environment
process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED = "true"; // exclude deprecated prettier rules

let successful = true;

eslintConfigs.forEach((eslintConfigPath) => {
  logger.info(`Evaluating rules for: ${eslintConfigPath}`);
  const rules = findRules(eslintConfigPath);

  // Find new rules that are not yet explicitly used
  const newRules = rules.getUnusedRules();
  if (newRules.length > 0) {
    successful = false;
    logger.error(`New rules available:`, newRules);
  } else {
    logger.success("No new rules available.");
  }

  // Find deprecated rules
  const deprecatedRules = rules.getDeprecatedRules();
  if (deprecatedRules.length > 0) {
    successful = false;
    logger.error(`Deprecated rules:`, deprecatedRules);
  } else {
    logger.success("No deprecated rules.");
  }

  // Find active rules that do not exist (anymore)
  const availableRules = rules.getAllAvailableRules();
  const currentActiveRules = Object.entries(
    rules.getCurrentRulesDetailed()
  ).reduce((accumulator, [rule, ruleConfig]) => {
    if (ruleConfig[0] !== "off" && ruleConfig[0] !== 0) {
      accumulator.push(rule);
    }
    return accumulator;
  }, []);
  const removedRules = currentActiveRules.filter(
    (rule) => !availableRules.includes(rule)
  );
  if (removedRules.length > 0) {
    successful = false;
    logger.error(`Unknown or removed rules:`, removedRules);
  } else {
    logger.success("No unknown or removed rules.");
  }
});

if (!successful) {
  process.exit(1);
}
