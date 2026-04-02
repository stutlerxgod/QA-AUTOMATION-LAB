import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

Given('I launch the Automation Exercise site', async function (this: CustomWorld) {
    await this.page.goto(process.env.BASE_URL!)
})

Then('I should see the home page', async function (this: CustomWorld) {
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}`)
    await expect(this.page.locator('img[alt="Website for automation practice"]')).toBeVisible({ timeout: 10000 })
})