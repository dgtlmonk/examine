describe('Manage Page Collections', () => {
  beforeEach(() => {
    cy.viewport('ipad-2');
    cy.visit('http://localhost:3000/?save=1');
  });

  describe('Empty Collection Page', () => {
    const screenshotFolder = `empty-page-collection/`;

    it('should show empty collection page message', () => {
      cy.openEmptyCollectionsDialog();

      cy.screenshot(`${screenshotFolder}/Empty Collection Page`, {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });

  describe('Create New Collection', () => {
    const screenshotFolder = `create-new-collection/`;

    it("should show New Collection dialog form when 'New Collection' button is clicked", () => {
      cy.openCreateCollectionDialog();

      cy.wait(200);
      cy.screenshot(`${screenshotFolder}/New Collection Dialog Form`, {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('should show error message when form is submitted with empty collection name', () => {
      cy.openCreateCollectionDialog();

      cy.wait(500);
      cy.get('[data-cy="create-collection-form"]').submit();

      cy.wait(200);
      cy.get('[data-cy="create-error-message"]').should('be.visible');

      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Create Collection Form Error`, {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('should create new collection with valid collection name', () => {
      cy.openEmptyCollectionsDialog();
      cy.wait(200);

      cy.screenshot(`${screenshotFolder}/Create Initial State`, {
        overwrite: true,
        capture: 'viewport',
      });

      cy.wait(500);
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.submitWithCollectionName('Vitality Supplements Collection');

      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Create Form Input State`, {
        overwrite: true,
        capture: 'viewport',
      });

      cy.wait(200);
      cy.get('[data-cy="collection-item"]').should('have.length', 1);

      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Create Final State`, {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('should be able to create more collections', () => {
      cy.openEmptyCollectionsDialog();

      cy.wait(200);
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.wait(200);
      cy.submitWithCollectionName('Cognitive Supplements');

      cy.wait(200);
      cy.get('[data-cy="collection-item"]').should('have.length', 1);

      cy.wait(200);
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.submitWithCollectionName('Protein Supplements');
      cy.get('[data-cy="collection-item"]').should('have.length', 2);

      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Create Multiple Collections`, {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });

  describe('Subscribe/Unsubscribe Page to Collection', () => {
    const screenshotFolder = `subscribe-unsubscribe-page/`;

    it('should subscribe page to collection when "+" icon next to collection name is clicked', () => {
      cy.openEmptyCollectionsDialog();

      cy.wait(300);
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.wait(300);
      cy.submitWithCollectionName('Cognitive Supplements');

      cy.wait(300);
      cy.get('[data-cy="collection-item"]').should('have.length', 1);

      // screenshot before subscribing
      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Subscribe Initial State`, {
        overwrite: true,
        capture: 'viewport',
      });

      cy.wait(300);
      cy.get('[data-cy="subscribe-toggle-btn"]').click();
      cy.get('[data-cy="unsubscribe-icon"]').should('be.visible');

      // screenshot after subscribing
      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Subscribe Final State`, {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('should unsubscribe page from collection when "-" icon next to collection name is clicked', () => {
      cy.openEmptyCollectionsDialog();

      cy.wait(300);
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.submitWithCollectionName('Cognitive Supplements');

      cy.wait(1500);
      cy.get('[data-cy="subscribe-toggle-btn"]').click();
      cy.get('[data-cy="unsubscribe-icon"]').should('be.visible');

      // screenshot unsubscribe initial state
      cy.screenshot(`${screenshotFolder}/Unsubscribe Initial State`, {
        overwrite: true,
        capture: 'viewport',
      });

      cy.wait(300);
      cy.get('[data-cy="subscribe-toggle-btn"]').click();
      cy.get('[data-cy="subscribe-icon"]').should('be.visible');

      // screenshot after subscribing
      cy.screenshot(`${screenshotFolder}/Unsubscribe Final State`, {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });

  describe('Unsubscribe Page from All Collections', () => {
    const screenshotFolder = `unsubscribe-page-from-all-collections/`;

    it('automatically unsubscribe from all collections when page is unsaved', () => {
      cy.openEmptyCollectionsDialog();

      cy.wait(300);
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.submitWithCollectionName('Cognitive Supplements');

      cy.wait(300);
      cy.get('[data-cy="subscribe-toggle-btn"]').click();

      // create another collection and subscribe page to it
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.submitWithCollectionName('Vitality Supplements');

      cy.wait(300);
      cy.get('[data-cy="subscribe-toggle-btn"]').click();

      cy.get('[data-cy="subscribe-toggle-btn"]').should('have.length', 2);

      // subscribe page to both collections
      cy.get('[data-cy="subscribe-toggle-btn"]').first().click();
      cy.get('[data-cy="subscribe-toggle-btn"]').last().click();

      cy.get('[data-cy="unsubscribe-icon"]').should('have.length', 2);

      // screenshot after subscribing to both collections - Initial State
      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Initial State`, {
        overwrite: true,
        capture: 'viewport',
      });

      // unsave page will also dismiss the dialog
      cy.get('[data-cy="unsave-page-btn"]').click();

      // 'Save Page' button should now be visible
      cy.get('[data-cy="save-page-to-collection-btn"]').should('be.visible');

      // screenshot final state
      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Unsave State`, {
        overwrite: true,
        capture: 'viewport',
      });

      // click 'Save Page' button to open the dialog
      cy.get('[data-cy="save-page-to-collection-btn"]').click();

      // and check that page is no longer subscribed to any collections while previously created collections are still visible
      cy.wait(300);
      cy.get('[data-cy="collection-item"]').should('have.length', 2);

      // no unsubscribe icons should be visible
      cy.get('[data-cy="unsubscribe-icon"]').should('not.exist');

      cy.wait(300);
      cy.screenshot(`${screenshotFolder}/Final State`, {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });
});
