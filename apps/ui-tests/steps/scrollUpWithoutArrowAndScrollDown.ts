import { When } from '@cucumber/cucumber'
import type { CustomWorld } from '../hooks/world'

When('I scroll up to the top of the page', async function (this: CustomWorld) {
    await this.page.evaluate(() => window.scrollTo(0, 0))
})
