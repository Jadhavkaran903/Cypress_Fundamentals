// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('tablesum', (id, sumx) => {
  let sum = 0;
  cy.get(`#t0${id}`)
    .find('tr')
    .then((el) => {
      Array.from(el).forEach(function (e, index) {
        cy.log(el, index);
        if (index != 0) {
          cy.get(e)
            .find('td')
            .last()
            .then(function (e) {
              sum = sum + Number(e.text());
            });
        }
      });
    }).then(function(){
      expect(sum).to.eqls(sumx)
    
    })
});

Cypress.Commands.add('sumOfRuns', (run,exRun,tRun) => {

  let runs = 0
  let extraRuns = 0
  let totalRuns = 0

  let cRuns = [0, 0, 1, 2, 3]
  let cERuns = [0, 0, 2, 4, 6]
  let cTRuns = [0, 1, 3, 5, 7]

  cy.get('.table.batsman').eq(`${cRuns[run]}`).find('td[class="font-weight-bold"]').each((el) => {

      runs = runs + Number(el.text())
  })
  cy.get('.text-right.font-weight-bold').eq(`${cERuns[exRun]}`).then((el) => {
      extraRuns = Number(el.text())
  })
  cy.get('.text-right.font-weight-bold').eq(`${cTRuns[tRun]}`).then((el) => {

      totalRuns = Number(el.text())

  }).then((el) => {
      expect(runs + extraRuns).to.eqls(totalRuns)
  })

})