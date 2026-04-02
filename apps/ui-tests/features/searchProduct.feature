Feature: Search Product

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User searches for a product and sees matching results
    When I click on Products
    Then I should be on the all products page
    When I search for a product
    Then I should see SEARCHED PRODUCTS
    And the searched products should be visible
