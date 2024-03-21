/// <reference types = "Cypress" />


describe("Test Contact Us Form via WebdriverUni", () => {

    beforeEach(function() {
        cy.fixture('example.json').then(function(data) {
            //this.data = data;
            globalThis.data = data;   // <= alternative to the above line

        })
})

    it.only('Should be able to submit a successfull submission via contact us form', () => {

        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.url().should('contain', 'Contact-U')
        cy.get("[name='first_name']").type(data.first_name)
        cy.get("[name='last_name']").type(data.last_name)
        cy.get("[name='email']").type(data.email)
        cy.get("textarea[placeholder='Comments']").type("How can I learn Cypress?")
        cy.get("input[value='SUBMIT']").click()
        
        cy.get("div[id='contact_reply'] h1").should('have.text', 'Thank You for your Message!')

    });

    it('Should NOT be able to submit a successfull submission via contact us form as all fields are required', () => {

        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("[name='first_name']").type(data.first_name)
        cy.get("[name='last_name']").type(data.last_name)
        cy.get("textarea[placeholder='Comments']").type('this is a comment')
        cy.get("input[value='SUBMIT']").click()
        cy.get("body").contains('Error: Invalid email address')

    })
} )