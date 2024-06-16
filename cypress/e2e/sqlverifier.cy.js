describe("Verifier page load test", () => {
  it("successful loading", () => {
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com");
    cy.get("#header-tabs").should("exist");
  });
});
