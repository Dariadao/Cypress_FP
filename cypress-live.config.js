const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jg2uuq",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
    env: {
      username: "user123",
      password: "qwerty123",
      usernameAdmin: "username333",
      pwdAdmin: "qwerty333",
    },
    watchForFileChanges: false,
  },
});
