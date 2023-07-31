/// <reference types="cypress" />

describe('app page loads', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the index page', () => {
    cy.url().should("contains", "/");
  })

})
