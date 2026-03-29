import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { TEST_USER } from '../fixtures/testData'

Then('the delivery address should match the registration details', async function () {
    const delivery = this.page.locator('#address_delivery')
    await expect(delivery).toContainText(TEST_USER.name)
    await expect(delivery).toContainText(TEST_USER.company)
    await expect(delivery).toContainText(TEST_USER.address1)
    await expect(delivery).toContainText(TEST_USER.address2)
    await expect(delivery).toContainText(TEST_USER.city)
    await expect(delivery).toContainText(TEST_USER.state)
    await expect(delivery).toContainText(TEST_USER.zipcode)
    await expect(delivery).toContainText(TEST_USER.phone)
})

Then('the billing address should match the registration details', async function () {
    const billing = this.page.locator('#address_invoice')
    await expect(billing).toContainText(TEST_USER.name)
    await expect(billing).toContainText(TEST_USER.company)
    await expect(billing).toContainText(TEST_USER.address1)
    await expect(billing).toContainText(TEST_USER.address2)
    await expect(billing).toContainText(TEST_USER.city)
    await expect(billing).toContainText(TEST_USER.state)
    await expect(billing).toContainText(TEST_USER.zipcode)
    await expect(billing).toContainText(TEST_USER.phone)
})
