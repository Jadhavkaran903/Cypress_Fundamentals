describe("verify api functionality", () => {
  it("verify the get api", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
    }).then((responce) => {
      expect(responce.status).to.eqls(200);
    });
  });
  it("verify the post request", () => {
    // var item={
    //   name: "morpheus",
    //   job: "leader"
    // }
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "morpheus",
        job: "leader",
      },
      // body:item
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
  it("verify the put request", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: {
        name: "morpheus",
        job: "zion resident",
      },
    }).then((response) => {
      expect(response.status).to.eqls(200);
    });
  });
  it("verify the delete request", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
    }).then((responce) => {
      expect(responce.status).to.eqls(204);
    });
  });
});
