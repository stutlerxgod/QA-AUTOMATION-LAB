Feature: Add Products in Cart

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User adds two products to cart and verifies cart details
    When I click on Products
    When I hover over the first product and add it to cart
    And I click Continue Shopping
    When I hover over the second product and add it to cart
    And I click View Cart
    Then both products should be in the cart
    And the cart should show correct prices, quantity and total
