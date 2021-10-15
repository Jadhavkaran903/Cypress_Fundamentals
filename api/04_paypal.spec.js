describe("verify the paypal", () => {
  let token = null;
  it("Generate Token ", () => {
    cy.request({
      method: "POST",
      url: "https://api.sandbox.paypal.com/v1/oauth2/token",
      form: true,
      headers: {
        authorization:
          "Basic QWY0TFhDbWlWZ0xJbDI3dm9LVU94VjJ4R3hJSEpIY1FVTFNLSUFLUDNpMHkwNXRqVG4wMVd2R01xZ2NHV2N2STQwUGY3VmotcW5YOUM1LW06RU1pa2pxRVJjNWtINlhvVllOTm02Rzd5R2MyTWFZMThyaXpISFhidklWeXdzaEl2RDhibWV3M2oxUFFtRl95NUgxaklmdndRa3ZhX0dPUDk=",
      },
      body: {
        grant_type: "client_credentials",
      },
    }).then((response) => {
      cy.log(response.body);
      token = response.body.access_token;
      cy.log(token);
    });
  });

  it("Create Orders", () => {
    cy.request({
      method: "POST",
      url: "https://api-m.sandbox.paypal.com/v2/checkout/orders",

      headers: {
        authorization: `Bearer ${token} `,
        "content-Type": "application/json",
      },
      body: {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "100.00",
            },
          },
        ],
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
