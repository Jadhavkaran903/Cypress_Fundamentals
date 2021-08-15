describe("document level validation", () => {
  it("validate the url", () => {
    cy.visit("https://app.recast.studio/auth/login/");
    cy.url().should("contain", "login");
  });
  it("validating the url2", () => {
    cy.visit("https://app.recast.studio/auth/register/");
    cy.contains("Sign Up").click();
    cy.url().should("contain", "register");
  });
  it("validating the title for url", () => {
    cy.visit("https://app.recast.studio/auth/register/");
    cy.contains("Sign Up").click();
    cy.url().should("contain", "register");
    cy.title().should("contain", "Registration - Recast Studio");
  });
  it("validating the any property of head section", () => {
    cy.visit("https://app.recast.studio/auth/register/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.document().should("have.property", "URL");
    cy.document().should("have.property", "body");
    cy.document().should("have.property", "baseURI");
  });
});
