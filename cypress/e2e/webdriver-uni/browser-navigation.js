/// <reference types = "Cypress" />


describe('Validate webdriveruni homepage links', () => {

    it.only('Confirm links redirect to the correct pages', () => {

        cy.visit('https://www.webdriveruniversity.com') 
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()
        cy.url().should('include', 'https://www.webdriveruniversity.com')
       // cy.reload(true) //reload without using cache

        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get("#login-portal").invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')
       
        //click in To do list, validate url title, go back to home page
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-Lis')
        cy.go('back')
        cy.url().should('include', 'https://www.webdriveruniversity.com')
    });

} )