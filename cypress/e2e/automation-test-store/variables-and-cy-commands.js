describe('Verify variables, cypress commands, and jquery commands', () => {

    it('Navigating to specific product pages', () => {

         cy.visit('https://automationteststore.com')
        //recommended approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

       cy.get('.maintext').then(($headerText)=>{
            const headerText = $headerText.text()
            cy.log("Found header text: ", + headerText)
            expect(headerText).is.eq('Makeup')
        })
        

    });

    it.only('Validate properties of the Contact Us page', () => {

        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        //uses cypress commands and chaining 
        cy.get('#ContactUsFrm').find('#field_11').should('contain', 'First name:')

        //JQuery approach
        cy.get('#ContactUsFrm').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contains('First name:')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)

            })
        })

        
      
       })
       

   });
