import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

When('I download the invoice', async function (this: CustomWorld) {
    const [download] = await Promise.all([this.page.waitForEvent('download'), this.page.click('a.btn:has-text("Download Invoice")')])
    this.download = download
})

Then('the invoice should be downloaded successfully', async function (this: CustomWorld) {
    expect(this.download).toBeTruthy()
    expect(this.download!.suggestedFilename()).toBeTruthy()
})

When('I click Continue after order', async function (this: CustomWorld) {
    await this.page.click('a[data-qa="continue-button"]')
})
