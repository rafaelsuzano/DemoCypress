
/**
 * @description Teste de API utilizando Cypress
 * @see https://docs.cypress.io/api/commands/api
 * @see https://jsonplaceholder.typicode.com/
 * @see https://docs.cypress.io/guides/tooling/working-with-apis
 * @see https://docs.cypress.io/guides/tooling/assertions
 * @see https://docs.cypress.io/guides/tooling/working-with-commands
 * @see https://docs.cypress.io/guides/tooling/working-with-plugins
 * @see https://docs.cypress.io/guides/tooling/working-with-environment-variables
 * @see https://docs.cypress.io/guides/tooling/working-with-configuration
 * @see https://docs.cypress.io/guides/tooling/working-with-fixtures
 * @see https://docs.cypress.io/guides/tooling/working-with-commands#API
 * @see https://docs.cypress.io/guides/tooling/working-with-commands#Assertions
 * @see https://docs.cypress.io/guides/tooling/working-with-commands#Plugins
 * @see https://docs.cypress.io/guides/tooling/working-with-commands#Environment-Variables
 * @see https://docs.cypress.io/guides/tooling/working-with-commands#Configuration    
 * @author Rafael Suzano Cruz
 */
describe('Demo API', () => {


  it('API', () => {
    cy.api({
      url: 'https://jsonplaceholder.typicode.com/todos/1',

      
    })
    .then(Response => {
      expect(Response.status).to.eq(200)

      cy.log(JSON.stringify(Response.body))

  })
})
})