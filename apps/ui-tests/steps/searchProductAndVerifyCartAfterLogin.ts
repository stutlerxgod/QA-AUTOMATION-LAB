import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

When('I add all searched products to cart', async function (this: CustomWorld) {
    const products = this.page.locator('.features_items .product-image-wrapper')
    const productsCount = 3

    for (let i = 0; i < productsCount; i++) {
        const product = products.nth(i)
        await product.hover()
        const overlay = this.page.locator('.product-overlay').nth(i)
        await expect(overlay).toBeVisible({ timeout: 10000 })
        await overlay.locator('.fa-shopping-cart').click()
        await this.page.click('button.close-modal')
    }
})

Then('the cart should contain the searched products', async function (this: CustomWorld) {
    const count = await this.cart.cartItems.count()
    expect(count).toBeGreaterThan(0)
    await expect(this.cart.cartItems.first()).toBeVisible({ timeout: 10000 })
})
