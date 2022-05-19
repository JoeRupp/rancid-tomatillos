describe('Individual movie details', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: './movieDetails.json' })
      .visit('http://localhost:3000/694919')
  })

  it('should display the selected movies information', () => {
    cy.contains('Fake Movie Title')
    cy.contains('IT\'S A MOVIE!')
    cy.get('button').should('exist')
    // which is better below?
    cy.contains('A cute dog!')
    cy.get('.movieOverview').should('have.text', 'Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!')
  })

  it('should show videos', () => {
    // Do this later
  });

  it('should have a back button to return to the main movie display', () => {
    cy.get('.homeButton')
      .click()
      cy.contains('RANCID TOMATILLOS')
      .url()
      .should('include', '/')
  });

  it('should display budget/revenue info if the details are provided', () => {
    cy.contains('Budget: $63,000,000')
    cy.contains('Revenue').should('not.exist')
  });

  it('should display error message if data is missing', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { statusCode: 500, fixture: './movieDetails.json' })
    .visit('http://localhost:3000/694919')
    cy.contains('Uh oh! Something went wrong. We are unable to load any movies details at this time. Womp womp.')
  });
})