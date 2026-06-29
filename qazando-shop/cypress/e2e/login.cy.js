describe("Login", () => {
    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/login')
    }
)

    it("Login com sucesso", () => {
        cy.get('#user').type('dalila@teste.com')
        cy.get('#password').type('12345678')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').should('be.visible').should('have.text', 'Login realizado')

    })

    it("Login com senha inválida", () => {
        cy.get('#user').type('dalila@teste.com')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible').should('have.text', 'Senha inválida.')
    })


    it("Login com E-mail inexistente", () => {
        cy.get('#user').type('dalila.teste.com')
        cy.get('#password').type('12345678')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible').should('have.text', 'E-mail inválido.')
    })

    it("Login com E-mail e Senha vazio", () => {
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible').should('have.text', 'E-mail inválido.')
    })

    it("Login com E-mail em branco", () => {
        cy.get('#password').type('12345678')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible').should('have.text', 'E-mail inválido.')
    })

    it("Login com o campo Senha em branco", () => {
        cy.get('#user').type('dalila@teste.com')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('be.visible').should('have.text', 'Senha inválida.')
    })
})