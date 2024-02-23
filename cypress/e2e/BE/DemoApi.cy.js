describe('Demo API', () => {


  it('API', () => {
    cy.api({
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    })
  })

})