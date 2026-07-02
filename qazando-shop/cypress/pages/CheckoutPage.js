class CheckoutPage {
  // Elementos do formulário
  get firstNameInput() {
    return cy.get('#fname');
  }

  get lastNameInput() {
    return cy.get('#lname');
  }

  get companyInput() {
    return cy.get('#cname');
  }

  get emailInput() {
    return cy.get('#email');
  }

  get countrySelect() {
    return cy.get('#country');
  }

  get citySelect() {
    return cy.get('#city');
  }

  get zipInput() {
    return cy.get('#zip');
  }

  get addressInput() {
    return cy.get('#faddress');
  }

  get notesInput() {
    return cy.get('#messages');
  }

  get paymentCheckbox() {
    return cy.get('#css');
  }

  get saveButton() {
    return cy.get('.theme-btn-one').contains('Save');
  }

  get placeOrderButton() {
    return cy.get('.theme-btn-one').contains('Place Order');
  }

  get successMessage() {
    return cy.get('.offer_modal_left').contains('Order success!');
  }

  get errorMessage() {
    return cy.get('#errorMessageFirstName');
  }

  // Ações
  preencherNome(firstName) {
    this.firstNameInput.type(firstName);
    return this;
  }

  preencherSobrenome(lastName) {
    this.lastNameInput.type(lastName);
    return this;
  }

    preencherEmpresa(company) {
    this.companyInput.type(company);
    return this;
  }

  preencherEmail(email) {
    this.emailInput.type(email);
    return this;
  }

  preencherPais(country) {
    this.countrySelect.select(country);
    return this;
  }

  preencherCidade(city) {
    this.citySelect.select(city);
    return this;
  } 

    preencherCep(zip) {
    this.zipInput.type(zip);
    return this;
  }

    preencherEndereco(address) {  
        this.addressInput.type(address);
        return this;
    }

    preencherNotas(notes) {
        this.notesInput.type(notes);
        return this;
    }

  preencherFormulario(dados = {}) {
    const {
      firstName = 'Dalila',
      lastName = 'Xavier',
      company = 'Teste',
      email = 'dalila@teste.com',
      country = 2,
      city = 1,
      zip = '00000',
      address = 'Cidade teste',
      notes = 'Notas de testes'
    } = dados;

    if (firstName) this.preencherNome(firstName);
    if (lastName) this.preencherSobrenome(lastName);
    if (company) this.preencherEmpresa(company);
    if (email) this.preencherEmail(email);
    if (country) this.preencherPais(country);
    if (city) this.preencherCidade(city);
    if (zip) this.preencherCep(zip);
    if (address) this.preencherEndereco(address);
    if (notes) this.preencherNotas(notes);

    return this;
  }

  clicarSalvar() {
    this.saveButton.click();
    return this;
  }

  marcarCheckboxPagamento() {
    this.paymentCheckbox.check();
    return this;
  }

  clicarFinalizarPedido() {
    this.placeOrderButton.click();
    return this;
  }

  limparCampo(selector) {
    cy.get(selector).clear();
    return this;
  }

  // Validações
  verificarSucesso(mensagem = 'Order success!') {
    this.successMessage.should('be.visible').should('have.text', mensagem);
    return this;
  }

  verificarErro(mensagem) {
    this.errorMessage.should('be.visible').should('have.text', mensagem);
    return this;
  }

  verificarErroSemVisibilidade(mensagem) {
    this.errorMessage.eq(0).should('have.text', mensagem);
    return this;
  }
}

export default new CheckoutPage();
