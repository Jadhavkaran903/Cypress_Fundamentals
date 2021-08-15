describe("traversing the postman in DOM", () => {
  it("children() to get children element of the makemytrip", () => {
    cy.visit("https://www.greenply.com/doors");
    cy.get(".burger-menu-list.top-level-menu")
      .children()
      .should("have.length", "7");
  });
  it("children() to get children element of DOM", () => {
    cy.visit("https://www.greenply.com/doors");
    cy.get('ul[class="burger-menu-list top-level-menu"]')
      .children("li")
      .eq(0)
      .children("a")
      .should("have.text", "Home");
  });
  
});
