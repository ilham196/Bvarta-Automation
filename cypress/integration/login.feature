Feature: Login Feature

    Feature This feature is required for a user to login to the application

    Scenario: Do Log In Success
        Given A user open the login page
        When A user enter the username "standard_user"
        And A user enter the password "secret_sauce"
        And A user click on the login button
        Then A user will be login in
    
    Scenario: Do Log In Failed with Invalid username
        Given A user open the login page
        When A user enter the username "lalalapo"
        And A user enter the password "secret_sauce"
        And A user click on the login button
        Then A user will be get the Error Message

    Scenario: Do Log In Failed with Invalid password
        Given A user open the login page
        When A user enter the username "standard_user"
        And A user enter the password "12345678"
        And A user click on the login button
        Then A user will be get the Error Message