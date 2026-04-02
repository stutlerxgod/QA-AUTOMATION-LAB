Feature: Remove Products From Cart

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User removes a product from the cart
    When I hover over the first product and add it to cart
    And I click Continue Shopping
    When I click on Cart
    Then I should be on the cart page
    When I remove the first product from the cart
    Then the product should be removed from the cart
