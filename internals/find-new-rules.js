/* eslint-disable no-console */
const findRules = require("eslint-find-rules");

const eslintConfigs = ["internals/config-all.js"];

process.env.CI = "true"; // include rules that are only executed in CI environment
process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED = "true"; // exclude deprecated prettier rules

let successful = true;

eslintConfigs.forEach(async (eslintConfigPath) => {
  console.info(`Evaluating rules for: ${eslintConfigPath}`);
  const rules = await findRules(eslintConfigPath);

  // Find new rules that are not yet explicitly used
  const newRules = rules.getUnusedRules();
  if (newRules.length > 0) {
    successful = false;
    console.error(`New rules available:`, newRules);
  } else {
    console.info("✓ No new rules available.");
  }

  // Find deprecated rules
  const deprecatedRules = rules.getDeprecatedRules();
  if (deprecatedRules.length > 0) {
    successful = false;
    console.error(`Deprecated rules:`, deprecatedRules);
  } else {
    console.info("✓ No deprecated rules.");
  }

  // Find active rules that do not exist (anymore)
  const availableRules = rules.getAllAvailableRules();
  const currentActiveRules = Object.entries(
    rules.getCurrentRulesDetailed(),
  ).reduce((accumulator, [rule, ruleConfig]) => {
    if (ruleConfig[0] !== "off" && ruleConfig[0] !== 0) {
      accumulator.push(rule);
    }
    return accumulator;
  }, []);
  const removedRules = currentActiveRules.filter(
    (rule) => !availableRules.includes(rule),
  );
  if (removedRules.length > 0) {
    successful = false;
    console.error(`Unknown or removed rules:`, removedRules);
  } else {
    console.info("✓ No unknown or removed rules.");
  }
});

if (!successful) {
  process.exit(1);
}
