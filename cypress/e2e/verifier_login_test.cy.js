const textData = require("../fixtures/loginData.json");
const invTextData = require("../fixtures/loginInvalidData.json");

describe.only("Login tests", () => {
  it("Successful login with valid data", () => {
    textData.forEach((el) => {
      cy.login(el.username, el.password);
    });
  });
  it("Failed login with invalid data", () => {
    invTextData.forEach((item) => {
      cy.loginFail(item.usernameInv, item.passwordInv);
    });
  });
});
