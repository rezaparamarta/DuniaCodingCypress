describe('Test Suite 1 - For Positive Case', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('#login-button', { timeout: 10000 }).should('be.visible');
        cy.get('.login_logo', { timeout: 10000 }).should('be.visible');
    });
    it('Success login using standard user', () => {
        cy.get('input[name=user-name]').type('standard_user');
        cy.get('input[name=password]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.product_label', { timeout: 10000 }).should('be.visible');
    });

    it('Success login using problem user', () => {
        cy.get('input[name=user-name]').type('problem_user');
        cy.get('input[name=password]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.product_label', { timeout: 10000 }).should('be.visible');
    });

describe('Test Suite 2 - For Negative Case', () => {
        it('Failed login with blank password', () => {
            cy.get('input[name=user-name]').type('standard_user');
            cy.get('#login-button').click();
            cy.get('[data-test="error"]', { timeout: 10000 }).should('be.visible');
            cy.get('[data-test="error"]').should('contain', 'Password is required');
        });

        it('Failed login with locked out user', () => {
            cy.get('input[name=user-name]').type('locked_out_user');
            cy.get('input[name=password]').type('secret_sauce');
            cy.get('#login-button').click();
            cy.get('[data-test="error"]', { timeout: 10000 }).should('be.visible');
            cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.');
        })
    });
});