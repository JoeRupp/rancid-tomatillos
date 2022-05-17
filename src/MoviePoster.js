import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({ title, posterPath, id, chooseMovie }) => {

  return(
    <div className='moviePoster'>
      <img className='poster' src={posterPath} alt={`Movie poster for ${title}`} onClick={() => chooseMovie(id)}/>
      <h3>{title}</h3>
    </div>
  )
}

export default MoviePoster;
