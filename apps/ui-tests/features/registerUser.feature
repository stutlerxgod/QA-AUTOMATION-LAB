Feature: Register User

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: Register a new user and delete the account successfully
    When I click on Signup
    Then I should see New User Signup
    When I register a new user with name and email
    Then I should see ENTER ACCOUNT INFORMATION
    When I fill account information and address details
    And I create the account
    Then I should see ACCOUNT CREATED
    When I continue after account creation
    Then I should see Logged in as username
    When I delete the account
    Then I should see ACCOUNT DELETED and continue