
import React, { Component } from 'react';
import Nav from './Nav'
import MovieContainer from './MovieContainer'
import MovieDetails from './MovieDetails'
import './App.css';
import movieData from './movieData';
import movieDetails from './movieDetailData';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: movieData.movies,
      currentMovie: ""
    }
  }

  chooseMovie = (id) => {
    this.setState({ currentMovie: movieDetails.movie })
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  displayHomeScreen = () => {
    this.setState({ currentMovie: "" })
  }

  render() {
    return (
      <main>
        {!this.state.currentMovie && <Nav/>}
        {!this.state.currentMovie && <MovieContainer movies={this.state.movieList} chooseMovie={this.chooseMovie}/>}
        {this.state.currentMovie && <MovieDetails currentMovie={this.state.currentMovie} displayHomeScreen={this.displayHomeScreen}/>}
      </main>
    )
  }
}

export default App;
