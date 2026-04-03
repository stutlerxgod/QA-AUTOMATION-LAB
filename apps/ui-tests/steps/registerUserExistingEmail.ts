import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { TEST_USER } from '../fixtures/testData'
import type { CustomWorld } from '../hooks/world'

When('I enter name and already registered email', async function (this: CustomWorld) {
    await this.loginPage.signupNameInput.fill(TEST_USER.name)
    await this.loginPage.signupEmailInput.fill(this.loginEmail!)
})

When('I click the Signup button', async function (this: CustomWorld) {
    await this.loginPage.signupButton.click()
})

Then('I should see error Email Address already exist!', async function (this: CustomWorld) {
    await expect(this.page.locator('p:has-text("Email Address already exist!")')).toBeVisible({ timeout: 10000 })
})
