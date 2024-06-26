import { faker } from "@faker-js/faker";

describe("Task (admin access) API tests", () => {
  beforeEach(() => {
    cy.request({
      method: "POST",
      url: `/api/authenticate`,
      body: {
        username: Cypress.env("usernameAdmin"),
        password: Cypress.env("pwdAdmin"),
        rememberMe: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id_token");
      Cypress.env("idToken", response.body.id_token);
    });
  });
  it("Create a task", () => {
    cy.request({
      method: "POST",
      url: `/api/tasks`,
      headers: {
        Authorization: `Bearer ${Cypress.env("idToken")}`,
      },
      body: {
        text: faker.lorem.sentence(),
        answer: faker.lorem.sentence(),
        title: faker.lorem.words(),
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id").and.to.be.a("number");
      expect(response.body).to.have.property("text").and.to.be.a("string");
      expect(response.body).to.have.property("answer").and.to.be.a("string");
      expect(response.body).to.have.property("title").and.to.be.a("string");
      Cypress.env("taskID", response.body.id);
    });
  });
  it("Not possible to create a task without body", () => {
    cy.request({
      method: "POST",
      url: `/api/tasks`,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${Cypress.env("idToken")}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.title).to.eq("Bad Request");
    });
  });

  it("Edit task", () => {
    cy.request({
      method: "PUT",
      url: `/api/tasks/${Cypress.env("taskID")}`,
      headers: {
        Authorization: `Bearer ${Cypress.env("idToken")}`,
      },
      body: {
        id: Cypress.env("taskID"),
        text: faker.lorem.sentence(),
        answer: faker.lorem.sentence(),
        title: faker.lorem.words(),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id").and.to.be.a("number");
      expect(response.body).to.have.property("text").and.to.be.a("string");
      expect(response.body).to.have.property("answer").and.to.be.a("string");
      expect(response.body).to.have.property("title").and.to.be.a("string");
    });
  });
  it("Edit task title", () => {
    cy.request({
      method: "PATCH",
      url: `/api/tasks/${Cypress.env("taskID")}`,
      headers: {
        Authorization: `Bearer ${Cypress.env("idToken")}`,
      },
      body: {
        id: Cypress.env("taskID"),
        title: faker.lorem.words(),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id").and.to.be.a("number");
      expect(response.body).to.have.property("text").and.to.be.a("string");
      expect(response.body).to.have.property("answer").and.to.be.a("string");
      expect(response.body).to.have.property("title").and.to.be.a("string");
    });
  });
  it("Edit task text", () => {
    cy.request({
      method: "PATCH",
      url: `/api/tasks/${Cypress.env("taskID")}`,
      headers: {
        Authorization: `Bearer ${Cypress.env("idToken")}`,
      },
      body: {
        id: Cypress.env("taskID"),
        text: faker.lorem.sentence(),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id").and.to.be.a("number");
      expect(response.body).to.have.property("text").and.to.be.a("string");
      expect(response.body).to.have.property("answer").and.to.be.a("string");
      expect(response.body).to.have.property("title").and.to.be.a("string");
    });
  });
  it("Edit task answer", () => {
    cy.request({
      method: "PATCH",
      url: `/api/tasks/${Cypress.env("taskID")}`,
      headers: {
        Authorization: `Bearer ${Cypress.env("idToken")}`,
      },
      body: {
        id: Cypress.env("taskID"),
        answer: faker.lorem.sentence(),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id").and.to.be.a("number");
      expect(response.body).to.have.property("text").and.to.be.a("string");
      expect(response.body).to.have.property("answer").and.to.be.a("string");
      expect(response.body).to.have.property("title").and.to.be.a("string");
    });
  });
  it("Delete task", () => {
    cy.request({
      method: "DELETE",
      url: `/api/tasks/${Cypress.env("taskID")}`,
      headers: {
        Authorization: `Bearer ${Cypress.env("idToken")}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });
});
