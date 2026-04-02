import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

When('I hover over the first product and add it to cart', async function (this: CustomWorld) {
    const firstProduct = this.page.locator('.features_items .product-image-wrapper').nth(0)
    this.product1Price = (await firstProduct.locator('.productinfo h2').textContent())?.trim()
    await firstProduct.hover()
    const firstProductOverlay = this.page.locator('.product-overlay').nth(0)
    await expect(firstProductOverlay).toBeVisible({ timeout: 10000 })
    await firstProductOverlay.locator('.fa-shopping-cart').click()
})

When('I click Continue Shopping', async function (this: CustomWorld) {
    await this.page.click('button.close-modal')
})

When('I hover over the second product and add it to cart', async function (this: CustomWorld) {
    const secondProduct = this.page.locator('.features_items .product-image-wrapper').nth(1)
    this.product2Price = (await secondProduct.locator('.productinfo h2').textContent())?.trim()
    await secondProduct.hover()
    const secondProductOverlay = this.page.locator('.product-overlay').nth(1)
    await expect(secondProductOverlay).toBeVisible({ timeout: 10000 })
    await secondProductOverlay.locator('.fa-shopping-cart').click()
})

When('I click View Cart', async function (this: CustomWorld) {
    await this.page.locator('.modal-body a:has-text("View Cart")').click()
})

Then('both products should be in the cart', async function (this: CustomWorld) {
    const rows = this.page.locator('#cart_info_table tbody tr')
    await expect(rows).toHaveCount(2)
})

Then('the cart should show correct prices, quantity and total', async function (this: CustomWorld) {
    const product1 = this.page.locator('#cart_info_table tbody tr').nth(0)
    const product2 = this.page.locator('#cart_info_table tbody tr').nth(1)
    await expect(product1.locator('.cart_price p')).toContainText(this.product1Price!)
    await expect(product1.locator('.cart_quantity')).toContainText('1')
    await expect(product1.locator('.cart_total p')).toContainText(this.product1Price!)
    await expect(product2.locator('.cart_price p')).toContainText(this.product2Price!)
    await expect(product2.locator('.cart_quantity')).toContainText('1')
    await expect(product2.locator('.cart_total p')).toContainText(this.product2Price!)
})
