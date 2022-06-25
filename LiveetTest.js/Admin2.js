/// <reference types="Cypress" />
//Admin
describe('Admin', function () {

    it('Create Staff', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.get(':nth-child(13) > .nav-link > .pcoded-mtext').invoke('show')
        cy.contains('Admin').click()
        cy.url().should('include', 'admin')
        cy.get('[index="0"] > :nth-child(8) > .d-flex > .btn').click()
        cy.get(':nth-child(1) > :nth-child(3) > .custom-control-label').click()
        cy.get(':nth-child(2) > :nth-child(2) > .custom-control-label').click()
        cy.get('.col > .btn').click()

    })
})