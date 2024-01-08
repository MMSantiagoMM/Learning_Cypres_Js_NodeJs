import TodosPage from '../../support/pages/TodosPage.js';
const todosPage = new TodosPage();

const task1 = 'Present POM';
const task2 = 'Teach Cypress';

context('Example 01',()=>{
    beforeEach(()=>{
        cy.visit('/');
    });

    it('Test #1',()=>{
        todosPage.addTodo(task1);
        todosPage.addTodo(task2);

        //todosPage.todoCount().should('eq',4);

        //todosPage.clickTodoToggle(2);

        //todosPage.todoCount().should('eq',3);

        todosPage.clickCompletedLink();
    });





});