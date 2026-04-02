import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

When('I remove the first product from the cart', async function (this: CustomWorld) {
    await this.page.click('#cart_info_table tbody tr:first-child a.cart_quantity_delete')
})

Then('the product should be removed from the cart', async function (this: CustomWorld) {
    const rows = this.page.locator('#cart_info_table tbody tr')
    await expect(rows).toHaveCount(0)
})
