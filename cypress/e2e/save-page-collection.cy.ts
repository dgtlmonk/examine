describe('Manage Page Collections', () => {
  beforeEach(() => {
    cy.viewport('ipad-2');
    cy.visit('http://localhost:3000/?save=1');
  });

  describe('Empty Page Collection', () => {
    it("should show empty page collection message", () => {
      cy.openEmptyCollectionsDialog();

      cy.screenshot('Empty Page Collection', {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it("should show 'Create Collection' button", () => {
      cy.get('[data-cy="save-page-to-collection-btn"]').click();

      cy.get('[data-cy="create-collection-btn"]').should('be.visible');

      cy.screenshot('Create Collection Button', {
        overwrite: true,
        capture: 'viewport',
      });
    })
  });

  describe('Create New Collection', () => {
    it("should show Create Collection form when 'Create Collection' button is clicked", () => {
      cy.openEmptyCollectionsDialog();

      cy.screenshot('Create Collection Form', {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('should show error message when form is submitted with empty collection name', () => {
      cy.openEmptyCollectionsDialog();

      cy.wait(500);
      cy.get('[data-cy="create-collection-btn"]').click();

      cy.wait(500);
      cy.get('[data-cy="create-collection-form"]').submit();

      cy.wait(500);
      cy.get('[data-cy="create-error-message"]').should('be.visible');

      cy.wait(500);
      cy.screenshot('Create Collection Form Error', {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('should create new collection when form is submitted with valid collection name', () => {
      cy.openEmptyCollectionsDialog();

      cy.wait(500);
      cy.screenshot('Create New Collection - Before', {
        overwrite: true,
        capture: 'viewport',
      });

      cy.wait(500);
      cy.get('[data-cy="create-collection-btn"]').click();

      cy.wait(500);
      cy.fillCreateCollectionForm('New Collection');

      cy.wait(500);
      cy.get('[data-cy="collection-list"]').should('be.visible');

      cy.screenshot('Create New Collection - After ', {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('should be able to create more collections', () => {
      cy.openEmptyCollectionsDialog();

      cy.wait(500);
      cy.get('[data-cy="create-collection-btn"]').click();

      cy.wait(500);
      cy.fillCreateCollectionForm('New Collection');

      cy.wait(500);
      cy.get('[data-cy="collection-list"]').should('be.visible');

      cy.wait(500);
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.wait(500);
      cy.fillCreateCollectionForm('New Collection 2');

      cy.wait(500);
      cy.get('[data-cy="collection-list"]').should('be.visible');

      // check if both collections are visible
      cy.get('[data-cy="collection-item"]').should('have.length', 2);

      cy.screenshot('Create Multiple Collections', {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });
});
