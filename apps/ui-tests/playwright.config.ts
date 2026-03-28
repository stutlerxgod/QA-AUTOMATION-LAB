import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'steps',
  outputDir: 'reports/playwright/data',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : 1,

  expect: {
    timeout: 5000,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        viewport: { width: 1280, height: 720 },
        screenshot: 'off',
        video: 'off',
        trace: 'off',
      },
    },
  ],

  reporter: [
    ['html', { outputFolder: 'reports/playwright/html', open: 'never' }],
  ],
});
