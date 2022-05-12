import React, { Component } from 'react';
import Nav from './Nav'
import MovieContainer from './MovieContainer'
import './App.css';
import movieData from './movieData';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [
      ]
    }
  }

  render() {
    return (
      <main>
        <Nav />
        <h1>Rancid Tomatillos</h1>
        <MovieContainer movieList={this.state.movieList}/>
      </main>
    )
  }
}

export default App;
