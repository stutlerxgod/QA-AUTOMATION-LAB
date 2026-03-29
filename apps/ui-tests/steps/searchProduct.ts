import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { TEST_DATA } from '../fixtures/testData'

When('I search for a product', async function () {
    await this.page.fill('input#search_product', TEST_DATA.searchTerm)
    await this.page.click('button#submit_search')
})

Then('I should see SEARCHED PRODUCTS', async function () {
    await expect(this.page.locator('h2.title:has-text("Searched Products")')).toBeVisible({ timeout: 10000 })
})

Then('the searched products should be visible', async function () {
    const products = this.page.locator('.features_items .product-image-wrapper')
    await expect(products.first()).toBeVisible({ timeout: 10000 })
    const count = await products.count()
    expect(count).toBeGreaterThan(0)
})
