import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('A user open the login page', () => {
    cy.visit('https://www.saucedemo.com/')
})

And('A user enter the username {string} and password {string} and click on the login button and add to cart button', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')
})

When('A user click Add to cart button', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove')
})

When('A user click Add to cart button another product', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').should('have.text', 'Remove')
})

And('A user click Cart page', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
})

Then('A user will be found 1 product', () => {
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack')
})

And('A user will be found 2 product', () => {
    cy.get('[data-test="inventory-item-name"]').eq(0).should('have.text', 'Sauce Labs Backpack')
    cy.get('[data-test="inventory-item-name"]').eq(1).should('have.text', 'Sauce Labs Bike Light')
})

And('A user will be found the product', () => {
    cy.get('[data-test="item-4-title-link"]').should('have.text', 'Sauce Labs Backpack')
})

And('A user click Remove button', () => {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
})

Then('A user success remove product', () => {
    cy.get('[class="removed_cart_item"]')
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Bike Light')
})