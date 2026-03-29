import * as path from 'path'
import { When, Then } from '@cucumber/cucumber'
import { expect, Dialog } from '@playwright/test'
import { TEST_DATA, TEST_USER } from '../fixtures/testData'

const UPLOAD_FILE = path.join(__dirname, '../fixtures/testFile.txt')

When('I click on Contact Us', async function () {
    await this.page.click('a[href="/contact_us"]')
})

Then('I should see GET IN TOUCH', async function () {
    await expect(this.page.locator('h2:has-text("Get In Touch")')).toBeVisible({ timeout: 10000 })
})

When('I fill in the contact form with name, email, subject and message', async function () {
    await this.page.fill('input[data-qa="name"]', TEST_USER.name)
    await this.page.fill('input[data-qa="email"]', 'testEmail-123@gmail.com')
    await this.page.fill('input[data-qa="subject"]', TEST_DATA.subject)
    await this.page.fill('textarea[data-qa="message"]', TEST_DATA.message)
})

When('I upload a file', async function () {
    await this.page.setInputFiles('input[name="upload_file"]', UPLOAD_FILE)
})

When('I click Submit', async function () {
    this.page.on('dialog', (dialog: Dialog) => dialog.accept())
    await this.page.click('input[data-qa="submit-button"]')
})

Then('I should see success message {string}', async function (message: string) {
    await expect(this.page.locator('.contact-form .alert-success')).toBeVisible({ timeout: 10000 })
    await expect(this.page.locator('.contact-form .alert-success')).toContainText(message)
})
