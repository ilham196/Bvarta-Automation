describe('coba', () => {
    it('testcase', () => {
        cy.visit({url : 'https://www.saucedemo.com'})
        cy.get('input[id^=user-name]').click()
    })
})