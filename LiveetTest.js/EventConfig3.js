/// <reference types="Cypress" />
//Event Config
describe('Event Config', function () {

    it('Timeline Bundle', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.get(':nth-child(11) > .nav-link > .pcoded-mtext').invoke('show')
        cy.contains('Config').click()
        cy.url().should('include', 'config')
        cy.get('#event_config-tab-timelineBundle').click({force:true})
        cy.get('#event_config-tabpane-timelineBundle > .row > .col-md-12 > .card > .card-body > [style="display: flex; justify-content: space-between; margin-bottom: 5px;"] > .btn-primary').click({force:true})
        cy.get('#timelineBundleName').type('Platinum Steak')
        cy.get(':nth-child(3) > :nth-child(1) > .form-control').type('1')
        cy.get(':nth-child(2) > .form-control').type('4')
        cy.get(':nth-child(3) > .form-control').type('7')
        cy.get('#bundleCost').type('28000')
        cy.get('.modal-footer > .btn-primary').click()



        



    })
})