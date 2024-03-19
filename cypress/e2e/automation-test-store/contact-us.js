/// <reference types = "Cypress" />


describe('Test Contact Us Form via Automation Test Store', () => {

    it('Should be able to submit a successfull submission via contact us form', () => {

        cy.visit('https://automationteststore.com')
        cy.get("a[href$='contact']").click().then(function(linkText){
            cy.log('The name of the button is: '+ linkText.text())
        })
        cy.get("#ContactUsFrm_first_name").type("Ema")
        cy.get("#ContactUsFrm_email").type("ema@s.com").should('have.attr', 'name', 'email')
        cy.get("#ContactUsFrm_enquiry").type("This is a comment")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        console.log("Test has completed"); //js log 
        cy.log("This is a cypress comment") //cypress log
    });


} )