/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

const todoPage = new TodoPage()

describe('filtering', () => {
    beforeEach(() => {
        todoPage.navigate()
        
        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn JavasCript')
        todoPage.addTodo('Use Cypress')

        todoPage.toggleTodo(1)
    })

    it('should filter "Active" todos', () => {
        todoPage.showOnlyActivesTodos()

        todoPage.validateNumberOfTodosShown(2)
    })

    it('should filter "Completed" todos', () => {
        todoPage.showOnlyCompletedTodos()

        todoPage.validateNumberOfTodosShown(1)
    })

    it('should filter "All" todos', () => {
        todoPage.showAllTodos()

        todoPage.validateNumberOfTodosShown(3)
    })
})