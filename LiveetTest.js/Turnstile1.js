/// <reference types="Cypress" />
//Turnstile
describe('Turnstile', function () {

    it('Create Turnstile', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.get(':nth-child(7) > .nav-link > .pcoded-mtext').invoke('show')
        cy.contains('Turnstile').click()
        cy.url().should('include', 'turnstile')
        cy.get('[style="display: flex; justify-content: space-between; margin-bottom: 5px;"] > .btn-primary').click()
        cy.get('#ticketPlanName').type('Eleran Gate')
        cy.get('.modal-footer > .btn-primary').click()



        



    })
})