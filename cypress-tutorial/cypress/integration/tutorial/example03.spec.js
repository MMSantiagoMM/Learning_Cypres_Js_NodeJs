beforeEach(()=>{
    cy.log('Root Before Each')
})

context('Hooks',()=>{
    before(()=>{cy.log('Before: Run once before all test cases')})
    beforeEach(()=>{cy.log('Before: Run before each test cases')})

    it('Test 01',()=>{

    });

    it('Test 02',()=>{})

        afterEach(()=>{cy.log("Runs after each test")})
        after(()=>{cy.log("Runs after all test cases")})
    


});