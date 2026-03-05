class HeaderPage {
  clickHomeLogo() {
    cy.get('[data-qa="home-logo-link"]').click();
  }

  clickHomeLinkAnon() {
    cy.get('[data-qa="home-link"]').click();
  }

  clickHomeLinkAuth() {
    cy.get('[data-qa="home-link-auth"]').click();
  }

  clickSignInLink() {
    cy.get('[data-qa="signin-link"]').click();
  }

  clickSignUpLink() {
    cy.get('[data-qa="signup-link"]').click();
  }

  clickNewArticleLink() {
    cy.get('[data-qa="new-article-link"]').click();
  }

  clickSettingsLink() {
    cy.get('[data-qa="settings-link"]').click();
  }

  clickProfileLink() {
    cy.get('[data-qa="profile-link"]').click();
  }

  shouldShowSignInLink() {
    cy.get('[data-qa="signin-link"]').should('be.visible');
  }

  shouldShowNewArticleLink() {
    cy.get('[data-qa="new-article-link"]').should('be.visible');
  }

  shouldShowProfileLink() {
    cy.get('[data-qa="profile-link"]').should('be.visible');
  }
}

export default new HeaderPage();
