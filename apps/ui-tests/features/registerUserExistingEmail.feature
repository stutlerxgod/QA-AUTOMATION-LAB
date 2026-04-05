Feature: Register User with Existing Email

  Background:
    Given I have a registered account
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: Registration with already registered email shows error
    When I click on Signup
    Then I should see New User Signup
    When I enter name and already registered email
    And I click the Signup button
    Then I should see error Email Address already exist!
