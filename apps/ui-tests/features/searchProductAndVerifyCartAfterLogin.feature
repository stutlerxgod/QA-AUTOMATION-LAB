Feature: Search Products and Verify Cart After Login

  Background:
    Given I have a registered account
    And I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User searches products, adds to cart and verifies cart persists after login
    When I click on Products
    Then I should be on the all products page
    When I search for a product
    Then I should see SEARCHED PRODUCTS
    And the searched products should be visible
    When I add all searched products to cart
    And I click on Cart
    Then I should be on the cart page
    And the cart should contain the searched products
    When I click on Login
    Then I should see Login to your account
    When I enter correct email and password
    And I click the login button
    Then I should see Logged in as username
    When I click on Cart
    Then I should be on the cart page
    And the cart should contain the searched products
