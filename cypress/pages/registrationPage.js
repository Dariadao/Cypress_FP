export class registrationPage {
  elements = {
    usernameField: () => cy.get("#username"),
    emailField: () => cy.get("#email]"),
    firstPassword: () => cy.get("#firstPassword"),
    secondPassword: () => cy.get("#secondPassword"),
    registerBtn: () => cy.get("#register-submit"),
  };

  register(username, email, password) {
    cy.visit("/account/register");
    this.elements.usernameField().type(username);
    this.elements.emailField().type(email);
    this.elements.firstPassword().type(firstPassword);
    this.elements.secondPassword().type(secondPassword);
    this.elements.registerBtn().click();
  }
}
