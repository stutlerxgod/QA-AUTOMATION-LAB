Feature: Verify Scroll Up without Arrow button and Scroll Down functionality

  Background:
    Given I launch the Automation Exercise site
    Then I should see the home page

  Scenario: User scrolls down to see subscription then scrolls back up manually
    When I scroll down to the footer
    Then I should see SUBSCRIPTION
    When I scroll up to the top of the page
    Then I should see the homepage hero text
