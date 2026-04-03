import { Page } from '@playwright/test'

export class LoginPage {
    constructor(private page: Page) {}

    get loginEmailInput() {
        return this.page.locator('input[data-qa="login-email"]')
    }

    get loginPasswordInput() {
        return this.page.locator('input[data-qa="login-password"]')
    }

    get loginButton() {
        return this.page.locator('button[data-qa="login-button"]')
    }

    get loginHeading() {
        return this.page.locator('h2:has-text("Login to your account")')
    }

    get loginError() {
        return this.page.locator('p:has-text("Your email or password is incorrect!")')
    }

    get signupNameInput() {
        return this.page.locator('input[data-qa="signup-name"]')
    }

    get signupEmailInput() {
        return this.page.locator('input[data-qa="signup-email"]')
    }

    get signupButton() {
        return this.page.locator('button[data-qa="signup-button"]')
    }

    get createAccountButton() {
        return this.page.locator('button[data-qa="create-account"]')
    }

    get accountCreatedHeading() {
        return this.page.locator('h2:has-text("Account Created!")')
    }

    get accountDeletedHeading() {
        return this.page.locator('h2:has-text("Account Deleted!")')
    }
}
