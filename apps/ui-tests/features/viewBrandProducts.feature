Feature: View & Cart Brand Products

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario Outline: User views products by brand
    When I click on Products
    Then I should be on the all products page
    Then I should see brands in the left sidebar
    When I click on the "<brand>" brand
    Then I should be on the "<brand>" brand page with products displayed

    Examples:
      | brand   |
      | Polo    |
      | H&M     |
      | Madame  |
