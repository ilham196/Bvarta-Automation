import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('A user open the login page', () => {
    cy.visit('https://www.saucedemo.com/')
})

When('A user enter the username {string}', (username) => {
    cy.get('[data-test="username"]').type(username)
})

And('A user enter the password {string}', (password) => {
    cy.get('[data-test="password"]').type(password)
})

And('A user click on the login button', () => {
    cy.get('[data-test="login-button"]').click()
})

And('A user will be login in', () => {
    cy.get('.title').should('be.visible')
})

Then('A user will be login in', () => {
    cy.get('.title').should('be.visible')
})

Then('A user will be get the Error Message', () => {
    cy.get('[data-test="error"]').should('be.visible')
})

Then('A user click Menu', () => {
    cy.get('[id="react-burger-menu-btn"]').click()
})

And('A user click Log Out Button', () => {
    cy.get('[data-test="logout-sidebar-link"]').click()
})