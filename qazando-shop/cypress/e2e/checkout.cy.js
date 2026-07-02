///<reference types = "cypress"/>
import CheckoutPage from '../pages/CheckoutPage';

describe("Checkout", () => {
    beforeEach(() => {
        cy.visit('/checkout-one');
    });
    
    it("Checkout com sucesso!", () => {
        CheckoutPage.preencherFormulario()
                    .clicarSalvar()
                    .marcarCheckboxPagamento()
                    .clicarFinalizarPedido()
                    .verificarSucesso();
    });

    it("Checkout com First Name em branco", () => {
        CheckoutPage.preencherFormulario({firstName: null})
                    .clicarSalvar()
                    .verificarErroSemVisibilidade('O campo First Name deve ser prenchido');
    });

    it("Checkout com Last Name branco", () => {
        CheckoutPage.preencherFormulario({lastName: null})
                    .clicarSalvar()
                    .verificarErro('O campo Last Name deve ser prenchido');
    });

    it("Checkout com o campo Company em branco!", () => {
        CheckoutPage.preencherFormulario({company: null})
                    .clicarSalvar()
                    .verificarErro('O campo Company deve ser prenchido');
    });

    it("Checkout com o campo E-mail em branco", () => {
        CheckoutPage.preencherFormulario({email: null})
                    .clicarSalvar()
                    .verificarErro('O campo E-mail deve ser prenchido ou é inválido');
    });

    it("Checkout com o campo Country sem ser selecionado", () => {
        CheckoutPage.preencherFormulario({ country: 0 })
                    .clicarSalvar()
                    .verificarErro('O campo Country deve ser prenchido');
    });

    it("Checkout sem selecionar o campo State/City", () => {
        CheckoutPage.preencherFormulario({ city: 0 })
                    .clicarSalvar()
                    .verificarErro('O campo City deve ser prenchido');
    });

    it("Checkout com o campo Zip Code vazio!", () => {
        CheckoutPage.preencherFormulario({zip: null})
                    .clicarSalvar()
                    .verificarErro('O campo Zip Code deve ser prenchido');
    });

    it("Checkout o campo Full Address em branco", () => {
        CheckoutPage.preencherFormulario({address: null})
                    .clicarSalvar()
                    .verificarErro('O campo Address deve ser prenchido');
    });

    it("Checkout com o campo Additional Notes em branco", () => {
        CheckoutPage.preencherFormulario({notes: null})
                    .clicarSalvar()
                    .verificarErro('O campo Additional Notes deve ser prenchido');
    });

    it("Checkout com E-mail com formato inválido", () => {
        CheckoutPage.preencherFormulario({ email: 'dalila.com' })
                    .clicarSalvar()
                    .verificarErro('O campo E-mail deve ser prenchido ou é inválido');
    });

    it("Checkout sem salvar os dados de pagamento", () => {
        CheckoutPage.preencherFormulario()
                    .marcarCheckboxPagamento()
                    .clicarFinalizarPedido()
                    .verificarErro('Preencha os dados de pagamento!');
    });
});