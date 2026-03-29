import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

When('I click the scroll up arrow', async function () {
    await this.page.click('#scrollUp')
})

Then('I should see the homepage hero text', async function () {
    await expect(this.page.locator('.carousel-inner .active h2:has-text("Full-Fledged practice website for Automation Engineers")')).toBeVisible({ timeout: 10000 })
})
