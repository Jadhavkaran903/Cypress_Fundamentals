describe("validate the drop down functionality", () => {
  it("validate the KSRTC drop down functinality", () => {
    cy.visit("https://ksrtc.in/oprs-web/guest/home.do");
    cy.get("#fromPlaceName").type("BAL");
    cy.get(".ui-autocomplete>li>a").each((el) => {
      if (el.text() === "BALLARI") {
        cy.wrap(el).click();
      }
    });
  });
  it.only("validate the google drop down functinality", () => {
    cy.visit("https://www.google.com/");
    cy.get('input[name="q"]').type("visual");
    cy.get(':nth-child(5) > .eIPGRd > .pcTkSc > .wM6W7d > span > b')
      .each(function (el) {
        cy.log(el.text());
        if (el.text().includes("studio 2019 download")) {
          el.click();
        }
      });
  });
});
