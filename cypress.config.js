const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://site.getnet.com.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.js',
    chromeWebSecurity: false // Desabilita a segurança da web no Chrome para evitar bloqueios de pop-ups
  },
})
