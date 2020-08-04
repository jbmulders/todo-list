Feature: Valid Login

    On entering the correct credentials, user should me logged in

    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter 'test@test.com' and 'test123' and click login
        Then I should be logged in