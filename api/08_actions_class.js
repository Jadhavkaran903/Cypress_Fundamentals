describe("Action class.....", () => {
  it("Scroll into view", () => {
    cy.visit("https://docs.cypress.io/guides/overview/why-cypress#Our-mission");
    cy.get("footer").scrollIntoView();
  });
});
it("Drag and drop", () => {
  cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
  cy.get("#draggable").trigger("mousedown", { which: 1 });
  cy.get("#droppable").trigger("mousemove").trigger("mouseup", { force: true });
  cy.get("#droppable >p").then((el) => {
    expect(el).to.have.css("background-color", "rgb(244, 89, 80)");
  });
  it("validate the mouseover dropdown", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get(".exehdJ").trigger("mouseover");
    cy.get(".pO9syL")
      .find("li")
      .find("a")
      .find("div")
      .each((el) => {
        if (el.text() === "Sell on Flipkart") {
          cy.log(el.text());
          el.click();
        }
      });
    cy.url().should(
      "eq",
      "https://seller.flipkart.com/sell-online/?utm_source=flipkart&utm_medium=website&utm_campaign=sellbutton"
    );
    cy.get(".link-color").first().should("have.attr", "href");
  });
  it("validate the mouseover dropdown2", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get("._1psGvi SLyWEo").eq(1).trigger("mouseover", { force: true });
    cy.get("._3XS_gI._7qr1OC")
      .children()
      .each((el) => {
        if (el.text().includes("Gaming")) {
          cy.log(el.text());
          cy.wrap(el).trigger("mouseover", { force: true });
        }
      });
      cy.wait(1000)
      cy.get('._3XS_gI').last().find('a').each((el)=>{
        if(el.text().includes('Games')){
          cy.log(el.text())
          cy.wrap(el).click({force:true})
        }
      })
      cy.url().should('contain','7OVL0P8FJ3EW')
  });
});
