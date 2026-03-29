import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

When('I click on the Products button', async function () {
    await this.page.click('a[href="/products"]')
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}/products`)
})

Then('I should see brands in the left sidebar', async function () {
    await expect(this.page.locator('.brands_products')).toBeVisible()
    await expect(this.page.locator('.left-sidebar h2:has-text("Brands")')).toBeVisible()
})

When('I click on the first brand', async function () {
    await this.page.locator('.brands_products ul li').nth(0).click()
})

Then('I should be on the brand page with products displayed', async function () {
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}/brand_products/Polo`)
    await expect(this.page.locator('h2.title')).toBeVisible()
    await expect(this.page.locator('h2.title')).toHaveText('Brand - Polo Products')
    await expect(this.page.locator('.product-image-wrapper').first()).toBeVisible()
})

When('I click on another brand from the sidebar', async function () {
    await this.page.locator('.brands_products ul li').nth(1).click()
})

Then('I should be on the new brand page with products displayed', async function () {
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}/brand_products/H&M`)
    await expect(this.page.locator('h2.title')).toBeVisible()
    await expect(this.page.locator('h2.title')).toHaveText('Brand - H&M Products')
    await expect(this.page.locator('.product-image-wrapper').first()).toBeVisible()
})
