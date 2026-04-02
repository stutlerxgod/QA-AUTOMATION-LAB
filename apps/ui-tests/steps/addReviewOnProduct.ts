import { Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { TEST_DATA, TEST_USER } from '../fixtures/testData'
import { getUniqueEmail } from './registerUser'

Then('I should see Write Your Review', async function () {
    await expect(this.page.locator('a:has-text("Write Your Review")')).toBeVisible({ timeout: 10000 })
})

When('I fill in the review form and submit', async function () {
    const email = getUniqueEmail()
    await this.page.fill('input#name', TEST_USER.name)
    await this.page.fill('input#email', email)
    await this.page.fill('textarea#review', TEST_DATA.message)
    await this.page.click('button#button-review')
})

Then('I should see Thank you for your review', async function () {
    await expect(this.page.locator('span:has-text("Thank you for your review.")')).toBeVisible({ timeout: 10000 })
})
