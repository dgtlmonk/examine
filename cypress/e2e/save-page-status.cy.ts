describe('Manage Page Status', () => {
  beforeEach(() => {
    cy.viewport('ipad-2');
    cy.visit('http://localhost:3000/');
  });

  describe('Unsaved Page Status', () => {
    it("displays a 'Save Page' button", () => {
      cy.get('button[data-cy="save-page-btn"]')
        .contains(/save page/i)
        .should('be.visible');
    });

    it('shows Bookmark icon within the "Save Page" button', () => {
      cy.get('button[data-cy="save-page-btn"]')
        .find('svg[data-cy="bookmark-icon"]')
        .should('be.visible');

      cy.screenshot('Unsaved Page - Save Button', {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });

  describe('Saved Page Status', () => {
    it('toggles the "Save Page" button text to "Page Saved" on click', () => {
      cy.get('button[data-cy="save-page-btn"]').click();

      // close the dialog
      cy.wait(500);
      cy.get('button[data-cy="sheet-close-btn"]').click();

      cy.get('button[data-cy="save-page-btn"]')
        .contains(/page saved/i)
        .should('be.visible');

      cy.wait(500);
      cy.screenshot('Saved Page - Save Button', {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('shows a Checked Bookmark Icon within the "Save Page" button', () => {
      cy.get('button[data-cy="save-page-btn"]').click();

      cy.wait(500);
      cy.get('[data-cy="sheet-close-btn"]', { timeout: 300 }).should(
        'be.visible',
      );

      // close the dialog
      cy.wait(500);
      cy.get('button[data-cy="sheet-close-btn"]').click();

      cy.get('button[data-cy="save-page-btn"]')
        .find('svg[data-cy="bookmark-check-icon"]')
        .should('be.visible');
    });

    it('shows the dialog when the "Save Page" button is clicked', () => {
      cy.get('button[data-cy="save-page-btn"]').click();
      cy.get('[data-cy="page-saved-text"]').should('be.visible');

      cy.screenshot('Saved Page - Dialog', {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('should dismiss and unsave the page when the bookmark-chek icon button is clicked', () => {
      cy.get('button[data-cy="save-page-btn"]').click();

      cy.wait(500);
      cy.get('button[data-cy="sheet-close-btn"]').click();

      cy.contains(/page saved/i).should('be.visible');

      cy.wait(500);
      cy.screenshot('Unsaved Page Action - Before', {
        overwrite: true,
        capture: 'viewport',
      });

      cy.contains(/page saved/i).click();

      cy.wait(500);

      cy.screenshot(
        'Unsaved Page Action - (During) Dialog Bookmark Check clicked',
        {
          overwrite: true,
        capture: 'viewport',
      });

      cy.get('[data-cy="unsave-page-btn"]').click();

      cy.wait(500);
      cy.contains(/page saved/i).should('not.exist');
      cy.contains(/save page/i).should('be.visible');

      cy.screenshot('Unsaved Page Action - After', {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });
});
