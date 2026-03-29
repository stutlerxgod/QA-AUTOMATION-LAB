import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

When('I remove the first product from the cart', async function () {
    await this.page.click('#cart_info_table tbody tr:first-child a.cart_quantity_delete')
})

Then('the product should be removed from the cart', async function () {
    const rows = this.page.locator('#cart_info_table tbody tr')
    await expect(rows).toHaveCount(0)
})
