import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

When('I click the scroll up arrow', async function (this: CustomWorld) {
    await this.home.scrollUpButton.click()
})

Then('I should see the homepage hero text', async function (this: CustomWorld) {
    await expect(this.home.heroText).toBeVisible({ timeout: 10000 })
})
