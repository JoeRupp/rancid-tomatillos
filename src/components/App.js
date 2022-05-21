import React, { Component } from 'react';
import Nav from './Nav'
import MovieContainer from './MovieContainer'
import MovieDetails from './MovieDetails'
import '../styling/App.css';
import { Route, NavLink, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      filteredList: []
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

  searchMovies = (search) => {
    const filtered = this.state.movieList.filter(movie => movie.title.includes(search.userInput))
    this.setState({ filteredList: filtered })

  }

  render() {
    return (
      <main>
        <Route exact path='/' render={() => <Nav searchMovies={this.searchMovies}/> }/>
        <Route exact path='/' render={() => <MovieContainer movies={this.state.filteredList.length > 0 ? this.state.filteredList : this.state.movieList} />} />
        <Route exact path='/:id' render={({ match }) => <MovieDetails currentMovie={match.params.id} searchMovies={this.searchMovies} />}/>
      </main>
    )
  }
}

export default App;

