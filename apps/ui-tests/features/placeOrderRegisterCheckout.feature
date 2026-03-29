@only
Feature: Place Order - Register while Checkout

  Scenario: User registers during checkout and places an order
    Given I launch the Automation Exercise site
    Then I should see the home page
    When I hover over the first product and add it to cart
    And I click Continue Shopping
    When I click on Cart
    Then I should be on the cart page
    When I click Proceed To Checkout
    And I click on cart login button
    Then I should see New User Signup
    When I register a new user with name and email
    Then I should see ENTER ACCOUNT INFORMATION
    When I fill account information and address details
    And I create the account
    Then I should see ACCOUNT CREATED
    When I continue after account creation
    Then I should see Logged in as username
    When I click on Cart
    And I click Proceed To Checkout
    Then I should see Address Details and Review Your Order
    When I enter comment and place order
    And I fill in payment details
    And I click Pay and Confirm Order
    Then I should see order placed successfully
    When I delete the account
    Then I should see ACCOUNT DELETED and continue
