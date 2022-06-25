/// <reference types="Cypress" />

describe('Liveet Test', function () {

    it('visit liveet', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.log('LogIn')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.url().should('include', 'dashboard')
        

    })

})