Feature: View Category Products

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User views products by category
    Then I should see categories in the left sidebar
    When I click on Women category
    And I click on a dress subcategory under Women
    Then I should see the dress category products page
    When I click on Men category
    And I click on a jeans subcategory under Men
    Then I should see the jeans category products page
