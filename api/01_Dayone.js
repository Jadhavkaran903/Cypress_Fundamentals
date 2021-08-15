// Describe test suite
describe("verify the login functionality", function () {
  it("test login with valid credentials", function () {
    cy.visit("https://app.recast.studio/auth/login/");
    cy.get("#login-form_email").type("jadhavkaran903@gmail.com");
    cy.get("#login-form_password").type("Jadhav123");
    cy.get("#login-form > div:nth-child(5) > div > div > div > button").click();
    cy.get(
      "#root > div > section > section > section > main > div > div:nth-child(1) > h4"
    ).should("have.text", "Create New Project");
  });
  it("test login with invalid credentials", function () {
    cy.visit("https://app.recast.studio/auth/login/");
    cy.get("#login-form_email").type("jadhavkaran903@gmail.com");
    cy.get("#login-form_password").type("Jadhav124");
    cy.get("#login-form > div:nth-child(5) > div > div > div > button").click();
  });
});
