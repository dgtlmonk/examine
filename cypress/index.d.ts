/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    openEmptyCollectionsDialog(): Chainable<Element>;
    submitWithCollectionName(collectionName: string): Chainable<Element>;
    openCreateCollectionDialog(): Chainable<Element>;
  }
}
