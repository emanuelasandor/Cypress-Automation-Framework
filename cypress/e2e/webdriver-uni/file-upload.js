describe('Test file uploads via webdriveruni', () => {

    beforeEach( () => {
        cy.visit('https://www.webdriveruniversity.com') 
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
    })

    it('Upload a file', () => {

        cy.get("#myFile").selectFile("cypress/fixtures/picture.png");
        cy.get('#submit-button').click();
        
        })

    it('Upload no file', () => {

        cy.get('#submit-button').click();
        cy.on('window:alert', (str) => {
            expect(str).contains('You need to select a file')
        })
    })

});
