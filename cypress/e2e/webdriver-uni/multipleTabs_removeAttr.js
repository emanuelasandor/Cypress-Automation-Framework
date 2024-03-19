/// <reference types = "Cypress" />


describe('Test Contact Us Form via WebdriverUni', () => {

    it('Should be able to submit a successfull submission via contact us form', () => {

        cy.visit('https://www.webdriveruniversity.com') 
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true})
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.url().should('contain', 'Contact-U')
        cy.get("[name='first_name']").type('ema')
        cy.get("[name='last_name']").type('Doe')
        cy.get("[name='email']").type('Doe@gmail.com')
        cy.get("textarea[placeholder='Comments']").type('this is a comment')
        cy.get("input[value='SUBMIT']").click()
        
        cy.get("div[id='contact_reply'] h1").should('have.text', 'Thank You for your Message!')

    });

    it('Should NOT be able to submit a successfull submission via contact us form as all fields are required', () => {

        //cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit('https://www.webdriveruniversity.com') 
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true})
        cy.get("[name='first_name']").type('ema')
        cy.get("[name='last_name']").type('Doe')
        cy.get("textarea[placeholder='Comments']").type('this is a comment')
        cy.get("input[value='SUBMIT']").click()
        cy.get("body").contains('Error: Invalid email address')

    })
} )