import { When } from '@cucumber/cucumber'

When('I scroll up to the top of the page', async function () {
    await this.page.evaluate(() => window.scrollTo(0, 0))
})
