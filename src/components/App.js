
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
      .then(data => data.movie)
      .then(movie => this.setState({ currentMovie: movie }))
      // .then(() => console.log("booger"))
      .catch(err => this.setState({ currentMovie: "error" }))
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // displayHomeScreen = () => {
  //   this.setState({ currentMovie: "" })
  // }

  render() {
    return (
      <main>
        {!this.state.currentMovie && <Nav/>}
        <Switch>
          <Route exact path='/' render={() => <MovieContainer movies={this.state.movieList} />} />
          <Route exact path='/:id' render={({ match }) => {
            this.chooseMovie(parseInt(match.params.id)) 
            console.log("earwax!")
            return <MovieDetails currentMovie={this.state.currentMovie}/>
            }} />
        </Switch>
      </main>
    )
  }
}



//return <MovieDetails currentMovie={this.state.currentMovie} displayHomeScreen={this.displayHomeScreen}/>

// this.chooseMovie(match.params.id)


// {!this.state.currentMovie && <MovieContainer movies={this.state.movieList} chooseMovie={this.chooseMovie}/>}
// {this.state.currentMovie && <MovieDetails currentMovie={this.state.currentMovie} displayHomeScreen={this.displayHomeScreen}/>}

//         <Route exact path='/:id' render={() => <MovieDetails currentMovie={this.state.currentMovie} displayHomeScreen={this.displayHomeScreen}/>} />

export default App;

// async function renderMovieDetails() {
//   const movieDetails = await <MovieDetails currentMovie={this.state.currentMovie} displayHomeScreen={this.displayHomeScreen}/>
//   return movieDetails
// }
