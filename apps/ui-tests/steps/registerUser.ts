import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { TEST_USER } from '../fixtures/testData'

function getUniqueEmail() {
    const stamp = Date.now()
    return `testuser+${stamp}@example.com`
}

Given('I launch the Automation Exercise site', async function () {
    await this.page.goto(process.env.BASE_URL)
})

Then('I should see the home page', async function () {
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}`)
    await expect(this.page.locator('img[alt="Website for automation practice"]')).toBeVisible({ timeout: 10000 })
})

When('I click on Signup', async function () {
    await this.page.click('a[href="/login"]')
})

Then('I should see New User Signup', async function () {
    await expect(this.page.locator('h2:has-text("New User Signup!")')).toBeVisible({ timeout: 10000 })
})

When('I register a new user with name and email', async function () {
    const email = getUniqueEmail()
    await this.page.fill('input[data-qa="signup-name"]', TEST_USER.name)
    await this.page.fill('input[data-qa="signup-email"]', email)
    await this.page.click('button[data-qa="signup-button"]')
    this.registeredEmail = email
})

Then('I should see ENTER ACCOUNT INFORMATION', async function () {
    await expect(this.page.locator('b:has-text("Enter Account Information")')).toBeVisible({ timeout: 10000 })
})

When('I fill account information and address details', async function () {
    await this.page.check('#id_gender1')
    await this.page.fill('#password', process.env.DEFAULT_PASSWORD)
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

When('I create the account', async function () {
    await this.page.click('button[data-qa="create-account"]')
})

Then('I should see ACCOUNT CREATED', async function () {
    await expect(this.page.locator('h2:has-text("Account Created!")')).toBeVisible({ timeout: 20000 })
})

When('I continue after account creation', async function () {
    await this.page.click('a[data-qa="continue-button"]')
    await expect(this.page.locator('a:has-text("Logged in as")')).toBeVisible({ timeout: 15000 })
})

Then('I should see Logged in as username', async function () {
    await expect(this.page.locator('a:has-text("Logged in as")')).toBeVisible()
})

When('I delete the account', async function () {
    await this.page.click('a[href="/delete_account"]')
})

Then('I should see ACCOUNT DELETED and continue', async function () {
    await expect(this.page.locator('h2:has-text("Account Deleted!")')).toBeVisible({ timeout: 15000 })
    await this.page.click('a[data-qa="continue-button"]')
})
