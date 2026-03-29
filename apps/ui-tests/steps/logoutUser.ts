import { When } from '@cucumber/cucumber'

When('I click the Logout button', async function () {
    await this.page.click('a[href="/logout"]')
})
