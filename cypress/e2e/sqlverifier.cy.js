describe("Verifier page load test", () => {
  Cypress.config("baseUrl");
  it("successful loading", () => {
    cy.visit("/");
    cy.get("#header-tabs").should("exist");
  });
});
