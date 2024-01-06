context('QA Test',()=>{

    beforeEach(()=>{
        cy.visit('/');


    });

    it('Test #1',()=>{

        cy.get('#g4072-fullname').type('Santiago');

        cy.get('#g4072-email').type('Santiago@gmail.com');

        cy.get('#g4072-phonenumber').type(344554554);

        cy.get('#g4072-gender-button > .ui-selectmenu-icon').click();

        cy.get('select#g4072-gender');

        cy.get('#ui-id-2').click();

        cy.get('[name="g4072-yearsofexperience"]').check("4");

        cy.get('[value="Automation testing"]').click();

        cy.get('[value="DB testing"]').click();

        cy.get('#g4072-qatools-button').click();

        cy.get('#ui-id-6').click();

        cy.get('[data-id-attr="placeholder"]').click();

        cy.get('.contact-form-submission div:nth-child(4)').should('contain.text','Santiago')

        cy.get('.contact-form-submission div:nth-child(6)').should('contain.text','Santiago@gmail.com')

        cy.get('.contact-form-submission div:nth-child(8)').should('contain.text',344554554)

        cy.get('.contact-form-submission div:nth-child(10)').should('contain.text','Female')

        cy.get('.contact-form-submission div:nth-child(12)').should('contain.text',4)

        cy.get('.contact-form-submission div:nth-child(14)').should('contain.text','Automation testing, DB testing')

        cy.get('.contact-form-submission div:nth-child(16)').should('contain.text','Cypress')


        


        



    })




})