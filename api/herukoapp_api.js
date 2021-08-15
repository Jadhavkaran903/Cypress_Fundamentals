describe("authorization tests for api calls",()=>{
    it("get user authorization",()=>{
        cy.request({
            method:"GET",
            url:"https://id.heroku.com/login",
            header:{authorization:"Basic QWRtaW46YWRtaW4="}
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.duration).to.not.be.greaterThan(4000)
            expect(response.headers).contains({
                "content-type":"text/html;charset=utf-8",
                "content-length":"1412"
            })
            // expect(response.body).to.contain("Congratulations! You must have the proper credentials.")
        })
    })
})




// Congratulations! You must have the proper credentials.