export function mensagem(texto) {
cy.log("ola" + texto)

}


export function FluxoCadastro(FirstName,LastName,cep,email,esperado,telefone)
{

   cy.get('input[id="first_20"]').type(FirstName)
   cy.get('input[id="last_20"]').type(LastName)
   cy.get('input[id="input_19_full"]').type(telefone)
   cy.get('input[id="input_23"]').type(email)
   cy.get('input[id="input_21_addr_line1"]').type('a')
   cy.get('input[id="input_21_addr_line2"]').type('a')
   cy.get('input[id="input_21_city"]').type('a')
   cy.get('input[id="input_21_state"]').type('a')
   cy.get('input[id="input_21_postal"]').type(cep)
   cy.get('#input_2').click();


   cy.contains(esperado)
}