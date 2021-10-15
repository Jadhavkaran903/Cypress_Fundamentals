describe("Automate calender", () => {
  it("validate the datepicker", () => {
    cy.visit("http://www.webdriveruniversity.com/Datepicker/index.html");
    let d2 = new Date();
    d2.setDate(d2.getDate() + 200);
    let year = d2.getFullYear();
    let month = d2.toLocaleString("default", { month: "long" });
    let futureDate = d2.getDate();
    cy.log(year);
    cy.log(month);

    function selectMonthandYear() {
      cy.get("#datepicker").click();
      cy.get(".datepicker-switch")
        .first()
        .then((el) => {
          if (!el.text().includes(year)) {
            cy.get(".next").first().click();
            selectMonthandYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-switch")
            .first()
            .then((el) => {
              if (!el.text().includes(month)) {
                cy.get(".next").first().click();
                selectMonthandYear();
              }
            });
        });
    }
    function selectDate() {
      cy.get(".day").contains(futureDate).click();
      return true;
    }
    selectMonthandYear();
    selectDate();
  });
});
