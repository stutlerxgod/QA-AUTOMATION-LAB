import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { TEST_USER } from '../fixtures/testData'

When('I enter name and already registered email', async function () {
    await this.page.fill('input[data-qa="signup-name"]', TEST_USER.name)
    await this.page.fill('input[data-qa="signup-email"]', this.loginEmail)
})

When('I click the Signup button', async function () {
    await this.page.click('button[data-qa="signup-button"]')
})

Then('I should see error Email Address already exist!', async function () {
    await expect(this.page.locator('p:has-text("Email Address already exist!")')).toBeVisible({ timeout: 10000 })
})
