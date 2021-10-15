// Describe test suite
describe("verify the login functionality", function () {
  it("test login with valid credentials", function () {
    cy.visit("https://app.recast.studio/auth/login/");
    cy.get("#login-form_email").type("jadhavkaran903@gmail.com");
    cy.get("#login-form_password").type("Jadhav123");
    cy.get("#login-form > div:nth-child(5) > div > div > div > button").click();
    cy.url().should('contain', "login");
  });
  it("test login with invalid credentials", function () {
    cy.visit("https://app.recast.studio/auth/login/");
    cy.get("#login-form_email").type("jadhavkaran903@gmail.com");
    cy.get("#login-form_password").type("Jadhav124");
    cy.get("#login-form > div:nth-child(5) > div > div > div > button").click();
  });
});
