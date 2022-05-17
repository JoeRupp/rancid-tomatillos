import React from 'react';
import '../styling/MovieDetails.css';

const MovieDetails = ({currentMovie, displayHomeScreen}) => {
  console.log(currentMovie)
  if (currentMovie === "error") {
    return (
      <div>
        <button className='homeButton' onClick={() => displayHomeScreen()}>Back</button>
        <h2>Uh oh! Something went wrong. We are unable to load any movies details at this time. Womp womp.</h2>
      </div>
    )
   } else {
     return (
      <div className='movieDetails'>
        <img className='movieBackdrop' src= {currentMovie.backdrop_path}/>
        <div className='movieInfo'>
          <button className='homeButton' onClick={() => displayHomeScreen()}>Back</button>
          <h1 className='movieTitle'>{currentMovie.title}</h1>
          <div className='movieDescription'>
            <p>{currentMovie.tagline.toUpperCase()}</p>
            <p>{currentMovie.overview}</p>
          </div>
          <p className='movieFacts'>{`Rating: ${currentMovie.average_rating}/10 | Genres: ${currentMovie.genres.join(",")} | Time: ${currentMovie.runtime} mins | Release Date: ${currentMovie.release_date} | Budget: $${currentMovie.budget.toLocaleString()} | Revenue: $${currentMovie.revenue.toLocaleString()}`} </p>
        </div>
      </div>
     )
   }
  }

export default MovieDetails;
// <img className='movieBackground' src={} alt={`Movie poster for ${}`}/>
