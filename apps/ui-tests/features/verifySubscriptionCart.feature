Feature: Verify Subscription in Cart Page

  Scenario: User subscribes successfully from the cart page footer
    Given I launch the Automation Exercise site
    Then I should see the home page
    When I click on Cart
    Then I should be on the cart page
    When I scroll down to the footer
    Then I should see SUBSCRIPTION
    When I enter email and click the subscribe button
    Then I should see subscription success message 'You have been successfully subscribed!'
