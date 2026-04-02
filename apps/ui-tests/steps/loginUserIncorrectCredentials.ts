import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { INVALID_LOGIN } from '../fixtures/testData'
import type { CustomWorld } from '../hooks/world'


When('I click on Login', async function (this: CustomWorld) {
    await this.page.click('a[href="/login"]')
})

Then('I should see Login to your account', async function (this: CustomWorld) {
    await expect(this.page.locator('h2:has-text("Login to your account")')).toBeVisible({ timeout: 10000 })
})

When('I enter incorrect email and password', async function (this: CustomWorld) {
    await this.page.fill('input[data-qa="login-email"]', INVALID_LOGIN.email)
    await this.page.fill('input[data-qa="login-password"]', INVALID_LOGIN.password)
})

When('I click the login button', async function (this: CustomWorld) {
    await this.page.click('button[data-qa="login-button"]')
})

Then('I should see error Your email or password is incorrect', async function (this: CustomWorld) {
    await expect(this.page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible({ timeout: 10000 })
})
