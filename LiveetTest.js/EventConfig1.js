/// <reference types="Cypress" />
//Event Config
describe('Event Config', function () {

    it('Ticket Plans', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.get(':nth-child(11) > .nav-link > .pcoded-mtext').invoke('show')
        cy.contains('Config').click()
        cy.url().should('include', 'config')
        .click()
        cy.get('#ticketPlanName').type('eleran pass')
        cy.get('#minPopulation').type('30')
        cy.get('#maxPopulation').type('3000')
        cy.get('#ticketCost').type('2500')
        cy.get('.modal-footer > .btn-primary').click()


        



    })
})