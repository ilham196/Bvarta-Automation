import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('A user open the login page', () => {
    cy.visit('https://www.saucedemo.com/')
})

And('A user enter the username {string} and password {string} and click on the login button', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

And('A user click Add to cart button', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')
})

And('A user click Cart page', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
})

And('A user will be found 1 product', () => {
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
})

And('A user click Checkout button', () => {
    cy.get('[data-test="checkout"]').click()
})

And('A user enter the information', () => {
    cy.get('[data-test="firstName"]').type('Nanang')
    cy.get('[data-test="lastName"]').type('Sunanang')
    cy.get('[data-test="postalCode"]').type('50231')
})

And('A user click Continue button', () => {
    cy.get('[data-test="continue"]').click()
})

And('A user will be Overview product', () => {
    cy.get('[data-test="total-info-label"]').should('be.visible')
})

When('A user click Finish button', () => {
    cy.get('[class="btn btn_action btn_medium cart_button"]').click()
})

Then('A user Success order product', () => {
    cy.get('[class="complete-header"]').should('have.text', 'Thank you for your order!')
})

When('A user click Continue button', () => {
    cy.get('[data-test="continue"]').click()
})

And('A user enter the information invalid', () => {

})

Then('A user will be get error message', () => {
    cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
})