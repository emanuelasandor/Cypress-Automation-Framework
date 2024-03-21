describe("Hooks", () => {
    before( () => {
        cy.log("runs once before all tests in the block")

    })

    after( () => {
        cy.log("runs once after all tests in the block")
        
    })

    beforeEach( () => {
        cy.log("runs before each tests in the block")
        
    })

    afterEach( () => {
        cy.log("runs after each tests in the block")
        
    })

    it('Example test 1', () => {

        cy.log("example test 1")
    })

    it('Example test 2', () => {

        cy.log("example test 1")
    })
})