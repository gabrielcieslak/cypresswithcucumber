Feature: Create and login with a new account
    Scenario: Create an account on automationpraticle.com
        Given access automationpraticle sign in page
        When fill in email in create account
        And click in create account button
        And fill in all required informations
        And click register button
        Then I should have a new account

    Scenario: Login with a new account created
        Given access automationpraticle sign in page
        When fill in email and login
        And click in sing in button
        Then I should be logged