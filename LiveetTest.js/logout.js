/// <reference types="Cypress" />
//logout
describe('logout', function () {

    it('logout', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.get('#dropdown-basic').click()
        cy.get('.dropdown-menu > li').click()
        cy.url().should('include', 'signin')

    })
})