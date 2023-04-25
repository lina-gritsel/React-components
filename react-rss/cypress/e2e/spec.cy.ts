/// <reference types="cypress" />

describe('check pages', () => {
  it('visit the form page', () => {
    cy.visit('/forms')

    cy.get('input[type="text"]').type('Hanna')
    cy.should('have.value', 'Hanna')
  })

  it('visit home page', () => {
    cy.visit('/')

    cy.get('input').type('Rick')
    cy.should('have.value', 'Rick')
  })

  it('visit about page', () => {
    cy.visit('/about')

    cy.get('[data-cy="aboutPage"]').should('have.text', 'About Us Page')
  })

  it('checks 404 page works', () => {
    cy.visit('/404')

    cy.get('[data-cy="404Page"]').should('have.text', '404 Page')
  })

  it('the end', () => {
    expect(true).to.equal(true)
  })
})
