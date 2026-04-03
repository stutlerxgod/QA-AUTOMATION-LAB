import { Page } from '@playwright/test'

export class HomePage {
    constructor(private page: Page) {}

    get logo() {
        return this.page.locator('img[alt="Website for automation practice"]')
    }

    get loginLink() {
        return this.page.locator('.navbar-nav a[href="/login"]')
    }

    get productsLink() {
        return this.page.locator('a[href="/products"]')
    }

    get contactLink() {
        return this.page.locator('a[href="/contact_us"]')
    }

    get cartLink() {
        return this.page.locator('.navbar-nav a[href="/view_cart"]')
    }

    get logoutLink() {
        return this.page.locator('a[href="/logout"]')
    }

    get deleteAccountLink() {
        return this.page.locator('a[href="/delete_account"]')
    }

    get loggedInAs() {
        return this.page.locator('a:has-text("Logged in as")')
    }

    get scrollUpButton() {
        return this.page.locator('#scrollUp')
    }

    get heroText() {
        return this.page.locator('.carousel-inner .active h2:has-text("Full-Fledged practice website for Automation Engineers")')
    }

    get subscribeEmailInput() {
        return this.page.locator('input#susbscribe_email')
    }

    get subscribeButton() {
        return this.page.locator('button#subscribe')
    }
}
