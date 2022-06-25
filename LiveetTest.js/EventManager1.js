/// <reference types="Cypress" />
//organizer module
describe('Event Manager', function () {

    it('Create Event', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.log('Create Event')
        cy.get(':nth-child(3) > .nav-link > .pcoded-mtext').invoke('show')
        cy.contains('Event').click()
        cy.url().should('include', 'event')
        cy.get('.col > .btn').invoke('show')
        .click({force: true})
        cy.get('#organiser_id').select('eOnline Eleran', {force:true})
        cy.get('#event_name').type('Meat Festival')
        cy.get('.rdt > .form-control').type('07/20/2022 07:00 PM')
        cy.get('#address').type('Muri Okunola Park, Lagos', {force:true})
        cy.get('#event_desc').type('grilled, smoked, fried, Na meat buffet')
        cy.get('.MuiCard-root > :nth-child(1) > :nth-child(6) > :nth-child(1)').click()
        cy.get(':nth-child(2) > .form-group > :nth-child(4) > .custom-control-label').click()
        cy.get('.MuiButtonBase-root').click()
        cy.scrollTo('bottom')
        cy.get('.MuiCard-root > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1)').type('Meat Pass')
        cy.get('.MuiCard-root > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .form-group').type('1')
        cy.get(':nth-child(2) > :nth-child(1) > .form-group').type('7000')
        cy.get(':nth-child(2) > :nth-child(2) > .form-group').type('500')
        cy.get('.MuiCard-root > :nth-child(1) > :nth-child(2) > :nth-child(3)').type('Admits One')
        cy.get(':nth-child(2) > .MuiButtonBase-root').click()

        cy.get('[style="overflow: scroll;"] > :nth-child(1) > .form-group').type('500')
        cy.get(':nth-child(3) > .rdt > .form-control').type('06/20/2022 11:00 PM')
        cy.get(':nth-child(4) > .rdt > .form-control').type('07/10/2022 12:00 PM', {force:true})
        cy.get('.form-group > :nth-child(5)').click({force:true})
        cy.get(':nth-child(7) > .custom-control').click()
        cy.get(':nth-child(2) > .MuiButtonBase-root').click()



        



    })
})