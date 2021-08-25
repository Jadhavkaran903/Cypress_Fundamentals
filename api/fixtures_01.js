describe("verify the login", () => {
  it("verify the customer", () => {
    cy.fixture("example").then((obj) => {
      cy.visit("https://app.recast.studio/auth/login/");
      cy.get("#login-form_email").type(obj.customer.username);
      cy.get("#login-form_password").type(obj.customer.password);
      cy.get(
        "#login-form > div:nth-child(5) > div > div > div > button"
      ).click()
      cy.get('#root > div > section > section > section > main > div > div:nth-child(1) > h4').should('have.text','Create New Project')
    });
  });
  it("verify the admin", () => {
    cy.fixture("example").then((obj) => {
      cy.visit("https://app.recast.studio/auth/login/");
      cy.get("#login-form_email").type(obj.admin.username);
      cy.get("#login-form_password").type(obj.admin.password);
      cy.get(
        "#login-form > div:nth-child(5) > div > div > div > button"
      ).click();
      cy.get('#login-form > h2').should('have.text','SIGN IN')
    });
  });
});
