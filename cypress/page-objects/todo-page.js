export class TodoPage {
    navigate () {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    addTodo(todoText){
        cy.get('.new-todo', { timeout: 6000 }).type(todoText +"{enter}")
    }

    validateTodoTxt(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`).should('have.text', expectedText)
    }

    toggleTodo(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex +1}) .toggle`).click()
    }

    clearCompleted(){
        cy.contains('Clear completed').click()
    }

    validateToggleState(todoIndex, shouldBeToggled){
        const label = cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`)
        label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
    }

    validateTodoCompletedState(todoIndex, shouldBeCompleted){
        const l = cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`)
        l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
    }

    validateListHaveElements(shouldHaveElements){
        cy.get('.todo-list').should(`${shouldHaveElements? '' : 'not.'}have.descendants`, 'li')
    }
}