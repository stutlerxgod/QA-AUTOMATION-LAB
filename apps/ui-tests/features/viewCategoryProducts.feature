Feature: View Category Products

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario Outline: User views products by category
    Then I should see categories in the left sidebar
    When I click on "<category>" category
    And I click on "<subcategory>" subcategory under "<category>" category
    Then I should see "<subcategory>" - "<category>" products page

    Examples:
      | category | subcategory   |
      | Women    | Dress         |
      | Women    | Tops          |
      | Women    | Saree         |
      | Men      | Tshirts       |
      | Men      | Jeans         |
      | Kids     | Dress         |
      | Kids     | Tops & Shirts |