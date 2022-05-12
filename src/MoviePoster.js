import React from 'react';
import './MoviePoster.css'

const MoviePoster = ({ title, posterPath, id }) => {
  console.log(title)
  return(
    <div className={'moviePoster'}>
      <img src={posterPath} alt={`Movie poster for ${title}`}/>
      <h3>{title}</h3>
    </div>
  )
}

export default MoviePoster;