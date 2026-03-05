import PageObject from './PageObject.js';

class HomePageObject extends PageObject {
  get usernameLink() {
    return cy.get('[data-qa="profile-link"]');
  }

  assertHeaderContainUsername(username) {
    this.usernameLink
      .should('contain', username);
  }
}

export default HomePageObject;
