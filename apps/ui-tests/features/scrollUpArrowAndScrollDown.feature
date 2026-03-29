Feature: Verify Scroll Up using Arrow button and Scroll Down functionality

  Scenario: User scrolls down to see subscription then uses arrow to scroll back up
    Given I launch the Automation Exercise site
    Then I should see the home page
    When I scroll down to the footer
    Then I should see SUBSCRIPTION
    When I click the scroll up arrow
    Then I should see the homepage hero text
