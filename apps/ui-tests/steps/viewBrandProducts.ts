import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

Then('I should see brands in the left sidebar', async function (this: CustomWorld) {
    await expect(this.page.locator('.brands_products')).toBeVisible()
    await expect(this.page.locator('.left-sidebar h2:has-text("Brands")')).toBeVisible()
})

When('I click on the {string} brand', async function (this: CustomWorld, brand: string) {
    await this.page.locator(`.brands_products ul li:has-text("${brand}")`).click()
})

Then('I should be on the {string} brand page with products displayed', async function (this: CustomWorld, brand: string) {
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}/brand_products/${brand}`)
    await expect(this.page.locator('h2.title')).toBeVisible()
    await expect(this.page.locator('h2.title')).toHaveText(`Brand - ${brand} Products`)
    await expect(this.page.locator('.product-image-wrapper').first()).toBeVisible()
})
