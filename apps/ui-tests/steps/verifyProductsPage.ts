import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

When('I click on Products', async function () {
    await this.page.click('a[href="/products"]')
})

Then('I should be on the all products page', async function () {
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}/products`)
    await expect(this.page.locator('h2.title:has-text("All Products")')).toBeVisible({ timeout: 10000 })
})

Then('the products list should be visible', async function () {
    await expect(this.page.locator('.features_items')).toBeVisible({ timeout: 10000 })
})

When('I click View Product of the first product', async function () {
    await this.page.locator('.features_items .product-image-wrapper').first().locator('a:has-text("View Product")').click()
})

Then('I should be on the product detail page', async function () {
    await expect(this.page).toHaveURL(/\/product_details\/\d+/)
})

Then('the product details should be visible', async function () {
    const info = this.page.locator('.product-information')
    await expect(info.locator('h2')).toBeVisible({ timeout: 10000 })
    await expect(info.locator('p:has-text("Category")')).toBeVisible()
    await expect(info.locator('span:has-text("Rs.")').nth(1)).toBeVisible()
    await expect(info.locator('p:has-text("Availability")')).toBeVisible()
    await expect(info.locator('p:has-text("Condition")')).toBeVisible()
    await expect(info.locator('p:has-text("Brand")')).toBeVisible()
})
