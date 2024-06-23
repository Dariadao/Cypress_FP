describe("Opened sign-in/registration dropdown menu when link is clicked", () => {
  it("Dropdown menu for signin/registration is open", () => {
    Cypress.config("baseUrl");
    cy.visit("/");
    cy.get('[data-cy="accountMenu"]').click();
    cy.get(".dropdown-menu.show").should("be.visible");
  });
});

describe("Successful login and navigation on home page ", () => {
  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Should navigate to Task page when link is clicked", () => {
    cy.openHeaderMenuDropdown('[data-cy="entity"]', ".dropdown-menu.show");
    cy.openDropdownMenuLink('a[href="/task"]', "/task");
  });

  it("Should navigate to User tasks page when link is clicked", () => {
    cy.openHeaderMenuDropdown('[data-cy="entity"]', ".dropdown-menu.show");
    cy.openDropdownMenuLink('a[href="/user-task"]', "/user-task");
  });

  it("Should navigate to Api page when link is clicked", () => {
    cy.openHeaderMenuDropdown('[data-cy="docsMenu"]', ".dropdown-menu.show");
    cy.openDropdownMenuLink('a[href="/docs/docs"]', "/docs/docs");
  });

  it("Should switch to French", () => {
    cy.get("ul>li")
      .eq(3)
      .then(($menuBtn) => {
        cy.openHeaderMenuDropdown($menuBtn, ".dropdown-menu.show");
      });
    cy.changeLanguage('button[value="fr"]', "Français");
  });

  it("Should switch to Russian", () => {
    cy.get("ul>li")
      .eq(3)
      .then(($menuBtn) => {
        cy.openHeaderMenuDropdown($menuBtn, ".dropdown-menu.show");
      });
    cy.changeLanguage('button[value="ru"]', "Русский");
  });

  it("Should switch to Ucranian", () => {
    cy.get("ul>li")
      .eq(3)
      .then(($menuBtn) => {
        cy.openHeaderMenuDropdown($menuBtn, ".dropdown-menu.show");
      });
    cy.changeLanguage('button[value="ua"]', "Українська");
  });

  it("Should switch to English", () => {
    cy.get("ul>li")
      .eq(3)
      .then(($menuBtn) => {
        cy.openHeaderMenuDropdown($menuBtn, ".dropdown-menu.show");
      });
    cy.changeLanguage('button[value="en"]', "English");
  });

  it("Should navigate to Settings page when link is clicked", () => {
    cy.openHeaderMenuDropdown(
      '[data-cy="accountMenu"]',
      "div.dropdown-menu.show"
    );
    cy.openDropdownMenuLink('[data-cy="settings"]', "/account/settings");
  });

  it("Should navigate to Password page when link is clicked", () => {
    cy.openHeaderMenuDropdown('[data-cy="accountMenu"]', ".dropdown-menu.show");
    cy.openDropdownMenuLink('[data-cy="passwordItem"]', "/account/password");
  });

  it("Should navigate to Home page when link is clicked", () => {
    cy.get("a.nav-link").eq(0).click().should("have.class", "active");
    cy.location("pathname").should("eq", "/");
  });

  it("Succesful logout", () => {
    cy.openHeaderMenuDropdown('[data-cy="accountMenu"]', ".dropdown-menu.show");
    cy.openDropdownMenuLink('[data-cy="logout"]', "/logout");
  });
});
