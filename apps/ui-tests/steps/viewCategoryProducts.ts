import { Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

Then('I should see categories in the left sidebar', async function (this: CustomWorld) {
    await expect(this.page.locator('.category-products')).toBeVisible({ timeout: 10000 })
    await expect(this.page.locator('.left-sidebar h2:has-text("Category")')).toBeVisible()
})

When('I click on {string} category', async function (this: CustomWorld, category: string) {
    await this.page.click(`.category-products a[href="#${category}"]`)
})

When('I click on {string} subcategory under {string} category', async function (this: CustomWorld, subcategory: string, category: string) {
    await this.page.locator(`.category-products #${category} ul li a:has-text("${subcategory}")`).click()
})

Then('I should see {string} - {string} products page', async function (this: CustomWorld, subcategory: string, category: string) {
    await expect(this.page.locator(`h2.title:has-text("${category} - ${subcategory} Products")`)).toBeVisible({ timeout: 10000 })
})
