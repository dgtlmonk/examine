/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        openEmptyCollectionsDialog(): Chainable<any>;
        fillCreateCollectionForm(collectionName: string): Chainable<any>;
    }
}