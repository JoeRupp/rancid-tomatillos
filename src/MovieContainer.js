import React from "react";
import './MovieContainer.css'

const MovieContainer = ({ movieList }) => {

  return(
    <div>
      <MoviePoster />
      {!movieList.length && <h2>Uh oh! Something went wrong. We are unable to load any movies at this time. Womp womp.</h2>}
    </div>
  )
}


export default MovieContainer;