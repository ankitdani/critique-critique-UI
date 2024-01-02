describe("Basic tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Visit base URL", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Contain correct header text", () => {
    cy.get(".navbar-brand").should("contain.text", "Critique Critique");
  });

  it("Clicks on the Reviews button", () => {
    cy.get(".movie-review-button-container").click();
  });
});
