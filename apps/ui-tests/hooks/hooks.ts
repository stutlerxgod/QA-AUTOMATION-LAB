import * as path from 'path'
import * as dotenv from 'dotenv'
import { Before, After, setDefaultTimeout } from '@cucumber/cucumber'
import { chromium } from '@playwright/test'

dotenv.config({ path: '.env' })
setDefaultTimeout(60000)
const STORAGE_STATE = path.join(__dirname, '../fixtures/cookieState.json')

Before(async function () {
    const { headless, slowMo } = this.parameters
    this.browser = await chromium.launch({ headless, slowMo})

    this.context = await this.browser.newContext({
        viewport: { width: 1280, height: 720 },
        storageState: STORAGE_STATE,
    })

    await this.context.tracing.start({ screenshots: true, snapshots: true })
    this.page = await this.context.newPage()
})

After(async function (scenario) {
    const name = scenario.pickle.name.replace(/\s+/g, '_')
    await this.context.tracing.stop({ path: `apps/ui-tests/traces/${name}.zip` })

    await this.page?.close()
    await this.context?.close()
    await this.browser?.close()
})
