Feature: Add Review on Product

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User adds a review on a product
    When I click on Products
    Then I should be on the all products page
    When I click View Product of the first product
    Then I should be on the product detail page
    And I should see Write Your Review
    When I fill in the review form and submit
    Then I should see Thank you for your review
