Feature: Checkout Feature

    Feature This feature is required for a user to Checkout to the application

    Scenario: Success Checkout Product on Cart when Information Filled
        Given A user open the login page
        And A user enter the username "standard_user" and password "secret_sauce" and click on the login button
        And A user click Add to cart button
        And A user click Cart page
        And A user will be found 1 product
        And A user click Checkout button
        And A user enter the information
        And A user click Continue button
        And A user will be Overview product
        When A user click Finish button
        Then A user Success order product

    Scenario: Failed Checkout Product when not Filled Information
        Given A user open the login page
        And A user enter the username "standard_user" and password "secret_sauce" and click on the login button
        And A user click Add to cart button
        And A user click Cart page
        And A user will be found 1 product
        And A user click Checkout button
        And A user enter the information invalid
        When A user click Continue button
        Then A user will be get error message