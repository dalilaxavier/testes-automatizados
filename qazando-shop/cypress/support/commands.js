Cypress.Commands.add('login', (email = 'dalila@teste.com', password = '12345678') => {
  cy.get('#user').type(email);
  cy.get('#password').type(password);
  cy.get('#btnLogin').click();
  cy.get('#swal2-title').should('be.visible').should('have.text', 'Login realizado');
});