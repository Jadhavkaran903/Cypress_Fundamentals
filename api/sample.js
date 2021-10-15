describe("intercept with network", () => {
  let message = "testing message";
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });
  it("verify the GET request", () => {
    cy.intercept(
      {
        method: "GET",
        url: "**/comments/*",
      }
      // {
      //   "postId": 1,
      //   "id": 1,
      //   "name": "id labore ex et quam laborum",
      //   "email": "Eliseo@gardner.biz",
      //   "body": message
    ).as("getComment");
    cy.get(".network-btn").eq(0).click();
    cy.wait("@getComment").its("response.body"); //.then((body)=>{
    // cy.log(body)
    //})
  });
  it("verify the POST request", () => {
    cy.intercept({
      method: "POST",
      url: "**/comments",
    }).as("postComment");
    cy.get(".network-post").eq(0).click();
    cy.wait("@postComment").should(({ request, response }) => {
      cy.log(request);
      cy.log(response);
    });
  });
  it("validate the PUT request", () => {
    cy.fixture("incept").then((body) => {
      cy.intercept({
        method: "PUT",
        url: "**/comments/*",
      }).as("putComment");
      cy.get(".network-put").eq(0).click();
      cy.wait('@putComment').should(({request,response})=>{
        cy.log(request)
        cy.log(response)
      })
    });
  });
});
