const validTextData = require("../../fixtures/registerData.json");
const invalidTextData = require("../../fixtures/registerInvalidData.json");

describe("Registration", () => {
  it("Successful registration with valid data", () => {
    validTextData.forEach(({ username, email, password, confirmPassword }) => {
      cy.registration({ username, email, password, confirmPassword });
    });
    cy.get("div.invalid-feedback").should("not.exist");
  });
  it("Failed registration with invalid data", () => {
    invalidTextData.forEach(
      ({ username, email, password, confirmPassword }) => {
        cy.registration({ username, email, password, confirmPassword });
        cy.get("div.invalid-feedback").should("exist");
      }
    );
  });
});
