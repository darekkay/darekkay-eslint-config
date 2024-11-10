/* eslint-disable no-console,node/no-missing-require */
const { rules: allRules } = require("@typescript-eslint/eslint-plugin");

const { rules: staticRules } = require("../plugins/typescript-static");
const { rules: typesRules } = require("../plugins/typescript-types");

const filterTsRules = (rule) => rule.startsWith("@typescript-eslint/");
const dropPrefix = (rule) => rule.substring("@typescript-eslint/".length);

const staticRulesNames = Object.keys(staticRules)
  .filter((ruleName) => filterTsRules(ruleName))
  .map((ruleName) => dropPrefix(ruleName));

const typesRulesNames = Object.keys(typesRules)
  .filter((ruleName) => filterTsRules(ruleName))
  .map((ruleName) => dropPrefix(ruleName));

staticRulesNames.forEach((ruleName) => {
  if (
    allRules[ruleName] &&
    allRules[ruleName].meta.docs.requiresTypeChecking === true
  ) {
    console.error(
      `Rule ${ruleName} is defined in static configuration, but it requires type information.`,
    );
  }
});

typesRulesNames.forEach((ruleName) => {
  if (
    allRules[ruleName] &&
    !allRules[ruleName].meta.docs.requiresTypeChecking
  ) {
    console.error(
      `Rule ${ruleName} is defined in types configuration, but it doesn't require type information.`,
    );
  }
});
