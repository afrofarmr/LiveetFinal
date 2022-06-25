/// <reference types="Cypress" />
//organizer module
describe('Organizer Module', function () {

    it('Update Organizser Profile', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.log('Update Organizer Profile')
        cy.get(':nth-child(3) > .nav-link > .pcoded-mtext').invoke('show')
        cy.contains('Organizer').click()
        cy.url().should('include', 'organizer')
        cy.get('[index="1"] > :nth-child(8) > .d-flex > :nth-child(2)').invoke('show')
        .click({force: true})

    })
})