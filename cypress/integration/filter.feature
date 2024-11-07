Feature: Filter Feature

    Feature This feature is required for a user to Filter to the application

    Scenario: Success Filter Product Price Low to High
        Given A user open the login page
        And A user enter the username "standard_user" and password "secret_sauce" and click on the login button
        When A user click Filter menu and select option price low to high
        Then A user will be success filter price low to high


    Scenario: Success Filter Product Name Z to A
        Given A user open the login page
        And A user enter the username "standard_user" and password "secret_sauce" and click on the login button
        When A user click Filter menu and select option name z to a
        Then A user will be success filter name z to a