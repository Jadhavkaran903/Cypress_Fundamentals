describe("validate the window based elements", () => {
  it("validate title for window element", () => {
    cy.visit("https://plctools.com/ethernet-devices/");
    cy.title().should("eq", "Ethernet Devices - PLC Tools");
    expect(cy.title().chainerId).includes("chainer");
  }),
    it("reload the page", () => {
      cy.visit("https://plctools.com/ethernet-devices/");
      cy.title().should("eq", "Ethernet Devices - PLC Tools");
      cy.reload();
    });

  it("reload the page", () => {
    cy.visit("https://plctools.com/ethernet-devices/");
    cy.contains(/^Analog Simulators$/).click({ force: true });
    cy.url().should("include", "analog");
    cy.go("back");
    cy.go("forward");
  });
  it.only("Invoke command", () => {
    cy.visit("https://plctools.com/");
    cy.get('h2[class="page-heading"]')
      .eq(0)
      .should("have.text", "Featured Products");
    cy.get('h2[class="page-heading"]')
      .eq(0)
      .invoke("text")
      .then(function (el) {
        expect(el).to.equals("Featured Products");
      });
      cy.get('h2[class="page-heading"]')
      .eq(0)
      .invoke('removeAttr',"class").should('not.have.class',"page-heading")
  });
});
