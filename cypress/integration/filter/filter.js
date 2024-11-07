import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('A user open the login page', () => {
    cy.visit('https://www.saucedemo.com/')
})

And('A user enter the username {string} and password {string} and click on the login button', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

When('A user click Filter menu and select option price low to high', () => {
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
})

When('A user click Filter menu and select option name z to a', () => {
    cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
})

Then('A user will be success filter price low to high', () =>{
    cy.get('[data-test="item-2-img-link"]').should('be.visible')
})

Then('A user will be success filter name z to a', () =>{
    cy.get('[data-test="item-3-img-link"]').should('be.visible')
})