describe("Verify the iframe with cypress code", () => {
  const getIframeBody = (locator) => {
    return cy
      .get(locator)
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap);
  };

  it("iframe example with jquery method", () => {
    cy.visit("http://www.webdriveruniversity.com/IFrame/index.html");
    cy.get("#frame").then(($fr) => {
      const body = $fr.contents().find("body");
      cy.wrap(body).as("iframeTest");
    });
    cy.get("@iframeTest")
      .find("#button-find-out-more")
      .should("have.text", "Find Out More!");
  });
  it("iframe example with javascript property", () => {
    cy.visit("http://www.webdriveruniversity.com/IFrame/index.html");
    cy.get("#frame").within(function (el) {
      let iframe = el.get()[0];
      let body = iframe.contentDocument.body;
      cy.wrap(body).as("iframeTest");
    });
    cy.get("@iframeTest")
      .find("#button-find-out-more")
      .should("have.text", "Find Out More!");
  });
  it("Verify iframe with utility function", () => {
    cy.visit("http://www.webdriveruniversity.com/IFrame/index.html");
    getIframeBody("#frame")
      .find("#button-find-out-more")
      .should("have.text", "Find Out More!");
  });
  it("Verify the iframe with utility function ex2", () => {
    cy.visit("https://jqueryui.com/draggable/");
    getIframeBody(".demo-frame").find("#draggable").should("be.visible");
  });
});
