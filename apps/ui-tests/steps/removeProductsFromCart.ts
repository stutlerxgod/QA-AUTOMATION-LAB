import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

When('I remove the first product from the cart', async function (this: CustomWorld) {
    await this.cart.cartItems.first().locator('a.cart_quantity_delete').click()
})

Then('the product should be removed from the cart', async function (this: CustomWorld) {
    await expect(this.cart.cartItems).toHaveCount(0)
})
