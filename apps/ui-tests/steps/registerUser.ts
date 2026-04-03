import { When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { TEST_USER } from '../fixtures/testData'
import type { CustomWorld } from '../hooks/world'

export function getUniqueEmail() {
    const stamp = Date.now()
    return `testuser+${stamp}@example.com`
}

When('I click on Signup', async function (this: CustomWorld) {
    await this.home.loginLink.click()
})

Then('I should see New User Signup', async function (this: CustomWorld) {
    await expect(this.page.locator('h2:has-text("New User Signup!")')).toBeVisible({ timeout: 10000 })
})

When('I register a new user with name and email', async function (this: CustomWorld) {
    const email = getUniqueEmail()
    await this.loginPage.signupNameInput.fill(TEST_USER.name)
    await this.loginPage.signupEmailInput.fill(email)
    await this.loginPage.signupButton.click()
})

Then('I should see ENTER ACCOUNT INFORMATION', async function (this: CustomWorld) {
    await expect(this.page.locator('b:has-text("Enter Account Information")')).toBeVisible({ timeout: 10000 })
})

When('I fill account information and address details', async function (this: CustomWorld) {
    await this.page.check('#id_gender1')
    await this.page.fill('#password', process.env.DEFAULT_PASSWORD!)
    await this.page.selectOption('#days', { value: '10' })
    await this.page.selectOption('#months', { value: '5' })
    await this.page.selectOption('#years', { value: '1990' })
    await this.page.fill('#first_name', TEST_USER.name)
    await this.page.fill('#last_name', TEST_USER.surname)
    await this.page.fill('#company', TEST_USER.company)
    await this.page.fill('#address1', TEST_USER.address1)
    await this.page.fill('#address2', TEST_USER.address2)
    await this.page.selectOption('#country', { label: 'United States' })
    await this.page.fill('#state', TEST_USER.state)
    await this.page.fill('#city', TEST_USER.city)
    await this.page.fill('#zipcode', TEST_USER.zipcode)
    await this.page.fill('#mobile_number', TEST_USER.phone)
})

When('I create the account', async function (this: CustomWorld) {
    await this.loginPage.createAccountButton.click()
})

Then('I should see ACCOUNT CREATED', async function (this: CustomWorld) {
    await expect(this.loginPage.accountCreatedHeading).toBeVisible({ timeout: 20000 })
})

When('I continue after account creation', async function (this: CustomWorld) {
    await this.page.click('a[data-qa="continue-button"]')
    await expect(this.home.loggedInAs).toBeVisible({ timeout: 15000 })
})

Then('I should see Logged in as username', async function (this: CustomWorld) {
    await expect(this.home.loggedInAs).toBeVisible()
})

When('I delete the account', async function (this: CustomWorld) {
    await this.home.deleteAccountLink.click()
})

Then('I should see ACCOUNT DELETED and continue', async function (this: CustomWorld) {
    await expect(this.loginPage.accountDeletedHeading).toBeVisible({ timeout: 15000 })
    await this.page.click('a[data-qa="continue-button"]')
})
