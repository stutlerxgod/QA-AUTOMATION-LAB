Feature: Verify Test Cases Page

  Scenario: User navigates to test cases page successfully
    Given I launch the Automation Exercise site
    Then I should see the home page
    When I click on Test Cases
    Then I should be on the test cases page
