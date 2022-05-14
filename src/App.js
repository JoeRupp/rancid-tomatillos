import React, { Component } from 'react';
import Nav from './Nav'
import MovieContainer from './MovieContainer'
import MovieDetails from './MovieDetails'
import './App.css';
import movieData from './movieData';
import movieDetails from './movieDetailData';
console.log(movieDetails.movie)
class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: movieData.movies,
      currentMovie: ""
    }
  }

  chooseMovie = (id) => {
    console.log(id)
    this.setState({ currentMovie: movieDetails.movie })
  }

  render() {
    return (
      <main>
        <Nav />
        {!this.state.currentMovie && <MovieContainer movies={this.state.movieList} chooseMovie={this.chooseMovie}/>}
        {this.state.currentMovie && <MovieDetails currentMovie={this.state.currentMovie}/>}
      </main>
    )
  }
}

export default App;
