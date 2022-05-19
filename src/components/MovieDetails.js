import React, {Component} from 'react';
import '../styling/MovieDetails.css';
import dayjs from 'dayjs';


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
        <button className='homeButton'>Back</button>
        <h1 className='movieTitle'>{this.state.currentMovie.title}</h1>
        <div className='movieDescription'>
          {this.state.currentMovie.tagline && <p className='movieTagline'>{this.state.currentMovie.tagline}</p>}
          {this.state.currentMovie.overview && <p className='movieOverview'>{this.state.currentMovie.overview}</p>}
        </div>
        <div className='movieFacts'>
        {this.state.currentMovie.average_rating && <p>{`Rating: ${this.state.currentMovie.average_rating.toFixed(2)}/10`} </p>}
        {this.state.currentMovie.genres && <p>{`Genres: ${this.state.currentMovie.genres.join(', ')}`} </p> }
        {this.state.currentMovie.runtime && <p>{`Time: ${this.state.currentMovie.runtime} mins`} </p> }
        {this.state.currentMovie.release_date && <p>{`Release Date: ${dayjs(this.state.currentMovie.release_date).format('MM/DD/YYYY')}`} </p> }
        {this.state.currentMovie.budget && <p>{`Budget: $${this.state.currentMovie.budget.toLocaleString()}`} </p> }
        {this.state.currentMovie.revenue && <p>{`Revenue: $${this.state.currentMovie.revenue.toLocaleString()}`} </p> }
        </div>
      </div>
    </div>
   )  
  }
}

export default MovieDetails;