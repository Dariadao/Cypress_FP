// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  Cypress.config("baseUrl");
  cy.visit("/login");
  cy.get('[data-cy="username"]').type(username);
  cy.get('[data-cy="password"]').type(password, { log: false });
  cy.get('[data-cy="submit"]').click();
  cy.location("pathname").should("eq", "/");
});

Cypress.Commands.add("openHeaderMenuDropdown", (menuBtn, dropdownMenu) => {
  cy.get(menuBtn).click();
  cy.get(dropdownMenu).should("be.visible");
});

Cypress.Commands.add("openDropdownMenuLink", (dropdownMenuItem, urlPath) => {
  cy.get(dropdownMenuItem).click();
  cy.location("pathname").should("eq", urlPath);
});

Cypress.Commands.add("changeLanguage", (targetLanguageBtn, expectedText) => {
  cy.get(targetLanguageBtn).click();
  cy.get("ul>li").eq(3).should("contain", expectedText);
});
