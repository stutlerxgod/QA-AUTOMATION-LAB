import { World, setWorldConstructor } from '@cucumber/cucumber'
import { Browser, BrowserContext, Page, Download } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { CartPage } from '../pages/CartPage'

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

    get home() { return new HomePage(this.page) }
    get loginPage() { return new LoginPage(this.page) }
    get cart() { return new CartPage(this.page) }
}

setWorldConstructor(CustomWorld)
