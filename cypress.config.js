const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Demo Cypress Web/API',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    //timestamp:"mmddyyyy_HHMMss",
    videoOnFailOnly:true 
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
