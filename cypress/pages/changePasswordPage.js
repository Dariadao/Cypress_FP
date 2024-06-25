export class ChangePasswordPage {
  elements = {
    usernameField: () => cy.get('[data-cy="username"]'),
    passwordField: () => cy.get('[data-cy="password"]'),
    loginBtn: () => cy.get('[data-cy="submit"]'),
    accountMenu: () => cy.get('[data-cy="accountMenu"]'),
    passwordMenu: () => cy.get('[data-cy="passwordItem"]'),
    currentPasswordField: () => cy.get('[data-cy="currentPassword"]'),
    newPasswordField: () => cy.get('[data-cy="newPassword"]'),
    newPasswordFieldConfirmation: () => cy.get('[data-cy="confirmPassword"]'),
    saveButton: () => cy.get('[data-cy="submit"]'),
  };

  changePassword(username, oldPassword, newPassword) {
    this.elements.usernameField().type(username);
    this.elements.passwordField().type(oldPassword);
    this.elements.loginBtn().click();
    this.elements.accountMenu().click();
    this.elements.passwordMenu().click();
    this.elements.currentPasswordField().type(oldPassword);
    this.elements.newPasswordField().type(newPassword);
    this.elements.newPasswordFieldConfirmation().type(newPassword);
    this.elements.saveButton().type(newPassword);
  }
}
