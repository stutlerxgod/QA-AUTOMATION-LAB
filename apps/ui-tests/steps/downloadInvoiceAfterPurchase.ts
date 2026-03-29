import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

When('I download the invoice', async function () {
    const [download] = await Promise.all([
        this.page.waitForEvent('download'),
        this.page.click('a.btn:has-text("Download Invoice")'),
    ])
    this.download = download
})

Then('the invoice should be downloaded successfully', async function () {
    expect(this.download).toBeTruthy()
    expect(this.download.suggestedFilename()).toBeTruthy()
})

When('I click Continue after order', async function () {
    await this.page.click('a[data-qa="continue-button"]')
})
