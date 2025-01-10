/// <reference types="cypress" />
import 'cypress-axe';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to inject axe-core into the page.
       * @example cy.injectAxe()
       */
      injectAxe(): Chainable<void>;

      /**
       * Custom command to check a11y.
       * @example cy.checkA11y()
       */
      checkA11y(): Chainable<void>;
    }
  }
}
