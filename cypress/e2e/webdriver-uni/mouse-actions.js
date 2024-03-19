
describe('Test mouse actions', () => {

    beforeEach( () => {
        cy.visit('https://www.webdriveruniversity.com') 
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })

    it.skip('Scroll element into view', () => {

        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
  
    });

    it('I should be able to drag and drop a draggable item', () => {

        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
  
    });

    it('I should be able to perform a double mouse click', () => {

       cy.get('#double-click').dblclick();

    });

    it('I should be able to hold down the left mouse click button on a given element', () => {

        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
            
    });
 
     });