/// <reference types="Cypress" />
//Turnstile
describe('Turnstile', function () {

    it('Edit Turnstile', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.get(':nth-child(7) > .nav-link > .pcoded-mtext').invoke('show')
        cy.contains('Turnstile').click()
        cy.url().should('include', 'turnstile')
        cy.get('[index="0"] > :nth-child(4) > .d-flex > .btn-primary').click({force:true})
        cy.get('#ticketPlanName').type('1')
        cy.get('.modal-footer > .btn-primary').click()



        



    })
})