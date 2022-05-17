describe('Rancid Tomatillos main movie display', () => {
  beforeEach(() => {
    cy.fixture('./movieData.json').as('movieData')
    cy.intercept('POST', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', '@movieData')
    cy.visit('http://localhost:3000/')
  })

  it('displays the main movie view when the page loads', () => {
    cy.contains('RANCID TOMATILLOS')
    cy.contains('YOUR GO TO FOR MOVIES AT HOME')
    .get('nav').find('input[type=text]')
  })

  it('should populate a display of movies', () => {
   // look for movie poster image/title elements to exist
   // check array - is the first movie "blank"
  });

  it('should direct to another page when a movie poster is clicked', () => {
   
  });

  it('should filter movies when something is entered into the search bar', () => {
   
  });

  it('should display error message if data is missing', () => {
   
  });
})
