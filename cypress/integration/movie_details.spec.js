describe('Individual movie details', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: './movieDetails.json' })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', { fixture: './movieVideos.json' })
      .visit('http://localhost:3000/694919')
  })

  it('should display the selected movies information', () => {
    cy.contains('Fake Movie Title')
    cy.contains('Release Date: 12/04/2019')
    cy.contains('Rating: 6.00/10')
    cy.contains('IT\'S A MOVIE!')
    cy.contains('Genres: Drama')
    cy.contains('Budget: $63,000,000')
    cy.contains('Time: 139 mins')
    cy.contains('Revenue').should('not.exist')
    cy.get('button').first().should('have.text', 'Back')
    cy.get('.movieOverview').should('have.text', 'Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!')
  })

  it('should show a background image', () => {
    cy.get('img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg')
  });


  it('should show a video', () => {
    cy.get('iframe').should('exist')
  });

  it('should show other video options as buttons that a user can click to view instead', () => {
    cy.get('.videoOptions')
      .should('exist', 'button')
      .get('button')
      .last()
      .click()
    cy.get('iframe').should('have.attr', 'src').should('include', '1UXZEGYSwgg')
  });

  it('should have a back button to return to the main movie display', () => {
    cy.get('.homeButton')
      .click()
    cy.contains('RANCID TOMATILLOS')
      .url()
      .should('include', '/')
  });

  it('should display error message if data is missing', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { statusCode: 500, fixture: './movieDetails.json' })
      .visit('http://localhost:3000/694919')
    cy.contains('Uh oh! Something went wrong. We are unable to load any movies details at this time. Womp womp.')
  });

  it('should display error message if data is missing', () => {
    cy.visit('http://localhost:3000/1')
    cy.contains('Uh oh! Something went wrong. We are unable to load any movies details at this time. Womp womp.')
  });

  it('should display error message if data is missing', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { statusCode: 404, fixture: './movieDetails.json' })
      .visit('http://localhost:3000/694919')
    cy.contains('Uh oh! Something went wrong. We are unable to load any movies details at this time. Womp womp.')
  });
})