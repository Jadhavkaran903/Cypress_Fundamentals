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
      },
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: message,
      }
    ).as("getComment");
    cy.get(".network-btn").eq(0).click();
    cy.wait("@getComment")
      .its("response.body")
      .then((body) => {
        cy.log(body);
      });
  });
  it("verify the POST request", () => {
    cy.intercept(
      {
        method: "POST",
        url: "**/comments",
      },
      {
        body: {
          email: "testing email",
        },
        'statusCode': 600
      }
    ).as("postComment");
    cy.get(".network-post").click();
    // cy.get('button[class="network-post btn btn-success"]').click()

    cy.wait("@postComment").should(({ request, response }) => {
      cy.log(request);
      cy.log(response);
    });
  });
  it('verify the PUT request',()=>{
      cy.fixture('incept').then((body)=>{
        cy.intercept({
            method:'PUT',
            url:'**/comments/*'
        },
        {
            'body':body
        }).as('putComment')
        cy.get('.network-put').click()
        cy.wait('@putComment').should((xhr)=>{
            let{request,response}=xhr
        })
      })
  })
});
