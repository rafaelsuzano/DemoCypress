function mensagem(texto) {
cy.log("ola")

}

function cadastro (nome,sobrenome)
{
    cy.get('input[id="first_20"]').type(nome)
    cy.get('input[id="last_20"]').type(sobrenome)
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
}
 module.exports = {
    cadastro,
    mensagem
 }