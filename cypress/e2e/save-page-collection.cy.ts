describe('Manage Page Collections', () => {
  beforeEach(() => {
    cy.viewport('ipad-2');
    cy.visit('http://localhost:3000/?save=1');
  });

  describe('Empty Page Collection', () => {
    it('should show empty page collection message', () => {
      cy.openEmptyCollectionsDialog();

      cy.screenshot('Empty Page Collection', {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });

  describe('Create New Collection', () => {
    it("should show New Collection dialog form when 'New Collection' button is clicked", () => {
      cy.openCreateCollectionDialog();

      cy.wait(500);
      cy.screenshot('New Collection Dialog Form', {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('should show error message when form is submitted with empty collection name', () => {
      cy.openCreateCollectionDialog();

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

    it.only('should create new collection with valid collection name', () => {
      cy.openEmptyCollectionsDialog();
      cy.wait(500);

      cy.screenshot('Create New Collection - Before', {
        overwrite: true,
        capture: 'viewport',
      });

      cy.wait(500);
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.submitWithCollectionName('Vitality Supplements Collection');

      cy.wait(500);
      cy.get('[data-cy="collection-item"]').should('have.length', 1);

      cy.wait(500);
      cy.screenshot('Create New Collection - After ', {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it.only('should be able to create multiple collections', () => {
      cy.openEmptyCollectionsDialog();

      cy.wait(500);
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.wait(500);
      cy.submitWithCollectionName('Cognitive Supplements');

      cy.wait(500);
      cy.get('[data-cy="collection-item"]').should('have.length', 1);

      cy.wait(500);
      cy.get('[data-cy="create-collection-text-btn"]').click();

      cy.submitWithCollectionName('Protein Supplements');
      cy.get('[data-cy="collection-item"]').should('have.length', 2);

      cy.wait(500);
      cy.screenshot('Create Multiple Collections', {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });

  // describe subscribe page to collection
  // describe.only('Subscribe Page to Collection', () => {

  // });
});
