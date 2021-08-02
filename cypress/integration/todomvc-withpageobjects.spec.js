/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('todo actions', () => {

    const todoPage = new TodoPage()

    beforeEach(()=> {
        todoPage.navigate()

        todoPage.addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {

        todoPage.validateTodoTxt(0, 'Clean room')

        cy.get('.toogle').should('not.be.checked')
    })

    it('should mark a todo as completed', () => {

        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through') //check to see if has the css of line-through
    })

    it('should clear completed todos', () => {

        cy.get('.toggle').click()

        cy.contains('Clear').click()
        
        cy.get('.todo-list').should('not.have.descendants', 'li') //checking to see if the list have elements after clearing it

    })
})
