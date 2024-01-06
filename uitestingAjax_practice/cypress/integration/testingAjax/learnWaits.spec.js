context('Ajax page',()=>{

    beforeEach(()=>{
        cy.visit('/');
    })

    it('Test 01',()=>{
        cy.get('#ajaxButton').click();

        cy.wait(12000);
        cy.get('.bg-success').as('success');

   
        // cy.get('.bg-success').as('getButton');
        // cy.wait('@getButton').its('response.statusCode').should('eq',200);

    })


})