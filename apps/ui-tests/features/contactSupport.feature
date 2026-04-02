Feature: Contact Us Form

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User submits contact form successfully
    When I click on Contact Us
    Then I should see GET IN TOUCH
    When I fill in the contact form with name, email, subject and message
    And I upload a file
    And I click Submit
    Then I should see success message 'Success! Your details have been submitted successfully.'
