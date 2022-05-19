import React, {Component} from 'react';
import '../styling/MovieDetails.css';


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.currentMovie,
      currentMovie: '',
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
      .then(response => {
        if (!response.ok) {
          throw Error()
        } else {
          return response.json()
        }
      })
      .then(data => data.movie)
      .then(movie => this.setState({currentMovie: movie}))
      .catch(err => console.log(err))
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

render = () => {
  return (
    <div className='movieDetails'>
      <img className='movieBackdrop' src= {this.state.currentMovie.backdrop_path}/>
      <div className='movieInfo'>
        {/* <button className='homeButton' onClick={() => displayHomeScreen()}>Back</button> */}
        <h1 className='movieTitle'>{this.state.currentMovie.title}</h1>
        <div className='movieDescription'>
          <p className='movieTagline'>{this.state.currentMovie.tagline}</p>
          <p className='movieOverview'>{this.state.currentMovie.overview}</p>
        </div>
        {/* <p className='movieFacts'>{`Rating: ${currentMovie.average_rating}/10 | Genres: ${currentMovie.genres} | Time: ${currentMovie.runtime} mins | Release Date: ${currentMovie.release_date} | Budget: $${currentMovie.budget.toLocaleString()} | Revenue: $${currentMovie.revenue.toLocaleString()}`} </p> */}
      </div>
    </div>
   )  
  }
}

export default MovieDetails;