import { Given, When } from '@cucumber/cucumber'
import { request } from '@playwright/test'
import { TEST_USER } from '../fixtures/testData'
import { getUniqueEmail } from './registerUser'
import type { CustomWorld } from '../hooks/world'

Given('I have a registered account', async function (this: CustomWorld) {
    const email = getUniqueEmail()
    const password = process.env.DEFAULT_PASSWORD!

    const apiContext = await request.newContext()
    await apiContext.post(`${process.env.BASE_URL}/api/createAccount`, {
        form: {
            name: TEST_USER.name,
            email,
            password,
            title: 'Mr',
            birth_date: '10',
            birth_month: '5',
            birth_year: '1990',
            firstname: TEST_USER.name,
            lastname: TEST_USER.surname,
            company: TEST_USER.company,
            address1: TEST_USER.address1,
            address2: TEST_USER.address2,
            country: 'United States',
            zipcode: TEST_USER.zipcode,
            state: TEST_USER.state,
            city: TEST_USER.city,
            mobile_number: TEST_USER.phone,
        },
    })
    await apiContext.dispose()

    this.loginEmail = email
    this.loginPassword = password
})

When('I enter correct email and password', async function (this: CustomWorld) {
    await this.loginPage.loginEmailInput.fill(this.loginEmail!)
    await this.loginPage.loginPasswordInput.fill(this.loginPassword!)
})
