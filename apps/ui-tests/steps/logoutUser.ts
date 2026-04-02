import { When } from '@cucumber/cucumber'
import type { CustomWorld } from '../hooks/world'

When('I click the Logout button', async function (this: CustomWorld) {
    await this.page.click('a[href="/logout"]')
})
