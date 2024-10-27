describe('Page Collection', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('Empty Page Collection', () => {
    it("should show 'Save Page' button", () => {
      cy.get('button[data-cy="save-page-btn"]').click();
    });
  });
});
