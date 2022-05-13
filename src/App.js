import React, { Component } from 'react';
import Nav from './Nav'
import MovieContainer from './MovieContainer'
import './App.css';
import movieData from './movieData';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <Nav />
        <MovieContainer movies={this.state.movieList}/>
      </main>
    )
  }
}

export default App;
