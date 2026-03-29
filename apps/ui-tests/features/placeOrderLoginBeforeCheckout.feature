Feature: Place Order - Login before Checkout

  Scenario: User logs in before checkout and places an order
    Given I launch the Automation Exercise site
    Then I should see the home page
    Given I have a registered account
    When I click on Login
    Then I should see Login to your account
    When I enter correct email and password
    And I click the login button
    Then I should see Logged in as username
    When I hover over the first product and add it to cart
    And I click Continue Shopping
    When I click on Cart
    Then I should be on the cart page
    When I click Proceed To Checkout
    Then I should see Address Details and Review Your Order
    When I enter comment and place order
    And I fill in payment details
    And I click Pay and Confirm Order
    Then I should see order placed successfully
    When I delete the account
    Then I should see ACCOUNT DELETED and continue
