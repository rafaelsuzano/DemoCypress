describe('Demo Cypress', () => {
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
it('Acessar o site', () => {
  cy.visit('https://www.nuclea.com.br/')


  cy.title('Home - Nuclea')

})

it('Acessar o suporte', () => {
  cy.visit('https://www.nuclea.com.br/')


  cy.title('Home - Nuclea')

})



})
})
