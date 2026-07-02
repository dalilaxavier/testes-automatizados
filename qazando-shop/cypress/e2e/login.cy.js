/// <reference types="cypress" />
import LoginPage from '../pages/LoginPage';

describe("Login", () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it("Login com sucesso", () => {
        LoginPage.preencherDados()
            .clicarLogin()
            .verificarMensagemDeSucesso('Login realizado');

    })

    it("Login com senha inválida", () => {
        LoginPage.preencherDados({password: '123' })
            .clicarLogin()
            .verificarMensagemDeErro('Senha inválida.');
    });

    it("Login com e-mail inválido", () => {
        LoginPage.preencherDados({ email: 'dalila.teste.com' })
            .clicarLogin()
            .verificarMensagemDeErro('E-mail inválido.');
    });

    it("Login com e-mail e senha vazio", () => {
        LoginPage.preencherDados({ email: null, password: null })
            .clicarLogin()
            .verificarMensagemDeErro('E-mail inválido.');
    });

    it("Login com e-mail vazio", () => {
        LoginPage.preencherDados({email: null})
            .clicarLogin()
            .verificarMensagemDeErro('E-mail inválido.');
    });

    it("Login com senha vazia", () => {
        LoginPage.preencherDados({password: null})
            .clicarLogin()
            .verificarMensagemDeErro('Senha inválida.');
    })
})