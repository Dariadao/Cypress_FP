const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jg2uuq",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com",
    env: {
      username: "user_student",
      password: "user",
    },
    watchForFileChanges: false,
  },
});
