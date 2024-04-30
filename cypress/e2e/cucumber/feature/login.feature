Feature: Conduit Login Functionality

  Scenario: Login and Logout with Valid Credentials
    Given I am on the login page
    When I enter username
    And I enter password
    And I click on login button
    Then I should be routed to dashboard page
