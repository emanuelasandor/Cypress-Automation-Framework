describe('Iterate over elements', () => {

    it('Log information of all haircare products', () => {

        cy.visit('https://automationteststore.com')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        //iterates through all elements like: Index: 0 : Seaweed Conditioner , Index: 1 : Pantene Pro-V Conditioner, Classic Care etc
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) =>{
           cy.log("Index: " + index + " : " + $el.text())
           
        });
    })

    it('Add a specific product to basket', () => {

        cy.visit('https://automationteststore.com')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) =>{
            if($el.text().includes('Curls to straight Shampoo'))
                cy.wrap($el).click() //wrap yieald - s when a command "yields" an element, it means the command provides access to a specific HTML element in the web page you're testing
         });

    })

        
      
})
       