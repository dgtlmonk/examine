/// <reference types="cypress" />

Cypress.Commands.add('openEmptyCollectionsDialog', () => {
  cy.get('[data-cy="save-page-to-collection-btn"]').click();

  cy.wait(500);
  cy.get('[data-cy="collection-item"]').should('have.length', 0);
  cy.get('[data-cy="empty-collection-message"]').should('be.visible');
});

Cypress.Commands.add('openCreateCollectionDialog', () => {
  cy.get('[data-cy="save-page-to-collection-btn"]').click();

  cy.wait(500);
  cy.get('[data-cy="create-collection-text-btn"]').click();
});

// create new collection
Cypress.Commands.add('submitWithCollectionName', (collectionName: string) => {
  cy.get('[data-cy="field-collection-name"]').type(collectionName);
  cy.get('[data-cy="create-collection-form"]').submit();
});
