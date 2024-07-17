import { LoginPage } from "../../pages/loginPage";
import { ChangePasswordPage } from "../../pages/changePasswordPage";

import { faker } from "@faker-js/faker";

beforeEach(() => {
  cy.visit("/account/login");
});

describe.only("Verifier - Login UI", () => {
  it.only("user cannot login with old password", () => {
    let loginPage = new LoginPage();
    let changePasswordPage = new ChangePasswordPage();
    let username = Cypress.env("username");
    let oldPassword = Cypress.env("password");
    let newPassword = faker.internet.password();

    loginPage.login(username, oldPassword);
    cy.contains("Swagger").should("be.visible");
    cy.logout();

    cy.visit("/account/login");
    changePasswordPage.changePassword(username, oldPassword, newPassword);
    cy.logout();

    cy.visit("/account/login");
    loginPage.login(username, newPassword);
    cy.contains("Swagger").should("be.visible");
    cy.logout();

    cy.visit("/account/login");
    loginPage.login(username, oldPassword);
    cy.contains(
      "Failed to sign in! Please check your credentials and try again."
    ).should("be.visible");

    cy.visit("/account/login");
    changePasswordPage.changePassword(username, newPassword, oldPassword);
    cy.logout();
  });
});
