# 🧪 QAZANDO SHOP

Este projeto contém testes automatizados end-to-end (E2E) realizados na aplicação QAZANDO SHOP, utilizando o framework Cypress.

Os testes foram desenvolvidos com foco em validação de fluxos essenciais de um e-commerce, incluindo cenários positivos e negativos.

## 🎯 Objetivo do Projeto

Este projeto tem como objetivo:

* Validar fluxos principais de um e-commerce
* Praticar automação de testes E2E com Cypress
* Aplicar boas práticas de QA em cenários reais
* Simular comportamentos de usuário final
* Evoluir habilidades em automação de testes

## 🔍 Fluxos testados

Foram automatizados os seguintes fluxos:

🔐 Login
* Login com sucesso
* Login com senha inválida
* Login com e-mail inválido
* Login com campos vazios

📝 Cadastro
* Cadastro com sucesso
* Campos obrigatórios não preenchidos
* Validação de senha com menos de 6 caracteres

🛒 Checkout
* Checkout com sucesso
* Validação de campos obrigatórios
* Validação de e-mail inválido
* Validação de campos vazios
* Teste de não finalização sem pagamento

## 🛠️ Tecnologias utilizadas
* Cypress
* JavaScript
* Node.js
* Git
* GitHub

📁 Estrutura do projeto

```
qazando-shop/
│
├── cypress.config.js
├── package.json
├── package-lock.json
│
└── cypress/
    ├── e2e/
    │   ├── login.cy.js
    │   ├── cadastro.cy.js
    │   └── checkout.cy.js
    │
    ├── fixtures/
    │
    └── support/
```

## 🚀 Como executar o projeto
1. Clonar o repositório - git clone <URL_DO_REPOSITORIO>
2. Acessar a pasta do projeto - cd qazando-shop
3. Instalar dependências - npm install
4. Abrir o Cypress - npx cypress 

## 💬 Feedbacks

Este projeto foi desenvolvido com foco em aprendizado prático de QA.

Feedbacks, sugestões e recomendações de boas práticas são sempre bem-vindos e ajudam na evolução profissional contínua.