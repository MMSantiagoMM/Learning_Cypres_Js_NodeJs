context('Example 01',()=>{
    beforeEach(()=>{
        cy.visit('/');
    });


    it('Test #1',()=>{

        cy.get('.new-todo').type("My long task 1 that I don't wanna do {enter}");
        cy.get('.new-todo').type("My long task t 3hat I don't wanna do {enter}");
        cy.contains('Completed').click();
        cy.contains('Active').click();
    });

    it('Test #2: Select using CSS selectors',()=>{

        cy.get('.new-todo').type("My long task 1 that I don't wanna do {enter}");
        cy.get('.new-todo').type("My long task t 3hat I don't wanna do {enter}");
        cy.get(':nth-child(2) > .view > .toggle').click();
        cy.contains('Completed').click();
    });

    it('Test #3: Select using Text content',()=>{

        cy.get('.new-todo').type("My long task 1{enter}");
        cy.get('.new-todo').type("My long task t 3hat I don't wanna do {enter}");
        cy.get('label:contains("My long task 1")')
            .parent().find('.toggle')
            .click();
        cy.contains('Completed').click();
    });

    it('Test #4: Assertions',()=>{
        cy.get('.todo-list li').should('have.length',2);
        cy.get('.new-todo').type("My long task 1{enter}");
        cy.get('.todo-list li').should('have.length',3);
        cy.get('label:contains("My long task 1")')
            .parent().find('.toggle').click();
        cy.get('label:contains("My long task 1")')
            .parent().parent()
            .should('have.class','completed');
    });

    it.only('Test #5: Reverting the desafult assertion', ()=>{
        cy.get('button.close').should('not.exist');
        //cy.get('button.close');
    })


})