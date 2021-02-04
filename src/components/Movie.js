import React, { useContext } from "react";
import "./Movie.css";

import { GlobalContext } from "./context/GlobalState";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const IMG_API = "https://image.tmdb.org/t/p/w500/";
function Movie({ movie }) {
  const { addMovieToWatchList, watchlist } = useContext(GlobalContext);
  let storedMovie = watchlist.find((element) => element.id === movie.id); // how does this function work?
  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div>
      <div className="movie">
        <img
          className="movie-image"
          src={IMG_API + movie.poster_path}
          alt={movie.title}
        />

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <span className={`tag ${setVoteClass(movie.vote_average)}`}>
            {movie.vote_average}
          </span>
        </div>

        <div className="movie-overflow">
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <button
            disabled={watchlistDisabled}
            className="watchlist-btn"
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
