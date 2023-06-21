describe('Demo Cypress', () => {
    beforeEach(() => {

       // cy.viewport(1280, 1080)
      })


  it('Fluxo Principal', () => {
    cy.visit('https://form.jotform.com/231692676005660')
    cy.get('input[id="first_20"]').type('rafael')
    cy.get('input[id="last_20"]').type('Suzano')
    cy.get('input[id="input_19_full"]').type('(111) 111-1111')
    cy.get('input[id="input_23"]').type('rafaelsuzano@hotmail.com')


    cy.get('input[id="input_21_addr_line1"]').type('a')
    cy.get('input[id="input_21_addr_line2"]').type('a')
    cy.get('input[id="input_21_city"]').type('a')
    cy.get('input[id="input_21_state"]').type('a')
    cy.get('input[id="input_21_postal"]').type('111111111')

    cy.get('#input_2').click();

    cy.get('*[class^="thankyou-sub-text ty-text"]').
    should('be.visible')

    cy.contains('Thank You!')


})

it('Campo Obrigatório Email', () => {
  cy.visit('https://form.jotform.com/231692676005660')
  cy.get('input[id="first_20"]').type('rafael')
  cy.get('input[id="last_20"]').type('Suzano')
  cy.get('input[id="input_19_full"]').type('(111) 111-1111')
  //cy.get('input[id="input_23"]').type('rafaelsuzano@hotmail.com')


  cy.get('input[id="input_21_addr_line1"]').type('a')
  cy.get('input[id="input_21_addr_line2"]').type('a')
  cy.get('input[id="input_21_city"]').type('a')
  cy.get('input[id="input_21_state"]').type('a')
  cy.get('input[id="input_21_postal"]').type('111111111')
  cy.get('#input_2').click();


  cy.get('*[class^="form-line jf-required form-line-error"]').
  should('be.visible')

  cy.contains('This field is require')
  cy.get('*[class^="error-navigation-message"]').
  should('be.visible')
  cy.contains('This field is require')

})


it('Campo Obrigatório nome', () => {
  cy.visit('https://form.jotform.com/231692676005660')
 // cy.get('input[id="first_20"]').type('rafael')
  cy.get('input[id="last_20"]').type('Suzano')
  cy.get('input[id="input_19_full"]').type('(111) 111-1111')
  cy.get('input[id="input_23"]').type('rafaelsuzano@hotmail.com')
  cy.get('input[id="input_21_addr_line1"]').type('a')
  cy.get('input[id="input_21_addr_line2"]').type('a')
  cy.get('input[id="input_21_city"]').type('a')
  cy.get('input[id="input_21_state"]').type('a')
  cy.get('input[id="input_21_postal"]').type('111111111')

  cy.get('#input_2').click();


  cy.get('*[class^="form-line jf-required form-line-error"]').
  should('be.visible')

  cy.contains('This field is require')


})

context ('Nuclea',()=>{
it.skip('Acessar o site', () => {
  cy.visit('https://www.nuclea.com.br/')


  cy.title('Home - Nuclea')

})

it('Acessar o suporte  validar Campos Cidade Obrigatorio', () => {
    cy.visit('https://www.nuclea.com.br/')


    cy.title('Home - Nuclea')
    cy.get('footer').scrollIntoView()
    cy.get("div.elementor-element-b6b0e62 p:nth-of-type(5) > a").click();
    cy.get('footer').scrollIntoView()



       cy.get("#rd-text_field-_mI744vBjEJufuDoO_z0kg").type("Teste Entrevista");
       cy.get("#rd-email_field-gyJKtpzoChtgs0juA7SmTA").click();
       cy.get("#rd-email_field-gyJKtpzoChtgs0juA7SmTA").type("testeentrevista@testeentrevista.com");
       cy.get("#rd-email_field-gyJKtpzoChtgs0juA7SmTA").click();

       cy.get("#rd-text_field-ZQf1lWGKV7RWDsEb4OHY_A").click();
       cy.get("#rd-text_field-ZQf1lWGKV7RWDsEb4OHY_A").type("teste entrevista");
       cy.get("#rd-number_field-xnMsSVrUNJ-iYu0YHBYShA").click();
       cy.get("#rd-text_field-DKjPQoIPb8I_zMoCR-Q7Yw").click();
       cy.get("#rd-text_field-DKjPQoIPb8I_zMoCR-Q7Yw").type("Engenheiro QA");
       cy.get("#rd-phone_field-HKJmqtMCwNsHOhOzYpIYbQ").click();
       cy.get("#rd-phone_field-HKJmqtMCwNsHOhOzYpIYbQ").type("+55 (11) 94788-1630");
       cy.get("#rd-text_area_field-2vG7TKeKLaDSuYCB8fj3Aw").click();
       cy.get("#rd-text_area_field-2vG7TKeKLaDSuYCB8fj3Aw").type("teste entrevista");
       cy.get('#rd-select_field-fuSkhmpIjyvw2eiiaZdDag').select('SP')
       cy.get("#rd-select_field-LW9Jq1_pPPSd_8IIrgtjXQ").select("C3 Registradora")





       cy.get('#conversion-form-suporte-ce7d7712f2').submit();

      cy.get('#rd-select_field-fuSkhmpIjyvw2eiiaZdDag').
      should('be.visible')

        cy.contains('#conversion-form-suporte-ce7d7712f2 > div.bricks-form__fieldset > div:nth-child(8) > label.error', 'Campo obrigatório');



  });

it('Acessar o suporte  valida Titulo', () => {
    cy.visit('https://www.nuclea.com.br/suporte')
        cy.title().should('eq', 'Suporte - Nuclea')


})

})

})

