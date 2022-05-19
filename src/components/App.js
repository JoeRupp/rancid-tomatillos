
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

  render() {
    return (
      <main>
        <Route exact path='/' render={() => <Nav/> }/>
        <Route exact path='/' render={() => <MovieContainer movies={this.state.movieList} />} />
        <Route exact path='/:id' render={({ match }) => <MovieDetails currentMovie={match.params.id}/>}/>
      </main>
    )
  }
}

export default App;

