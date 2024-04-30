Feature: Conduit Login Functionality

  Scenario: Login with Valid Credentials
    Given I am on the login page
    When I enter username
    |username|
    |Admin|
    And I enter password
    |password|
    |admin123|
    And I click on login button
    Then I should be routed to dashboard page
