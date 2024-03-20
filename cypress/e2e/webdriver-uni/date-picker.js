describe('Test Datepicker via webdriveruni', () => {

    it.only('Select date from datepicker', () => {

        cy.visit('https://www.webdriveruniversity.com') 
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('#datepicker').click();
        
        // let date = new Date();
        // date.setDate(date.getDate()) 
        // cy.log(date.getDate()) //get the current date e.g. 19

        // let date1 = new Date();
        // date1.setDate(date1.getDate() + 5)
        // cy.log(date1.getDate()) //current date + 5 e.g. 24

        var date = new Date();
        date.setDate(date.getDate() + 1);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDate = date.getDate();

        cy.log('Future year to select: ' + futureYear);
        cy.log('Future year to select: ' + futureMonth);
        cy.log('Future date to select: ' + futureDate);

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then( () => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDate).click()
        }
        selectMonthAndYear();
        selectFutureDay();
    });

} )