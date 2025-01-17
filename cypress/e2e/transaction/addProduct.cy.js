describe('Test Suite 1 - For Positive Case', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
        cy.get('.product_label', { timeout: 10000 }).should('be.visible');
    });

    it('Test case 1 - View a product', () => {
        cy.get('.product_label', { timeout: 10000 }).should('be.visible');
        cy.get('.product_label').should('contain', 'Products');
    });

    it('Test case 2 - Add a product', () => {
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('.inventory_details_price', { timeout: 10000 }).should('be.visible');
        cy.get('.inventory_details_price', { timeout: 10000 }).should('contain', '29.99');
        cy.get('.inventory_details_back_button', { timeout: 10000 }).should('be.visible');
        cy.get('.btn_primary', { timeout: 10000 }).should('be.visible');
        cy.get('.btn_primary', { timeout: 10000 }).click();
        cy.get('.fa-layers-counter').click();
    });

    it('Test case 3 - Check data on checkout page', () => {
        cy.visit('https://www.saucedemo.com/v1/cart.html');
        cy.get('.cart_footer > .btn_secondary', { timeout: 10000 }).should('be.visible');
        cy.get('.btn_action', { timeout: 10000 }).should('be.visible');
        cy.get('.btn_action').click();
    });

    it('Test case 4 - Fill data information on checkout page', () => {
        cy.visit('https://www.saucedemo.com/v1/checkout-step-one.html');
        cy.get('.subheader', { timeout: 10000 }).should('contain', 'Checkout: Your Information');
        cy.get('input[data-test=firstName]').type('Ulul');
        cy.get('input[data-test=lastName]').type('Albab');
        cy.get('input[data-test=postalCode]').type('565656');
        cy.get('.cart_cancel_link', { timeout: 10000 }).should('be.visible');
        cy.get('.btn_primary', { timeout: 10000 }).should('be.visible');
        cy.get('.btn_primary', { timeout: 10000 }).click();
    });

    it('Test case 5 - Check Payment Information and finish checkout', () => {
        cy.visit('https://www.saucedemo.com/v1/checkout-step-two.html');
        cy.get('.summary_info_label', { timeout: 10000 }).should('be.visible');
        cy.get('.summary_value_label', { timeout: 10000 }).should('contain', 'SauceCard #31337');
        cy.get('.summary_info_label', { timeout: 10000 }).should('be.visible');
        cy.get('.summary_value_label', { timeout: 10000 }).should('contain', 'FREE PONY EXPRESS DELIVERY!');
        cy.get('.cart_cancel_link', { timeout: 10000 }).should('be.visible');
        cy.get('.btn_action', { timeout: 10000 }).click();
    });

    it('Test case 6 - Check Order Confirmation', () => {
        cy.visit('https://www.saucedemo.com/v1/checkout-complete.html');
        cy.get('.complete-header', { timeout: 10000 }).should('be.visible');
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
    });
});