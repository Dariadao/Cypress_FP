const validTextData = require("../fixtures/registerData.json");
const invalidTextData = require("../fixtures/registerInvalidData.json");

describe("Registration", () => {
  it("Successful registration with valid data", () => {
    validTextData.forEach((el) => {
      cy.registration(el.username, el.email, el.password, el.confirmPassword);
    });
    cy.get("div.invalid-feedback").should("not.exist");
  });
  it("Failed registration with invalid data", () => {
    invalidTextData.forEach((item) => {
      cy.registration(
        item.username,
        item.email,
        item.password,
        item.confirmPassword
      );
      cy.get("div.invalid-feedback").should("exist");
    });
  });
});
