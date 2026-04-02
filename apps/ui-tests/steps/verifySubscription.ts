import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { getUniqueEmail } from './registerUser'

When('I scroll down to the footer', async function () {
    await this.page.locator('footer').scrollIntoViewIfNeeded()
})

Then('I should see SUBSCRIPTION', async function () {
    await expect(this.page.locator('footer h2:has-text("Subscription")')).toBeVisible({ timeout: 10000 })
})

When('I enter email and click the subscribe button', async function () {
    const email = getUniqueEmail()
    await this.page.fill('input#susbscribe_email', email)
    await this.page.click('button#subscribe')
})

Then('I should see subscription success message {string}', async function (message: string) {
    await expect(this.page.locator('div#success-subscribe')).toBeVisible({ timeout: 10000 })
    await expect(this.page.locator('div#success-subscribe')).toContainText(message)
})
