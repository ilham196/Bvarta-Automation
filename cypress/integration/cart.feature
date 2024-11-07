Feature: Cart Feature

    Feature This feature is required for a user to Cart to the application

    Scenario: Success Add to Cart 1 Product
        Given A user open the login page
        And A user enter the username "standard_user" and password "secret_sauce" and click on the login button and add to cart button
        When A user click Cart page
        Then A user will be found 1 product

    Scenario: Success Add to Cart more than 1 Product
        Given A user open the login page
        And A user enter the username "standard_user" and password "secret_sauce" and click on the login button and add to cart button
        When A user click Add to cart button another product
        And A user click Cart page
        Then A user will be found 2 product

    Scenario: Success Remove Product on Cart
        Given A user open the login page
        And A user enter the username "standard_user" and password "secret_sauce" and click on the login button and add to cart button
        When A user click Add to cart button another product
        And A user click Cart page
        And A user will be found the product
        And A user click Remove button
        Then A user success remove product