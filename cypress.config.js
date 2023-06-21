const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
     on('before:browser:launch', (browser = {}, launchOptions) => {
                console.log(launchOptions.args)

                if (browser.family == 'chromium') {
                    launchOptions.args.push('--disable-gpu')
                }

                return launchOptions
            });


      
    },
  },
});
