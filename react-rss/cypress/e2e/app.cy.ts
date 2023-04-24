/// <reference types="cypress" />

describe('check pages', () => {
    it('Visits the form page', () => {
      cy.visit('/forms')
  
      cy.get('input[type="text"]').type('Hanna')
      cy.should('have.value', 'Hanna')
    })
  })
  
  // describe('one check', () => {
  // it('check'),
  //   () => {
  //     cy.visit('/')
  
  //     cy.get('input').should('have.value', '')
  //   },
  
  //   it('check about page'),
  //     () => {
  //       cy.visit('/about')
  
  //       cy.get('.content').contains('About Us Page')
  //     }
  // })
  