class LoginPage {
    // Elementos da página de login
    get emailInput() {
        return cy.get('#user');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('#btnLogin');
    }

    get mensagemDeSucesso() {
        return cy.get('#swal2-title');
    }

    get mensagemDeErro() {
        return cy.get('.invalid_input');
    }

    // Ações
    preencherEmail(email) {
        this.emailInput.type(email);
        return this;
    }

    preencherSenha(password) {
        this.passwordInput.type(password);
        return this;
    }

    clicarLogin() {
        this.loginButton.click();
        return this;
    }

    preencherDados(dados = {}) {
        const {
            email = 'dalila@teste.com',
            password = '12345678'
        } = dados;

        if (email) this.preencherEmail(email);
        if (password) this.preencherSenha(password);
        return this;
    }

    // Validações

    verificarMensagemDeSucesso(mensagem) {
        this.mensagemDeSucesso.should('be.visible').should('have.text', mensagem);
        return this;
    }

    verificarMensagemDeErro(mensagem) {
        this.mensagemDeErro.should('be.visible').should('have.text', mensagem);
        return this;
    }
}


export default new LoginPage();
