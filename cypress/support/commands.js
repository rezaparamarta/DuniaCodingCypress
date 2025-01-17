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
// File: cypress/support/commands.js
// Cypress.Commands.add('login', () => {
//     // Kunjungi halaman login
//     cy.visit('https://www.saucedemo.com/v1/index.html');
    
//     // Isi form login
//     cy.get('input[name=user-name]').type('standard_user');
//     cy.get('input[name=password]').type('secret_sauce');
    
//     // Klik tombol login
//     cy.get('#login-button').click();
    
//     // Pastikan login berhasil
//     cy.get('.product_label').should('be.visible');
// });
