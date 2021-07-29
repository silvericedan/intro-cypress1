/// <reference types="cypress" />

it('should navigate to the TodoMVC App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh')

    cy.get('.new-todo').type("Clean room{enter}")

    //cy.get('label').should('have.text', 'Clean roomba') //making it fail the test
    cy.get('label').should('have.text', 'Clean room') //validations are made with .should()

    cy.get('.toogle').should('not.be.checked')

    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line','line-through') //check to see if has the css of line-through

    cy.contains('Clear').click()

    cy.get('.todo-list').should('not.have.descendants', 'li') //checking to see if the list have elements after clearing it

})