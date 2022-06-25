/// <reference types="Cypress" />
//organizer module
describe('Organizer Module', function () {

    it('Manage Substaff', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.log('Manage Substaff')
        cy.get(':nth-child(3) > .nav-link > .pcoded-mtext').invoke('show')
        cy.contains('Organizer').click()
        cy.url().should('include', 'organizer')
        cy.get('[index="0"] > :nth-child(8) > .d-flex > a.btn').invoke('show')
        cy.contains('View Staff').click({force: true})
        cy.get('.d-flex > :nth-child(1)').click()
        
        

    })

})