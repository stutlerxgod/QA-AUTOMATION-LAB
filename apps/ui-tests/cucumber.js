module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'apps/ui-tests/hooks/**/*.ts',
      'apps/ui-tests/steps/**/*.ts',
    ],
    paths: ['apps/ui-tests/features/**/*.feature'],
    format: ['progress-bar', 'html:apps/ui-tests/reports/cucumber/cucumber-report.html'],
    parallel: 1,
    worldParameters: {
      headless: true,
      slowMo: 0,
    },
  },
};
