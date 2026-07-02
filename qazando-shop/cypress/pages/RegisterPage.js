class RegisterPage {
  // Elementos
  get nameInput() {
    return cy.get('#user');
  }

  get emailInput() {
    return cy.get('#email');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get registerButton() {
    return cy.get('#btnRegister');
  }

  get successMessage() {
    return cy.get('#swal2-title');
  }

  get errorMessageFirstName() {
    return cy.get('#errorMessageFirstName');
  }

  get errorMessagePassword() {
    return cy.get('.errorLabel');
  }

  // Ações
  preencherNome(nome) {
    this.nameInput.type(nome);
    return this;
  }

  preencherEmail(email) {
    this.emailInput.type(email);
    return this;
  }

  preencherSenha(senha) {
    this.passwordInput.type(senha);
    return this;
  }

  clicarRegistro() {
    this.registerButton.click();
    return this;
  }

  preencherFormulario(dados = {}) {
    const {
      nome = 'Dalila',
      email = 'dalila@teste.com',
      senha = '123456'
    } = dados;

    if (nome) this.preencherNome(nome);
    if (email) this.preencherEmail(email);
    if (senha) this.preencherSenha(senha);

    return this;
  }

  // Validações
  verificarSucesso(mensagem = 'Cadastro realizado!') {
    this.successMessage.should('be.visible').should('have.text', mensagem);
    return this;
  }

  verificarErroNome(mensagem) {
    this.errorMessageFirstName.should('be.visible').should('have.text', mensagem);
    return this;
  }

  verificarErroSenha(mensagem) {
    this.errorMessagePassword.should('be.visible').should('have.text', mensagem);
    return this;
  }
}

export default new RegisterPage();
