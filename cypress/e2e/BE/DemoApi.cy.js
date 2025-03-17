

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