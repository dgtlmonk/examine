// Define at the top of the spec file or just import it
function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`,
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    }),
  );

  console.table(violationData);
}

describe('Manage Page Status', () => {
  beforeEach(() => {
    cy.viewport('ipad-2');
    cy.visit('http://localhost:3000/');
    cy.injectAxe();
  });

  describe.only('Unsaved Page Status', () => {
    const screenshotFolder = `unsaved-page-status/`;
    // Then in your test...
    it.only('Logs violations to the terminal', () => {
      cy.checkA11y(null, null, terminalLog);
    });

    it("displays a 'Save Page' button", () => {
      cy.get('button[data-cy="save-page-to-collection-btn"]')
        .contains(/save page/i)
        .should('be.visible');

      cy.checkA11y(null, null, terminalLog);
    });

    it('shows Bookmark icon within the "Save Page" button', () => {
      cy.get('button[data-cy="save-page-to-collection-btn"]')
        .find('svg[data-cy="bookmark-icon"]')
        .should('be.visible');

      cy.screenshot(`${screenshotFolder}/Default State`, {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });

  describe('Saved Page Status', () => {
    const screenshotFolder = `saved-page-status/`;

    it('toggles the "Save Page" button text to "Page Saved" on click', () => {
      cy.get('button[data-cy="save-page-to-collection-btn"]').click();

      cy.wait(500);
      cy.get('button[data-cy="sheet-close-btn"]').click();

      cy.get('button[data-cy="save-page-to-collection-btn"]')
        .contains(/page saved/i)
        .should('be.visible');

      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Saved Page State`, {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('shows a Checked Bookmark Icon within the "Save Page" button', () => {
      cy.get('button[data-cy="save-page-to-collection-btn"]').click();

      cy.wait(500);
      cy.get('[data-cy="sheet-close-btn"]', { timeout: 300 }).should(
        'be.visible',
      );

      // close the dialog
      cy.wait(500);
      cy.get('button[data-cy="sheet-close-btn"]').click();

      cy.get('button[data-cy="save-page-to-collection-btn"]')
        .find('svg[data-cy="bookmark-check-icon"]')
        .should('be.visible');
    });

    it('shows the dialog when the "Save Page" button is clicked', () => {
      cy.get('button[data-cy="save-page-to-collection-btn"]').click();
      cy.get('[data-cy="page-saved-text"]').should('be.visible');

      cy.screenshot(`${screenshotFolder}/Saved Page Dialog`, {
        overwrite: true,
        capture: 'viewport',
      });
    });

    it('should dismiss and unsave the page when the bookmark-chek icon button is clicked', () => {
      cy.get('button[data-cy="save-page-to-collection-btn"]').click();

      cy.wait(500);
      cy.get('button[data-cy="sheet-close-btn"]').click();

      cy.contains(/page saved/i).should('be.visible');

      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Unsaved Page Action - Initial State`, {
        overwrite: true,
        capture: 'viewport',
      });

      cy.contains(/page saved/i).click();

      cy.wait(500);
      cy.screenshot(`${screenshotFolder}/Unsaved Page Action - Final State`, {
        overwrite: true,
        capture: 'viewport',
      });

      cy.get('[data-cy="unsave-page-btn"]').click();

      cy.wait(500);
      cy.contains(/page saved/i).should('not.exist');
      cy.contains(/save page/i).should('be.visible');

      cy.screenshot(`${screenshotFolder}/Unsaved Page Action - Final State`, {
        overwrite: true,
        capture: 'viewport',
      });
    });
  });
});
