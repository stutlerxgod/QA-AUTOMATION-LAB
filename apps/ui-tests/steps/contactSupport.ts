import { Given, When, Then} from '@cucumber/cucumber'
import { expect, Dialog } from '@playwright/test'
import { TEST_DATA, TEST_USER } from '../fixtures/testData'

Given('I open the support page', async function () {
    await this.page.goto(`${process.env.BASE_URL}/contact_us`)
})

When('I fill the support form with valid data', async function () {
    await this.page.fill('input[data-qa="name"]', TEST_USER.name)
    await this.page.fill('input[data-qa="email"]', `testEmail-123@gmail.com`)
    await this.page.fill('input[data-qa="subject"]', 'Support Request')
    await this.page.fill('textarea[data-qa="message"]', TEST_DATA.message)
})

When('I submit the support form', { timeout: 10000 }, async function () {
    this.page.on('dialog', (dialog: Dialog) => dialog.accept())
    await this.page.locator('.contact-form .submit_form').click({ force: true })
})

Then('I should see a success message', async function () {
    await expect(this.page.locator('#contact-page .alert-success')).toBeVisible()
    await expect(this.page.locator('#contact-page .alert-success')).toContainText('Success')
})
