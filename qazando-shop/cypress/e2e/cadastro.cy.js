import RegisterPage from '../pages/RegisterPage';

describe("Cadastro", () => {
    beforeEach(() => {
        cy.visit('/register');
    });

    it("Cadastro com sucesso", () => {
        RegisterPage.preencherFormulario()
                    .clicarRegistro()
                    .verificarSucesso();
    });

    it("Cadastro de usuário com nome vazio", () => {
        RegisterPage.preencherFormulario({ nome: null })
                    .clicarRegistro()
                    .verificarErroNome('O campo nome deve ser prenchido');
    });

    it("Cadastro de usuário com e-mail vazio", () => {
        RegisterPage.preencherFormulario({ email: null })
                    .clicarRegistro()
                    .verificarErroNome('O campo e-mail deve ser prenchido corretamente');
    });

    it("Cadastro de usuário com senha vazio", () => {
        RegisterPage.preencherFormulario({ senha: null })
                    .clicarRegistro()
                    .verificarErroSenha('O campo senha deve ter pelo menos 6 dígitos');
    });

    it("Cadastro de usuário com senha inválida", () => {
        RegisterPage.preencherFormulario({ senha: '12345' })
                    .clicarRegistro()
                    .verificarErroSenha('O campo senha deve ter pelo menos 6 dígitos');
    });
});



