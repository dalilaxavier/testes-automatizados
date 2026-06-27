describe("Cadastro", () => {
    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/register');
    }
)

    it("Cadastro com sucesso", () => {
        cy.get('#user').type('Dalila')
        cy.get('#email').type('dalila@teste.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#swal2-title').should('be.visible').should('have.text', 'Cadastro realizado!')
    })

    it("Cadastro com o campo Nome em branco", () => {
        cy.get('#email').type('dalila@teste.com')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', 'O campo nome deve ser prenchido')
    })

    it("Cadastro com o campo E-mail em branco", () => {
        cy.get('#user').type('Dalila')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

    it("Cadastro com o campo Senha em branco", () => {
        cy.get('#user').type('Dalila')
        cy.get('#email').type('dalila@teste.com')
        cy.get('#btnRegister').click()
        cy.get('.errorLabel').should('be.visible').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it("Cadastro com senha menor que 6 dígitos", () => {
        cy.get('#user').type('Dalila')
        cy.get('#email').type('dalila@teste.com')
        cy.get('#password').type('12345')
        cy.get('#btnRegister').click()
        cy.get('.errorLabel').should('be.visible').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

});



