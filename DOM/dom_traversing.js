describe("Transversing the DOM in cypress", () => {
  it("children() to get the children element of the DOM", () => {
    cy.visit("https://recast.studio/");
    cy.get('ul[id="menu-1-b0137a3"]').children().should("have.length", "4");
    cy.get('ul[id="menu-1-b0137a3"]')
      .children("li")
      .eq(0)
      .children()
      .should("have.text", "Home");
  });
  it("closest() to validate the closest ancestor of the element", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get("#coffee")
      .closest("ul")
      .should("have.class", "traversal-drinks-list");
  });
  it("eq() to retrive the specific element in the list based on index", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get(".traversal-drinks-list").children().eq(3).should("contain", "Esp");
  });
  it("last() to retrive the last element in the list", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get(".traversal-drinks-list")
      .children()
      .last()
      .should("contain", "Sugar");
  });
  it("first() retrive the first element in the list", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get(".traversal-drinks-list")
      .children()
      .first()
      .should("contain", "Coffee");
  });
  it("filter() to retrive the element that matches specific condition", () => {
    cy.get('div[data-toggle="buttons"]')
      .children()
      .filter(".active")
      .should("have.text", "Button-1");
    cy.get('div[data-toggle="buttons"]')
      .children()
      .filter(".active")
      .should("have.attr", "type");
  });
  it("find() to retrive the element that have specific selector", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get(".pagination.traversal-pagination")
      .find("li")
      .find("a")
      .find("span")
      .should("have.length", "4");
    cy.get(".pagination.traversal-pagination")
      .find("li")
      .find("a")
      .should("have.length", "7");
  });
  it("next all() to get all the next sbilings with a specific parent (DOM element)", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get(".traversal-drinks-list")
      .contains("Tea")
      .nextAll()
      .should("have.length", "3");
  });
  it("nextUntil() to get the all sibling elements for the defined elements", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get("#veggie").nextUntil("ul").should("have.length", "4");
  });
  it(".not to remove the element from the set", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get(".traversal-food-list")
      .children()
      .not(".list-header")
      .should("have.length", "9");
  });
  it("parent() to get the parent element of the DOM", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.contains("Apple").parent().should("have.class", "traversal-food-list");
  });
  it("parents() to get multiple parent elements in DOM", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get("thead").parents().should("match", "table");
  });
  it("prevAll() to get all previous siblings with specific parent", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get(".traversal-food-list")
      .contains("Figs")
      .prevAll()
      .should("have.length", "5");
  });
  it("prevUntil() to get all the sibling elements for the defined element", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get("#veggie").prevUntil("ul").should("have.length", "6");
  });
  it.only("siblings() to get sibling DOM element", () => {
    cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
    cy.get("li").siblings(".list-header").should("have.class", "list-header");
  });
});
