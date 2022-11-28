import mockedData from "../fixtures/data.json";
import { pallete } from "../../src/misc/pallete";

describe("Searchbar actions", () => {
  beforeEach(() => {
    cy.intercept("GET", "/data.json", mockedData);
  });

  it("Can toggle word", () => {
    //when
    cy.visit("localhost:3000");
    cy.get('[data-testid="usernameInput"]').type("TestUser");
    cy.get('[data-testid="actionBtn"]').click();
    cy.get("p").contains("hole").click();
    //then
    cy.get("p").contains("hole").should("have.css", "color", pallete.DarkGray);
    //when
    cy.get("p").contains("hole").click();
    //then
    cy.get("p").contains("hole").should("have.css", "color", pallete.Black);
  });

  it("Shows good/bad answers and finishBtn after pressing checkBtn", () => {
    //when
    cy.visit("localhost:3000");
    cy.get('[data-testid="usernameInput"]').type("TestUser");
    cy.get('[data-testid="actionBtn"]').click();
    cy.get("p").contains("tiger").click();
    cy.get("p").contains("cow").click();
    cy.get("p").contains("hole").click();
    cy.get('[data-testid="actionBtn"]').click();
    //then
    cy.get("p").contains("hole").should("have.css", "color", pallete.DarkRed);
    cy.get("p")
      .contains("tiger")
      .should("have.css", "color", pallete.LightGreen);
    cy.get("p").contains("cow").should("have.css", "color", pallete.LightGreen);
    cy.get('[data-testid="actionBtn"]').should("contain", "finish game");
  });

  it("Renders screenResult component after pressing finishBtn", () => {
    //when
    cy.visit("localhost:3000");
    cy.get('[data-testid="usernameInput"]').type("TestUser");
    cy.get('[data-testid="actionBtn"]').click();
    cy.get('[data-testid="actionBtn"]').click();
    cy.get('[data-testid="actionBtn"]').click();
    //then
    cy.get('[data-testid="resultScreenWrapper"]').should("exist");
  });
});
export {};
