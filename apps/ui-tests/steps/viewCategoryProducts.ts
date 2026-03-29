import { Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

Then('I should see categories in the left sidebar', async function () {
    await expect(this.page.locator('.category-products')).toBeVisible({ timeout: 10000 })
    await expect(this.page.locator('.left-sidebar h2:has-text("Category")')).toBeVisible()
})

When('I click on Women category', async function () {
    await this.page.click('.category-products a[href="#Women"]')
})

When('I click on a dress subcategory under Women', async function () {
    await this.page.locator('.category-products #Women ul li a').first().click()
})

Then('I should see the dress category products page', async function () {
    await expect(this.page.locator('h2.title')).toBeVisible({ timeout: 10000 })
    await expect(this.page.locator('h2.title')).toHaveText('Women - Dress Products')
})

When('I click on Men category', async function () {
    await this.page.click('.category-products a[href="#Men"]')
})

When('I click on a jeans subcategory under Men', async function () {
    await this.page.locator('.category-products #Men ul li a').nth(1).click()
})

Then('I should see the jeans category products page', async function () {
    await expect(this.page.locator('h2.title')).toBeVisible({ timeout: 10000 })
    await expect(this.page.locator('h2.title')).toHaveText('Men - Jeans Products')
})
