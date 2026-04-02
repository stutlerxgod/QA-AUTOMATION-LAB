Feature: Verify Test Cases Page

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User navigates to test cases page successfully
    When I click on Test Cases
    Then I should be on the test cases page
