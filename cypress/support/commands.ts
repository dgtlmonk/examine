/// <reference types="cypress" />

Cypress.Commands.add('openEmptyCollectionsDialog', () => {
    cy.get('[data-cy="save-page-to-collection-btn"]').click();

    cy.wait(500);
    cy.get('[data-cy="collection-list"]').should('not.exist');
    cy.get('[data-cy="empty-collection-message"]').should('be.visible');
    cy.get('[data-cy="create-collection-btn"]').should('be.visible');
});

// create new collection
Cypress.Commands.add('fillCreateCollectionForm', (collectionName: string) => {
    cy.wait(500);
    cy.get('[data-cy="field-collection-name"]').type(collectionName);
    cy.get('[data-cy="create-collection-form"]').submit();
});
