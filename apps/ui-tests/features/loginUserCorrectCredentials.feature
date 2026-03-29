Feature: Login User with Correct Credentials

  Scenario: Login with correct email and password
    Given I launch the Automation Exercise site
    Then I should see the home page
    Given I have a registered account
    When I click on Login
    Then I should see Login to your account
    When I enter correct email and password
    And I click the login button
    Then I should see Logged in as username
    When I delete the account
    Then I should see ACCOUNT DELETED and continue
