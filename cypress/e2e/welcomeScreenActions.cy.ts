import mockedData from "../fixtures/data.json";

describe("WelcomScreen component actions", () => {
  
  beforeEach(() => {
    cy.intercept("GET", "/data.json", mockedData);
  });

  it("Can type username in and play btn takes user to next stage", () => {
    //when
    cy.visit("localhost:3000");
    cy.get('[data-testid="usernameInput"]').type("TestUser");
    cy.get('[data-testid="actionBtn"]').click();
    //then
    cy.get('[data-testid="gameWrapper"]').should("exist");
  });
  it("Pressing btn when usernameInput is empty does nothing", () => {
    //when
    cy.visit("localhost:3000");
    cy.get('[data-testid="actionBtn"]').click();
    //then
    cy.get('[data-testid="gameWrapper"]').should("not.exist");
  });
});
export {};
