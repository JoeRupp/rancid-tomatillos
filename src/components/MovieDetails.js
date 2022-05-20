import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styling/MovieDetails.css';
import dayjs from 'dayjs';


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.currentMovie,
      currentMovie: '',
      videos: [],
      currentVideo: ''
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}/videos`)
      .then(response => {
        if (!response.ok) {
          throw Error()
        } else {
          return response.json()
        }
      })
      .then(data => data.videos)
      .then(videos => this.setState({videos: videos}))
      .then(() => this.setState({currentVideo: this.state.videos[0]}))
      .catch(err => console.log(err))

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

  chooseVideo = (video) => {
    this.setState({currentVideo: video})
  }

  render = () => {
    if (!this.state.currentMovie) {
      return (<h3>Uh oh! Something went wrong. We are unable to load any movies details at this time. Womp womp.</h3>)
    } else {
      return (<div className='movieDetails'>
        <img className='movieBackdrop' src= {this.state.currentMovie.backdrop_path}/>
        <div className='movieInfo'>
          <Link to={`/`}><button className='homeButton'>Back</button></Link>
            <h1 className='movieTitle'>{this.state.currentMovie.title}</h1>
            <div className='movieDescription'>
              {this.state.currentMovie.tagline && <p className='movieTagline'>{this.state.currentMovie.tagline.toUpperCase()}</p>}
              {this.state.currentMovie.overview && <p className='movieOverview'>{this.state.currentMovie.overview}</p>}
            </div>
            <div className='movieFacts'>
              {this.state.currentMovie.average_rating && <p>{`Rating: ${this.state.currentMovie.average_rating.toFixed(2)}/10`} </p>}
              {this.state.currentMovie.genres && <p>{`Genres: ${this.state.currentMovie.genres.join(', ')}`} </p> }
              {this.state.currentMovie.runtime && <p>{`Time: ${this.state.currentMovie.runtime} mins`} </p> }
              {this.state.currentMovie.release_date && <p>{`Release Date: ${dayjs(this.state.currentMovie.release_date).format('MM/DD/YYYY')}`} </p> }
              {this.state.currentMovie.budget > 0 && <p>{`Budget: $${this.state.currentMovie.budget.toLocaleString()}`} </p> }
              {this.state.currentMovie.revenue > 0 && <p>{`Revenue: $${this.state.currentMovie.revenue.toLocaleString()}`} </p> }
            </div>
            <div className='video'>
              <iframe
                src={this.state.currentVideo && `https://www.youtube.com/embed/${this.state.currentVideo.key}`}
                title="YouTube Video"
                frameBorder="0"
                width="100%"
                height="100%"
                >
              </iframe>
            </div>
            <div className='videoOptions'>
              {this.state.videos.map((video) => <button key={`${video.id}`} onClick={() => this.chooseVideo(video)}>{`${video.type}`}</button>)}
            </div>
        </div>
      </div> )
    } 
  }
}

export default MovieDetails;