import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber'
import { Browser, BrowserContext, Page, Download } from '@playwright/test'

export class CustomWorld extends World {
    browser!: Browser
    context!: BrowserContext
    page!: Page
    download?: Download
    product1Price?: string
    product2Price?: string
    loginEmail?: string
    loginPassword?: string
    recommendedProductName?: string | null
}

setWorldConstructor(CustomWorld)
