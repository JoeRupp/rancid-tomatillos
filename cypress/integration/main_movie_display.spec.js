describe('Rancid Tomatillos main movie display', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: './movieData.json' })
      .visit('http://localhost:3000/')
  })

  it('should display the main movie view when the page loads', () => {
    cy.contains('RANCID TOMATILLOS')
    cy.contains('THE SECOND BEST IN MOVIE ENTERTAINMENT')
      .get('form')
      .find('input[type=text]')
  })

  it('should populate a display of movies', () => {
    cy.get('.moviePoster')
      .should('have.length', 5)
      .last()
      .should('have.text', 'Peninsula')
      .get('img')
      .last()
      .should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg')
    cy.contains('Uh oh! Something went wrong. We are unable to load any movies at this time. Womp womp.').should('not.exist')
  });

  it('should direct to another page when a movie poster is clicked', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: './movieDetails.json' })
      .get('.moviePoster')
      .first()
      .click()
      .url()
      .should('include', '/694919')
  });

  it('should filter movies when something is entered into the search bar', () => {
    cy.get('form')
      .find('input[type=text]')
      .type('Mulan')
      .get('button')
      .first()
      .click()
      .get('.moviePoster')
      .should('have.length', 1)
      .should('have.text', 'Mulan')
  });

  it('should clear search results when clear search button is clicked', () => {
    cy.get('form')
      .find('input[type=text]')
      .type('Mulan')
      .get('button')
      .first()
      .click()
      .get('.moviePoster')
      .should('have.length', 1)
      .should('have.text', 'Mulan')
      .get('form')
      .get('button')
      .last()
      .click()
      .get('.moviePoster')
      .should('have.length', 5)
  });

  it('should display an error message if what the user searches doesn\'t exist', () => {
    cy.get('form')
      .find('input[type=text]')
      .type('Forrest Gump')
      .get('button')
      .first()
      .click()
    cy.contains('Sorry, no movies match your search!')
  });

  it('should display error message if data is missing', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500, fixture: './movieData.json' })
      .visit('http://localhost:3000/')
      .contains('Uh oh! Something went wrong. We are unable to load any movies at this time. Womp womp.')
  });

  it('should display error message if data is missing', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 404, fixture: './movieData.json' })
      .visit('http://localhost:3000/')
      .contains('Uh oh! Something went wrong. We are unable to load any movies at this time. Womp womp.')
  });
})
