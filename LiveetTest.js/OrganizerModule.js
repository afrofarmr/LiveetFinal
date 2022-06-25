/// <reference types="Cypress" />
//organizer module
describe('Organizer Module', function () {

    it('Create Organizser Account', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.log('Create Organizer Account')
        cy.get(':nth-child(3) > .nav-link > .pcoded-mtext').invoke('show')
        cy.contains('Organizer').click()
        cy.url().should('include', 'organizer')
        cy.get('[style="display: flex; justify-content: space-between; margin-bottom: 5px;"] > .btn-primary').invoke('show')
        cy.contains('Add Organizer').click()
        cy.get('#OrganizationName').type('Eleran')
        cy.get('#OrganizationEmail').type('eleran12@gmail.com')
        cy.get('#OrganizationPhone').type('08020108377')
        cy.get('#OrganizationAddress').type('Lagos Abbatior')
        cy.get('#OrganizationUsername').type('fewa')
        cy.get('#OrganizationPassword').type('eleran01')
        cy.get('.modal-footer > .btn-primary').click()

        

    })

})