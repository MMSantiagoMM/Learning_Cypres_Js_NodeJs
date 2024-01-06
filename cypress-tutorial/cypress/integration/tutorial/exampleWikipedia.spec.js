context('Wikipedia Page',()=>{

    beforeEach(()=>{
        cy.visit('/');

    })
   
    it('WikiTest 01 -- BDD Expectations',()=>{
        cy.get('#www-wikipedia-org #searchInput').type('Globant {enter}')

        cy.get('.infobox img').eq(0).should('be.visible');

        cy.get('.mediawiki #firstHeading').should('be.visible');

        cy.get('.mediawiki #firstHeading').should('contain','Globant');

    })

    it('WikiTest 02 -- Implicit wait',()=>{
        cy.get('#www-wikipedia-org #searchInput').type('Globant {enter}')

        cy.wait(6000);

        cy.get('.mediawiki #firstHeading').should('be.visible');

        cy.get('.mediawiki #firstHeading').should('contain','Globant');

    })



})