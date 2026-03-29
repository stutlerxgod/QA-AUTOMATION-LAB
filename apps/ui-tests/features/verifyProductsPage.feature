Feature: Verify All Products and Product Detail Page

  Scenario: User views product list and product detail page
    Given I launch the Automation Exercise site
    Then I should see the home page
    When I click on Products
    Then I should be on the all products page
    And the products list should be visible
    When I click View Product of the first product
    Then I should be on the product detail page
    And the product details should be visible
