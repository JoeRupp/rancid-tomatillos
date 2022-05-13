import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({ title, posterPath, id }) => {
  return(
    <div className='moviePoster'>
      <img className='poster' src={posterPath} alt={`Movie poster for ${title}`}/>
      <h3>{title}</h3>
    </div>
  )
}

export default MoviePoster;