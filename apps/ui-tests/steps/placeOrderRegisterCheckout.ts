import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { PAYMENT } from '../fixtures/testData'

When('I click Proceed To Checkout', async function () {
    await this.page.click('a:has-text("Proceed To Checkout")')
})

When('I click on cart login button', async function () {
    await this.page.click('u:has-text("Login")')
})

Then('I should see Address Details and Review Your Order', async function () {
    await expect(this.page.locator('#address_delivery')).toBeVisible({ timeout: 10000 })
    await expect(this.page.locator('#cart_info')).toBeVisible({ timeout: 10000 })
})

When('I enter comment and place order', async function () {
    await this.page.fill('textarea.form-control', 'Please deliver between 9am-5pm.')
    await this.page.click('a.btn.btn-default.check_out')
})

When('I fill in payment details', async function () {
    await this.page.fill('input[data-qa="name-on-card"]', PAYMENT.nameOnCard)
    await this.page.fill('input[data-qa="card-number"]', PAYMENT.cardNumber)
    await this.page.fill('input[data-qa="cvc"]', PAYMENT.cvc)
    await this.page.fill('input[data-qa="expiry-month"]', PAYMENT.expiryMonth)
    await this.page.fill('input[data-qa="expiry-year"]', PAYMENT.expiryYear)
})

When('I click Pay and Confirm Order', async function () {
    await this.page.click('button[data-qa="pay-button"]')
})

Then('I should see order placed successfully', async function () {
    await expect(this.page.locator('p:has-text("Congratulations! Your order has been confirmed!")')).toBeVisible({ timeout: 15000 })
})
