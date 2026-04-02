Feature: Verify Product Quantity in Cart

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User sets product quantity and verifies it in cart
    When I click View Product for any product
    Then I should be on the product detail page
    When I set the product quantity to 4
    And I add the product to cart
    And I click View Cart
    Then the product should be in the cart with quantity 4
