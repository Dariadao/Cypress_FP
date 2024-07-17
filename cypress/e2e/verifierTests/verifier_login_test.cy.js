const textData = require("../../fixtures/loginData.json");
const invTextData = require("../../fixtures/loginInvalidData.json");

describe.only("Login tests", () => {
  it("Successful login with valid data", () => {
    textData.forEach(({ username, password }) => {
      cy.login(username, password);
    });
  });
  it("Failed login with invalid data", () => {
    invTextData.forEach(({ username, password }) => {
      cy.loginFail({ username, password });
    });
  });
});
