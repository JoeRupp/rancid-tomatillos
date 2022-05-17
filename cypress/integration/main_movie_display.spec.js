describe('Rancid Tomatillos main movie display', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: './movieData.json' })
      .visit('http://localhost:3000/')
  })

  it('should display the main movie view when the page loads', () => {
    cy.contains('RANCID TOMATILLOS')

    cy.contains('YOUR GO TO FOR MOVIES AT HOME')
      .get('nav')
      .find('input[type=text]')
  })

  it('should populate a display of movies', () => {
    cy.get('.moviePoster')
      .should('have.length', 5)
      .last()
      .should('have.text', 'Peninsula')

    cy.contains('Uh oh! Something went wrong. We are unable to load any movies at this time. Womp womp.').should('not.exist')
  });

  it.skip('should direct to another page when a movie poster is clicked', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: './movieDetails.json' })
      .get('.moviePoster')
      .first()
      .click()
      .url()
      .should('include', '/694919')
  });

  it.skip('should filter movies when something is entered into the search bar', () => {
    cy.get('nav')
      .find('input[type=text]')
      .type('Mulan')
      .get('button')
      .click()
      .get('.moviePoster')
      .should('have.length', 1)
      .should('have.text', 'Mulan')
  });

  it('should display error message if data is missing', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500, fixture: './movieData.json' })
      .visit('http://localhost:3000/')
      .contains('Uh oh! Something went wrong. We are unable to load any movies at this time. Womp womp.')
      // .should('exist')
  });
})
