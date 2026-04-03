import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { INVALID_LOGIN } from '../fixtures/testData'
import type { CustomWorld } from '../hooks/world'

When('I click on Login', async function (this: CustomWorld) {
    await this.home.loginLink.click()
})

Then('I should see Login to your account', async function (this: CustomWorld) {
    await expect(this.loginPage.loginHeading).toBeVisible({ timeout: 10000 })
})

When('I enter incorrect email and password', async function (this: CustomWorld) {
    await this.loginPage.loginEmailInput.fill(INVALID_LOGIN.email)
    await this.loginPage.loginPasswordInput.fill(INVALID_LOGIN.password)
})

When('I click the login button', async function (this: CustomWorld) {
    await this.loginPage.loginButton.click()
})

Then('I should see error Your email or password is incorrect', async function (this: CustomWorld) {
    await expect(this.loginPage.loginError).toBeVisible({ timeout: 10000 })
})
