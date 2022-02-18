/// <reference types="cypress" />


it('cypresstest', function() {

    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').click()
    cy.get('.inventory_item_price').should('contain', '$29.99')
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_badge').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('test')
    cy.get('[data-test="lastName"]').type('user')
    cy.get('[data-test="postalCode"]').type('1234')
    cy.get('[data-test="continue"]').click()
    cy.get('.summary_total_label').should('contain', '$43.18')
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')


    

    

    






    
    
})