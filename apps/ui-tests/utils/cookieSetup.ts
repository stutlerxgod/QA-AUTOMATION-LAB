import { chromium } from '@playwright/test'
import * as path from 'path'

const STORAGE_STATE = path.join(__dirname, '../fixtures/cookieState.json')

async function saveCookieState() {
    const browser = await chromium.launch({ headless: true })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(process.env.BASE_URL!)
    const consentBtn = page.locator('.fc-cta-consent')
    if (await consentBtn.isVisible({ timeout: 10000 }).catch(() => false)) {
        await consentBtn.click()
    }

    await context.storageState({ path: STORAGE_STATE })
    await browser.close()
}

saveCookieState()