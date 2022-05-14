
import React, { Component } from 'react';
import Nav from './Nav'
import MovieContainer from './MovieContainer'
import movieData from './movieData'
import MovieDetails from './MovieDetails'
import './App.css';
import movieDetails from './movieDetailData';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      currentMovie: ""
    }
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => this.setState({movieList: data.movies}))
      .catch(err => console.log(err))
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
