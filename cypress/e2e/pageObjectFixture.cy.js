const loginPage = require("../fixtures/pages/loginPageElements.json");
const changePassword = require("../fixtures/pages/changePasswordElements.json");

import { faker } from "@faker-js/faker";

describe.only("Verifier - Login UI", () => {
  it.only("user cannot login with old password", () => {
    let username = Cypress.env("username");
    let oldPassword = Cypress.env("password");
    let newPassword = faker.internet.password();

    cy.visit("/account/login");
    cy.login(username, oldPassword);
    cy.contains("Swagger").should("be.visible");
    cy.logout();

    cy.visit("/account/login");
    cy.changePassword(username, oldPassword, newPassword);
    cy.logout();

    cy.visit("/account/login");
    cy.login(username, newPassword);
    cy.contains("Swagger").should("be.visible");
    cy.logout();

    cy.visit("/account/login");
    cy.login(username, oldPassword);
    cy.contains(
      "Failed to sign in! Please check your credentials and try again."
    ).should("be.visible");

    cy.visit("/account/login");
    cy.changePassword(username, newPassword, oldPassword);
    cy.logout();
  });
});
