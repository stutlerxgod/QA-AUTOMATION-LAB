Feature: Contact support form

  Scenario: User submits support request successfully
    Given I open the support page
    When I fill the support form with valid data
    And I submit the support form
    Then I should see a success message
