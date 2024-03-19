describe('Alias and invoke', () => {

    it('Validate a specific haircare product', () => {
        cy.visit('https://automationteststore.com');
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').then((text) => {
            expect(text.length).to.be.gt(5);
            expect(text).to.include('Seaweed Conditioner');
        });
    });

    it('Validate product thumbnail using alias', () => {
        cy.visit('https://automationteststore.com');
        cy.get('.thumbnail').as('productThumbnails');
        cy.get('@productThumbnails').should('have.length', 16);
        cy.get('@productThumbnails').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
    });

    it.only('Calculate total of normal and sale products', () => {
        cy.visit('https://automationteststore.com');
        cy.get('.thumbnail').as('productThumbnails');
        
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

        let itemsTotal = 0;

        cy.get('@itemPrice').then($linkText => {
            let itemPriceTotal = 0;
            let itemPrice = $linkText.split('$').filter(Boolean); // Splits into an array of substrings and removes empty strings
            
            itemPrice.forEach(price => {
                cy.log(price);
                itemPriceTotal += Number(price);
            });

            itemsTotal += itemPriceTotal;
            cy.log('Non sale price items total: ' + itemPriceTotal);
        });

        cy.get('@saleItemPrice').then($linkText => {
            let saleItemsPrice = 0;
            let saleItemPrice = $linkText.split('$').filter(Boolean); // Will save all @saleItemPrices and store them in saleItemPrice
            
            saleItemPrice.forEach(price => {
                cy.log(price);
                saleItemsPrice += Number(price);
            });

            itemsTotal += saleItemsPrice;
            cy.log('Sale price items total: ' + saleItemsPrice);
        })
        .then(() => {
            cy.log("The total price of all products: " + itemsTotal);
            expect(itemsTotal).to.equal(660.5);
        });
    });
});
