///<reference types = "cypress"/>
const preencherCheckout = () => {
    cy.get("#fname").type("Dalila")
    cy.get("#lname").type("Xavier")
    cy.get("#cname").type("Teste")
    cy.get("#email").type("dalila@teste.com")
    cy.get("#country").select(2)
    cy.get("#city").select(1)
    cy.get("#zip").type("00000")
    cy.get("#faddress").type("Cidade teste")
    cy.get("#messages").type("Notas de testes")
}

describe("Checkout", () => {
    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/checkout-one')
    })

    it("Checkout com sucesso!", () => {
        preencherCheckout()

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#css").check()

        cy.get(".theme-btn-one").contains("Place Order").click()

        cy.get(".offer_modal_left").contains("Order success!").should("be.visible").should("have.text", "Order success!")
    })

    it("Checkout com First Name em branco", () => {
        preencherCheckout()

        cy.get("#fname").clear()

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "O campo First Name deve ser prenchido")
    })

    it("Checkout com Last Name branco", () => {
        preencherCheckout()

        cy.get("#lname").clear()

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "O campo Last Name deve ser prenchido")
    })

    it("Checkout com o campo Company em branco!", () => {
        preencherCheckout()

        cy.get("#cname").clear()

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "O campo Company deve ser prenchido")
    })

    it("Checkout com o campo E-mail em branco", () => {
        preencherCheckout()

        cy.get("#email").clear()

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "O campo E-mail deve ser prenchido ou é inválido")
    })

    it("Checkout com o campo Country sem ser selecionado", () => {
        cy.get("#fname").type("Dalila")
        cy.get("#lname").type("Xavier")
        cy.get("#cname").type("Teste")
        cy.get("#email").type("dalila@teste.com")

        cy.get("#city").select(1)

        cy.get("#zip").type("00000")
        cy.get("#faddress").type("Cidade teste")
        cy.get("#messages").type("Notas de testes")

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "O campo Country deve ser prenchido")
    })

    it("Checkout sem selecionar o campo State/City", () => {
        cy.get("#fname").type("Dalila")
        cy.get("#lname").type("Xavier")
        cy.get("#cname").type("Teste")
        cy.get("#email").type("dalila@teste.com")

        cy.get("#country").select(2)

        cy.get("#zip").type("00000")
        cy.get("#faddress").type("Cidade teste")
        cy.get("#messages").type("Notas de testes")

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "O campo City deve ser prenchido")

    })

    it("Checkout com o campo Zip Code vazio!", () => {
        preencherCheckout()

        cy.get("#zip").clear()

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "O campo Zip Code deve ser prenchido")
    })

    it("Checkout o campo Full Address em branco", () => {
        preencherCheckout()

        cy.get("#faddress").clear()

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "O campo Address deve ser prenchido")

    })

    it("Checkout com o campo Additional Notes em branco", () => {
        preencherCheckout()

        cy.get("#messages").clear()

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "O campo Additional Notes deve ser prenchido")
    })

    it("Checkout com E-mail com formato inválido", () => {
        preencherCheckout()

        cy.get("#email").clear().type("dalila.com")

        cy.get(".theme-btn-one").contains("Save").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "O campo E-mail deve ser prenchido ou é inválido")
    })

    it("Checkout sem salvar os dados de pagamento", () => {
        preencherCheckout()

        cy.get("#css").check()

        cy.get(".theme-btn-one").contains("Place Order").click()

        cy.get("#errorMessageFirstName").should("be.visible").should("have.text", "Preencha os dados de pagamento!")
    })
})