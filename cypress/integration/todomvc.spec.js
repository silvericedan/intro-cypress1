/// <reference types="cypress" />

it('should navigate to the TodoMVC App', () => {
    //cy.visit('http://todomvc-app-for-testing.surge.sh')

    //cy.get('.new-todo').type("Clean room{enter}")
    //if a test takes more than 4 seconds, it fails. There is a workaround, see next

    cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')

    cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")

    cy.get('.toggle').click()

    cy.contains('Clear completed').click()
})