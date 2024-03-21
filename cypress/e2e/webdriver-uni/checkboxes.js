
describe('Verify checkboxes via webdriveruni', () => {

    beforeEach( () => {

        cy.visit('https://www.webdriveruniversity.com') 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it('Check and validate checkbox', () => {

        //cy.get("input[value='option-1']").check().should('be.checked')
        cy.get("input[value='option-1']").as('option-1')
        cy.get('@option-1').check().should('be.checked');
    });

    it('Uncheck and validate checkbox 3', () => {

        cy.get("input[value='option-3']").as('option-3')
        cy.get('@option-3').should('be.checked');
        cy.get('@option-3').uncheck().should('not.be.checked')
    });

    it('Check multiple checkboxes using one command', () => {

        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    });

} )