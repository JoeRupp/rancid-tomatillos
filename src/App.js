
import React, { Component } from 'react';
import Nav from './Nav'
import MovieContainer from './MovieContainer'
import MovieDetails from './MovieDetails'
import './App.css';
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
      .then(response => {
        if (!response.ok) {
          throw Error()
        } else {
          return response.json()
        }
      })
      .then(data => this.setState({movieList: data.movies}))
      .catch(err => console.log(err))
  }


  chooseMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {
        if (!response.ok) {
          throw Error()
        } else {
          return response.json()
        }
      })
      .then(data => this.setState({currentMovie: data.movie}))
      .catch(err => this.setState({currentMovie: "error"}))
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
