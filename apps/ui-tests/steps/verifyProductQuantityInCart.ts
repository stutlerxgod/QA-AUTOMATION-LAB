import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

When('I click View Product for any product', async function (this: CustomWorld) {
    await this.page.locator('a:has-text("View Product")').first().click()
})

When('I set the product quantity to 4', async function (this: CustomWorld) {
    await this.page.fill('input#quantity', '4')
})

When('I add the product to cart', async function (this: CustomWorld) {
    await this.page.click('button:has-text("Add to cart")')
})

Then('the product should be in the cart with quantity 4', async function (this: CustomWorld) {
    const row = this.page.locator('#cart_info_table tbody tr').first()
    await expect(row.locator('.cart_quantity button')).toContainText('4')
})
