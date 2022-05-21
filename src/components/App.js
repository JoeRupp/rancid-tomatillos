import React, { Component } from 'react';
import getFetch from '../apiCalls';
import Nav from './Nav';
import MovieContainer from './MovieContainer';
import MovieDetails from './MovieDetails';
import '../styling/App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movieList: [],
      filteredList: [],
      searchError: false
    };
  };

  componentDidMount = () => {
    getFetch("movies")
    .then(data => this.setState({movieList: data.movies}))
  };

  searchMovies = (search) => {
    const filtered = this.state.movieList.filter(movie => movie.title.includes(search))
    if (!filtered.length && search) {
      this.setState({searchError: true})
    } else {
      this.setState({searchError: false})
      this.setState({ filteredList: filtered })
    };
  };

  render() {
    return (
      <main>
        {this.state.searchError && <h3 className="searchError">Sorry, no movies match your search!</h3>}
        <Route exact path='/' render={() => <Nav searchMovies={this.searchMovies}/> }/>
        <Route exact path='/' render={() => <MovieContainer movies={this.state.filteredList.length > 0 ? this.state.filteredList : this.state.movieList} />} />
        <Route exact path='/:id' render={({ match }) => <MovieDetails currentMovie={match.params.id} searchMovies={this.searchMovies} />} />
      </main>
    );
  };
};

export default App;

