describe.only('Flipkart login page test',()=>{
  it('valid search and cart',()=>{
      cy.visit('https://www.flipkart.com/')
      cy.get('a[class="_1_3w1N"]').click()
      cy.get('input[class="_2IX_2- VJZDxU"]').type('9823971240')
      cy.get('input[type="password"]').type('kopre1234')
      cy.wait(10000)
      
      cy.get('._1D1L_j > ._2KpZ6l').click()
      cy.wait(5000)  
      cy.get('#container div.exehdJ').eq(0).then(el=>{
          expect(el.text()).to.equals('My Account');
      })
      
      cy.get('._3704LK').type('mobiles')
      cy.get('.L0Z3Pu ').click()
      cy.wait(5000)
      cy.get('div[data-id="MOBFZTCUTAYPJHHR"] >div > a').invoke('removeAttr','target').click()
      
  })
})