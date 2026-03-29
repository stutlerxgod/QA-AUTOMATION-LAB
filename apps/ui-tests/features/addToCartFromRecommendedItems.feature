Feature: Add to Cart from Recommended Items

  Scenario: User adds a recommended item to cart from the home page
    Given I launch the Automation Exercise site
    Then I should see the home page
    When I scroll to the bottom of the page
    Then I should see RECOMMENDED ITEMS
    When I add the first recommended item to cart
    And I click View Cart
    Then I should be on the cart page
    And the recommended product should be displayed in cart
