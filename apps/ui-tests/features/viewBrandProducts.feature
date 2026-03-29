Feature: View & Cart Brand Products

  Scenario: User views products by brand
    Given I launch the Automation Exercise site
    Then I should see the home page
    When I click on the Products button
    Then I should see brands in the left sidebar
    When I click on the first brand
    Then I should be on the brand page with products displayed
    When I click on another brand from the sidebar
    Then I should be on the new brand page with products displayed
