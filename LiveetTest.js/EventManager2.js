/// <reference types="Cypress" />
//Event Manager module
describe('Event Manager', function () {

    it('Filter Event', function () {
        cy.visit('https://admin-stg.liveet.co')
        cy.get(':nth-child(3) > .form-control').type('quales01')
        cy.get(':nth-child(5) > .form-control').type('quales')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .nav-link > .pcoded-mtext').invoke('show')
        cy.contains('Event').click()
        cy.url().should('include', 'event')
        cy.get(':nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').click().wait(2000)
        .each(($el, index, $list) => {
            if($el.text()==="DODO PAID"){
                cy.wrap($el).click()

            }
        })
        cy.get('#react-select-3-option-4').click({force:true})
        cy.get('.row > :nth-child(6)').click()


        



    })
})