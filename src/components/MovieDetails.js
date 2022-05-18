import React from 'react';
import '../styling/MovieDetails.css';

const MovieDetails = ({currentMovie}) => {
  // let currentMovie;

  // const displayCurrentMovie = () => {
    // console.log(currentMovie)
  if (currentMovie === "error") {
    return (
      <div>
        {/* <button className='homeButton' onClick={() => displayHomeScreen()}>Back</button> */}
        <h2>Uh oh! Something went wrong. We are unable to load any movies details at this time. Womp womp.</h2>
      </div>
    )
   } else {
     return (
      <div className='movieDetails'>
        <img className='movieBackdrop' src= {currentMovie.backdrop_path}/>
        <div className='movieInfo'>
          {/* <button className='homeButton' onClick={() => displayHomeScreen()}>Back</button> */}
          <h1 className='movieTitle'>{currentMovie.title}</h1>
          <div className='movieDescription'>
            <p className='movieTagline'>{currentMovie.tagline}</p>
            <p className='movieOverview'>{currentMovie.overview}</p>
          </div>
          {/* <p className='movieFacts'>{`Rating: ${currentMovie.average_rating}/10 | Genres: ${currentMovie.genres} | Time: ${currentMovie.runtime} mins | Release Date: ${currentMovie.release_date} | Budget: $${currentMovie.budget.toLocaleString()} | Revenue: $${currentMovie.revenue.toLocaleString()}`} </p> */}
        </div>
      </div>
     )
   }
  // }

    // return (<h1>HI!!!!</h1>)

  // chooseMovie = (id) => {

  // console.log("before")
  //  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw Error()
  //       } else {
  //         return response.json()
  //       }
  //     })
  //     .then(data => displayMovie(data.movie))
  //     .catch(err => console.log(err))

  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   })
  // // }


  //   const displayMovie = (currentMovie) => {
  //     console.log("function")
  //     return (
  //       <div className='movieDetails'>
  //         <img className='movieBackdrop' src= {currentMovie.backdrop_path}/>
  //         <div className='movieInfo'>
  //           <button className='homeButton' onClick={() => displayHomeScreen()}>Back</button>
  //           <h1 className='movieTitle'>{currentMovie.title}</h1>
  //           <div className='movieDescription'>
  //             <p className='movieTagline'>{currentMovie.tagline.toUpperCase()}</p>
  //             <p className='movieOverview'>{currentMovie.overview}</p>
  //           </div>
  //           <p className='movieFacts'>{`Rating: ${currentMovie.average_rating}/10 | Genres: ${currentMovie.genres.join(",")} | Time: ${currentMovie.runtime} mins | Release Date: ${currentMovie.release_date} | Budget: $${currentMovie.budget.toLocaleString()} | Revenue: $${currentMovie.revenue.toLocaleString()}`} </p>
  //         </div>
  //       </div>
  //     )
  //   }

  //   console.log("after")


}

export default MovieDetails;
// <img className='movieBackground' src={} alt={`Movie poster for ${}`}/>
