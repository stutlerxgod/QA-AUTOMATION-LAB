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
        if (i < productsCount - 1) {
            await this.page.click('button.close-modal')
        } else {
            await this.page.locator('.modal-body a:has-text("View Cart")').click()
        }
    }
})

Then('the cart should contain the searched products', async function (this: CustomWorld) {
    const rows = this.page.locator('#cart_info_table tbody tr')
    const count = await rows.count()
    expect(count).toBeGreaterThan(0)
    await expect(rows.first()).toBeVisible({ timeout: 10000 })
})
