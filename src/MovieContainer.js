import React from 'react';
import MoviePoster from './MoviePoster'
import './MovieContainer.css'

const MovieContainer = ({ movies }) => {
  const listOfMovies = movies.map(movie => {
    return (
      <MoviePoster
        title={movie.title}
        posterPath={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />
    )
  }) 

  return(
    <div>
      {listOfMovies}
      {!movies.length && <h2>Uh oh! Something went wrong. We are unable to load any movies at this time. Womp womp.</h2>}
    </div>
  )
}


export default MovieContainer;