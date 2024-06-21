describe("Opened sign-in/registration dropdown menu when link is clicked", () => {
  it("Dropdown menu for signin/registration is open", () => {
    Cypress.config("baseUrl");
    cy.visit("/");
    cy.get('[data-cy="accountMenu"]').click();
    cy.get(".dropdown-menu.show").should("be.visible");
  });
});

const login = Cypress.Commands.add("login", (username, password) => {
  Cypress.config("baseUrl");
  cy.visit("/login");
  cy.get('[data-cy="username"]').type(username);
  cy.get('[data-cy="password"]').type(password, { log: false });
  cy.get('[data-cy="submit"]').click();
  cy.location("pathname").should("eq", "/");
});

describe("Successful login and navigation on home page ", () => {
  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Should navigate to Task page when link is clicked", () => {
    cy.get('[data-cy="entity"]').click();
    cy.get(".dropdown-menu.show").should("be.visible");
    cy.get('a[href="/task"]').click();
    cy.location("pathname").should("eq", "/task");
  });

  it("Should navigate to User tasks page when link is clicked", () => {
    cy.get('[data-cy="entity"]').click();
    cy.get(".dropdown-menu.show").should("be.visible");
    cy.get('a[href="/user-task"]').click();
    cy.location("pathname").should("eq", "/user-task");
  });

  it("Should navigate to Api page when link is clicked", () => {
    cy.get('[data-cy="docsMenu"]').click();
    cy.get(".dropdown-menu.show").should("be.visible");
    cy.get('a[href="/docs/docs"]').click();
    cy.location("pathname").should("eq", "/docs/docs");
  });

  it("Should switch to French", () => {
    cy.get("ul>li").eq(3).click();
    cy.get(".dropdown-menu.show").should("be.visible");
    cy.get('button[value="fr"]').click();
    // cy.location("pathname").should("eq", "/fr.json");
    cy.get("ul>li").eq(3).should("contain", "Français");
  });

  it("Should switch to Russian", () => {
    cy.get("ul>li").eq(3).click();
    cy.get(".dropdown-menu.show").should("be.visible");
    cy.get('button[value="ru"]').click();
    // cy.location("pathname").should("eq", "/ru.json");
    cy.get("ul>li").eq(3).should("contain", "Русский");
  });

  it("Should switch to Ucranian", () => {
    cy.get("ul>li").eq(3).click();
    cy.get(".dropdown-menu.show").should("be.visible");
    cy.get('button[value="ua"]').click();
    // cy.location("pathname").should("eq", "/ua.json");
    cy.get("ul>li").eq(3).should("contain", "Українська");
  });

  it("Should switch to English", () => {
    cy.get("ul>li").eq(3).click();
    cy.get(".dropdown-menu.show").should("be.visible");
    cy.get('button[value="en"]').click();
    // cy.location("pathname").should("eq", "/en.json");
    cy.get("ul>li").eq(3).should("contain", "English");
  });

  it("Should navigate to Settings page when link is clicked", () => {
    cy.get('[data-cy="accountMenu"]').click();
    cy.get("div.dropdown-menu.show").should("be.visible");
    cy.get('[data-cy="settings"]').click();
    cy.location("pathname").should("eq", "/account/settings");
  });

  it("Should navigate to Password page when link is clicked", () => {
    cy.get('[data-cy="accountMenu"]').click();
    cy.get(".dropdown-menu.show").should("be.visible");
    cy.get('[data-cy="passwordItem"]').click();
    cy.location("pathname").should("eq", "/account/password");
  });

  it("Should navigate to Home page when link is clicked", () => {
    cy.get("a.nav-link").eq(0).click().should("have.class", "active");
    cy.location("pathname").should("eq", "/");
  });

  it("Succesful logout", () => {
    cy.get('[data-cy="accountMenu"]').click();
    cy.get(".dropdown-menu.show").should("be.visible");
    cy.get('[data-cy="logout"]').click();
    cy.location("pathname").should("eq", "/logout");
  });
});
