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

        todoPage.validateToggleState(0,false)
    })

    it('should mark a todo as completed', () => {

        todoPage.toggleTodo(0)

        todoPage.validateTodoCompletedState(0,true) //check to see if has the css of line-through
    })

    it('should clear completed todos', () => {

        todoPage.toggleTodo(0)

        todoPage.clearCompleted()
        
        todoPage.validateListHaveElements(false)
        //cy.get('.todo-list').should('not.have.descendants', 'li') //checking to see if the list have elements after clearing it

    })
})
