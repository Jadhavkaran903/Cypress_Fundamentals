describe("validate the checkbox functionality", () => {
  it("validate the checkbox functionality with check", () => {
    cy.visit("https://www.spicejet.com/");
    cy.get("#ctl00_mainContent_rbtnl_Trip_1").click();
    cy.get('label[for="ctl00_mainContent_rbtnl_Trip_1"]').should(
      "have.class",
      "select-label"
    );
  });

  it("validate the checkbox functinality with uncheck", () => {
    cy.visit("https://www.spicejet.com/");
    cy.get("#ctl00_mainContent_rbtnl_Trip_0").click();
    cy.get('label[for="ctl00_mainContent_rbtnl_Trip_1"]').should(
      "not.have.class",
      "select-label"
    );
  });

  it("validate the tick functionality with check", () => {
    cy.visit("https://www.spicejet.com/");
    cy.get("#ctl00_mainContent_chk_friendsandfamily").click();
  });

  it("validate the untick functionality with check", () => {
    cy.visit("https://www.spicejet.com/");
    cy.get("#ctl00_mainContent_chk_friendsandfamily").click();
    cy.get('label[for="ctl00_mainContent_chk_friendsandfamily"]').should(
      "not.have.text",
      "Family & Friends"
    );
  });
  it("validate the cities trip", () => {
    cy.visit("https://www.spicejet.com/");
    cy.get("#ctl00_mainContent_ddl_originStation1_CTXTaction").click();
    cy.get(
      "#dropdownGroup1 > .dropdownDiv > :nth-child(2) > :nth-child(5) > a"
    ).click();

    cy.get("#ctl00_mainContent_ddl_destinationStation1_CTXTaction").click();

    cy.get(
      "#glsctl00_mainContent_ddl_destinationStation1_CTNR > #citydropdown > tbody > :nth-child(2) > .mapbg > .search_options_menucontent > #dropdownGroup1 > .dropdownDiv > :nth-child(1) > .city_selected > a"
    ).click();
  });
  it("validate date ", () => {
    cy.visit("https://www.spicejet.com/");

    cy.get("#ctl00_mainContent_view_date1").click();
    cy.get(":nth-child(4) > :nth-child(1) > .ui-state-default").click();
    cy.get("#divpaxinfo").click();
  });
  it("traversing in spicejet", () => {
    cy.visit("https://www.spicejet.com/");
    cy.get('select[id="ctl00_mainContent_ddl_Child"]')
      .children()
      .should("have.length", "5");
    cy.get('select[id="ctl00_mainContent_ddl_Child"]')
      .children("option")
      .eq(1)
      .should("have.text", "1");
  });
  it("validate the currancy", () => {
    cy.visit("https://www.spicejet.com/");
    cy.get('select[id="ctl00_mainContent_DropDownListCurrency"]')
      .children()
      .should("have.length", "6");
    cy.get('select[id="ctl00_mainContent_DropDownListCurrency"]')
      .children("option")
      .eq(3)
      .should("have.text", "INR");
  });
});
