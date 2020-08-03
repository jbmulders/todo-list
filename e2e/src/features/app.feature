Feature: Show login page
    Redirect to login page when not signed in

    Scenario Outline: Login page redirect
        Given I go to the page with path <path>
        When I do nothing, and not signed in
        Then I should see the login page

    Examples:
    |page|path|
    |login|/login|
    |todo|/todo|
    |admin|/admin|
    |random1|/someurl|
    |random2|/blabla/blabla|
    |random3|/testing/123|
    |random4|/todo/123|