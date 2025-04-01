import { mensagem, FluxoCadastro } from "../../support/utils"

describe('Demo Cypress', () => {
  beforeEach(() => {

  })


  it('Fluxo Cadastro', () => {
    cy.fixture('cadastro.json').then((dados) => {
      dados.forEach((dados) => {
        cy.log(dados.cenario)
        cy.visit('https://form.jotform.com/231692676005660')

        FluxoCadastro(String(dados.FirstName), String(dados.LastName), String(dados.cep), String(dados.email), String(dados.esperado), dados.telefone)


        cy.screenshot(dados.cenario)
        cy.addTestContext(dados.cenario);
        cy.reload()

      })
    })
  })
})



