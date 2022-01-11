// const { describe } = require("mocha");

// const cypress = require("cypress")

describe("order",()=>{
    it("varify",()=>{
     cy.visit("https://www.limeroad.com/?occasion=kurtas")
     cy.get('#shopMen > .wsN').click()
     cy.get('#shoes > .anSelectChild > .loaderCat').click().then(()=>{
        cy.get('.conNew.pR').find('div').find('a').find('img[alt="Comfort Comes First"]').click()
     })
    //  cy.get('#\36 18a14b3adb8b83935effc1f').click()
    
   
})
})