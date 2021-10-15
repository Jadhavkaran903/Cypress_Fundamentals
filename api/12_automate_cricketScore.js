describe('automate table crickinfo',()=>{
    it('iterate on table',()=>{

        cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-4th-test-1239546/full-scorecard')
        
        cy.sumOfRuns(1,1,1)
        cy.sumOfRuns(2,2,2)
        cy.sumOfRuns(3,3,3)
        cy.sumOfRuns(4,4,4)

    })
})