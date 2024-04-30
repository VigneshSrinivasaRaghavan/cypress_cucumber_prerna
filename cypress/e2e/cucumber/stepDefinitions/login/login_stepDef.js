/// <reference types="Cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I am on the login page', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
})

When('I enter username', function () {
    cy.get('input[name="username"]').type("Admin");
})

When('I enter password', function () {
    cy.get('input[name="password"]').type("admin123");
})

When('I click on login button', function () {
    cy.get('button[type="submit"]').click();
})

Then('I should be routed to dashboard page', function () {
    cy.get('.oxd-topbar-header').should('be.visible');
})