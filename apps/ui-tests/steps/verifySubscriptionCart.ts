import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import type { CustomWorld } from '../hooks/world'

When('I click on Cart', async function (this: CustomWorld) {
    await this.home.cartLink.click()
})

Then('I should be on the cart page', async function (this: CustomWorld) {
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}/view_cart`)
})
