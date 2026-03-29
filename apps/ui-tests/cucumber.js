module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'apps/ui-tests/hooks/**/*.ts',
      'apps/ui-tests/steps/**/*.ts',
    ],
    paths: ['apps/ui-tests/features/**/*.feature'],
    format: ['progress', 'html:apps/ui-tests/reports/cucumber/cucumber-report.html'],
    parallel: 4,
    worldParameters: {
      headless: true,
      slowMo: 0,
    },
  },
};
