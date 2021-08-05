/// <reference types="cypress" />

export function navigate () {
    cy.visit('http://todomvc-app-for-testing.surge.sh')
}

export function addTodo(todoText){
    cy.get('.new-todo', { timeout: 6000 }).type(todoText +"{enter}")
}

export function validateTodoTxt(todoIndex, expectedText){
    cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`).should('have.text', expectedText)
}

export function toggleTodo(todoIndex){
    cy.get(`.todo-list li:nth-child(${todoIndex +1}) .toggle`).click()
}

export function clearCompleted(){
    cy.contains('Clear completed').click()
}

export function validateToggleState(todoIndex, shouldBeToggled){
    const label = cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`)
    label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
}

export function validateTodoCompletedState(todoIndex, shouldBeCompleted){
    const l = cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`)
    l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
}

export function validateListHaveElements(shouldHaveElements){
    cy.get('.todo-list').should(`${shouldHaveElements? '' : 'not.'}have.descendants`, 'li')
}

export function validateNumberOfTodosShown(expectedNumberOfTodos){
    cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
}

//this ones are used by todomvc-filtering

export function showOnlyActivesTodos(){
    cy.contains('Active').click()
}

export function showOnlyCompletedTodos(){
    cy.contains('Completed').click()
}

export function showAllTodos(){
    cy.contains('All').click()
}