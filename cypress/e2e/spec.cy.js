describe('Basic tests', () => {
  it('Visit base URL', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Contain correct header text', () => {
    cy.visit('http://localhost:3000/')
  
      cy.get('.navbar-brand').should('contain.text', 'Critique Critique');

  })

})