afterEach(() => {
    const test = Cypress.currentTest; // Pega o teste atual em execução
    const payload = {
        measurement: 'cypress_test_results',
        fields: {
            testName: test.title,
            status: test.state, // 'passed' ou 'failed'
            duration: test.duration // Duração do teste em milissegundos
        },
        tags: {
            suite: test.parent.title
        }
    };

    cy.request({
        method: 'POST',
        url: 'http://localhost:8086/write?db=cypress_db',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
});
