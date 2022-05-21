import React from 'react';
import MoviePoster from './MoviePoster';
import '../styling/MovieContainer.css';

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
  });

  return(
    <div className='movieContainer'>
       <div className='title'>
          <h1>RANCID TOMATILLOS</h1>
          <h2>THE SECOND BEST IN MOVIE ENTERTAINMENT</h2>
        </div>
      {listOfMovies}
      {!movies.length && <h3 className="error">Uh oh! Something went wrong. We are unable to load any movies at this time. Womp womp.</h3>}
    </div>
  );
};

export default MovieContainer;
