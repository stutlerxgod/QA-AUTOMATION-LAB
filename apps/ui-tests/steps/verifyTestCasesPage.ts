import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

When('I click on Test Cases', async function () {
    await this.page.click('a[href="/test_cases"]')
})

Then('I should be on the test cases page', async function () {
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}/test_cases`)
    await expect(this.page.locator('b:has-text("Test Cases")')).toBeVisible({ timeout: 10000 })
})
