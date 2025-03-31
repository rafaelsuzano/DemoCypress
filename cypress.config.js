const { defineConfig } = require('cypress');



module.exports = defineConfig({

  async setupNodeEvents(on, config) {

},

  e2e: {
    retries:2,
    defaultCommandTimeout: 60000, // Set to 60 seconds
    experimentallSudio: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports', // Diretório dos relatórios
    overwrite: true,            // Não sobrescreve relatórios anteriores
    html: true,                 // Apenas JSON
    json: false      ,             // Necessário para combinar os relatórios
    embeddedScreenshots: true,
    inlineAssets: true,  // Inclui capturas de tela diretamente no relatório
    reportTitle: "Relatório Testes ",
    reportPageTitle: "Relatório Testes ",

  },
});