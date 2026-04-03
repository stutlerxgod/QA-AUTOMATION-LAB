import { Page } from '@playwright/test'

export class CartPage {
    constructor(private page: Page) {}

    get cartItems() {
        return this.page.locator('#cart_info_table tbody tr')
    }

    get viewCart() {
        return this.page.locator('#cartModal a[href="/view_cart"]')
    }

    get proceedToCheckoutButton() {
        return this.page.locator('a:has-text("Proceed To Checkout")')
    }
}
