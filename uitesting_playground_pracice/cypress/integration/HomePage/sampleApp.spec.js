context('Home Page',()=>{
    beforeEach(()=>{
        cy.visit('/');
    });

    it('Test #1',()=>{
        cy.get("[placeholder='User Name']")
            .type("ThisIsMyTestName");
        
        cy.get("[placeholder='********']")
            .type("pwd");

        cy.get("#login").click();

        cy.get('.text-success')
            .should('be.visible');
    });


})