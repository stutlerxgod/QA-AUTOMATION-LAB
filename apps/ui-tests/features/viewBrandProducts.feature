Feature: View & Cart Brand Products

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User views products by brand
    When I click on Products
    Then I should be on the all products page
    Then I should see brands in the left sidebar
    When I click on the first brand
    Then I should be on the brand page with products displayed
    When I click on another brand from the sidebar
    Then I should be on the new brand page with products displayed
