import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({currentMovie}) => {
  return (
    <div className='movieDetails'>
      <img className='movieBackdrop' src= {currentMovie.backdrop_path}/>
      <div className='movieInfo'>
        <button className='homeButton'>Back</button>
        <h1 className='movieTitle'>{currentMovie.title}</h1>
        <div className='movieDescription'>
          <p>{currentMovie.tagline}</p>
          <p>{currentMovie.overview}</p>
        </div>
        <p className='movieFacts'>{`Rating: ${currentMovie.average_rating}/10 | Genres: ${currentMovie.genres.join(",")} | Time: ${currentMovie.runtime} mins | Release Date: ${currentMovie.release_date} | Budget: $${currentMovie.budget.toLocaleString()} | Revenue: $${currentMovie.revenue.toLocaleString()}`} </p>
      </div>
    </div>
  )
}

export default MovieDetails;
// <img className='movieBackground' src={} alt={`Movie poster for ${}`}/>
