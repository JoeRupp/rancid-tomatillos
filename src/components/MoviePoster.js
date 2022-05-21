import React from 'react';
import '../styling/MoviePoster.css';
import { Link } from 'react-router-dom';

const MoviePoster = ({ title, posterPath, id}) => {
  return(
    <div className='moviePoster' key={id}>
      <Link to={`/${id}`}>
       <img className='poster' src={posterPath} alt={`Movie poster for ${title}`} />
      </Link>
      <h3>{title}</h3>
    </div>
  )
};

export default MoviePoster;
