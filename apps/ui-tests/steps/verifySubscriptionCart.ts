import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

When('I click on Cart', async function () {
    await this.page.click('a[href="/view_cart"]')
})

Then('I should be on the cart page', async function () {
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}/view_cart`)
})
