/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Aqui vamos testar os nossos componentes de botoes", () => {
  before(function() {
    cy.visit("/");
  });
  it("Deve conseguir clickar em um botao", () => {
    cy.contains("Start Workshop").click();
    cy.get("button").click();
    cy.get("[data-cy='result']").should("have.text", "Which Operating system do you like to run cypress?");
  });
});
