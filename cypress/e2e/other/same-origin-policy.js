/// <reference types = "Cypress" />


describe('Cypress web security', () => {

    it('Validate visiting two different domains', () => {
        //will fail, can't open 2 different domains
        cy.visit('https://www.webdriveruniversity.com')
        cy.visit('https://automationteststore.com')

    });

    it.only('Validate visiting two different domains via user actions', () => {
        //this will also fail
        cy.visit('https://www.webdriveruniversity.com')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()     

        //now it;s passed because i added in cypres.config.js the line: chromeWebSecurity: false
    })

    it('Origin command', () => {
        cy.origin('webdriveruniverisity.com', ()=>{
            cy.visit("/");
        })

        cy.origin('automationstore.com', ()=>{
            cy.visit("/");
        })

        cy.visit("https://www.webdriveruniverisity.com")
        cy.visit("https://selectors.webdriveruniverisity.com")
    })
} )