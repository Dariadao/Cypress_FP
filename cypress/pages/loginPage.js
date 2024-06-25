export class LoginPage {
  elements = {
    usernameField: () => cy.get('[data-cy="username"]'),
    passwordField: () => cy.get('[data-cy="password"]'),
    loginButton: () => cy.get('[data-cy="submit"]'),
  };

  login(username, password) {
    cy.visit("/login");
    this.elements.usernameField().type(username);
    this.elements.passwordField().type(password);
    this.elements.loginButton().click();
  }

  // loginFail({ username, password }) {
  //   cy.visit("/login");
  //   this.elements.usernameField().type(username);
  //   this.elements.passwordField().type(password);
  //   this.elements.loginButton().click();
  //   cy.location("pathname").should("eq", "/login");
  // }
}
