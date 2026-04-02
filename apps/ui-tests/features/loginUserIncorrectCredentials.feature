Feature: Login User with Incorrect Credentials

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: Login with incorrect email and password shows error message
    When I click on Login
    Then I should see Login to your account
    When I enter incorrect email and password
    And I click the login button
    Then I should see error Your email or password is incorrect
