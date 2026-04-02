Feature: Logout User

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: Logout user navigates to login page
    Given I have a registered account
    When I click on Login
    Then I should see Login to your account
    When I enter correct email and password
    And I click the login button
    Then I should see Logged in as username
    When I click the Logout button
    Then I should see Login to your account
