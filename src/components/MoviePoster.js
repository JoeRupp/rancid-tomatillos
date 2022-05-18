import React from 'react';
import '../styling/MoviePoster.css'
import { Link } from 'react-router-dom';

const MoviePoster = ({ title, posterPath, id}) => {

  return(
    <Link to={`/${id}`} key={id}>
    <div className='moviePoster'>
      <img className='poster' src={posterPath} alt={`Movie poster for ${title}`} />
      <h3>{title}</h3>
    </div>
    </Link>
  )
}

export default MoviePoster;
