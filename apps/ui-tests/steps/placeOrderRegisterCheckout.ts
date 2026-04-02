import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { PAYMENT } from '../fixtures/testData'
import type { CustomWorld } from '../hooks/world'

When('I click Proceed To Checkout', async function (this: CustomWorld) {
    await this.page.click('a:has-text("Proceed To Checkout")')
})

When('I click on cart login button', async function (this: CustomWorld) {
    await this.page.click('u:has-text("Login")')
})

Then('I should see Address Details and Review Your Order', async function (this: CustomWorld) {
    await expect(this.page.locator('#address_delivery')).toBeVisible({ timeout: 10000 })
    await expect(this.page.locator('#cart_info')).toBeVisible({ timeout: 10000 })
})

When('I enter comment and place order', async function (this: CustomWorld) {
    await this.page.fill('textarea.form-control', 'Please deliver between 9am-5pm.')
    await this.page.click('a.btn.btn-default.check_out')
})

When('I fill in payment details', async function (this: CustomWorld) {
    await this.page.fill('input[data-qa="name-on-card"]', PAYMENT.nameOnCard)
    await this.page.fill('input[data-qa="card-number"]', PAYMENT.cardNumber)
    await this.page.fill('input[data-qa="cvc"]', PAYMENT.cvc)
    await this.page.fill('input[data-qa="expiry-month"]', PAYMENT.expiryMonth)
    await this.page.fill('input[data-qa="expiry-year"]', PAYMENT.expiryYear)
})

When('I click Pay and Confirm Order', async function (this: CustomWorld) {
    await this.page.click('button[data-qa="pay-button"]')
})

Then('I should see order placed successfully', async function (this: CustomWorld) {
    await expect(this.page.locator('p:has-text("Congratulations! Your order has been confirmed!")')).toBeVisible({ timeout: 15000 })
})
