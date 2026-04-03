import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

When('I scroll to the bottom of the page', async function (this: CustomWorld) {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
})

Then('I should see RECOMMENDED ITEMS', async function (this: CustomWorld) {
    await expect(this.page.locator('.recommended_items')).toBeVisible({ timeout: 10000 })
    await expect(this.page.locator('.recommended_items h2:has-text("recommended items")')).toBeVisible()
})

When('I add the first recommended item to cart', async function (this: CustomWorld) {
    this.recommendedProductName = await this.page.locator('.recommended_items .productinfo p').first().textContent()
    await this.page.locator('.recommended_items .add-to-cart').first().click()
})

Then('the recommended product should be displayed in cart', async function (this: CustomWorld) {
    await expect(this.cart.cartItems.first()).toBeVisible({ timeout: 10000 })
    await expect(this.cart.cartItems.first()).toContainText(this.recommendedProductName!)
})
