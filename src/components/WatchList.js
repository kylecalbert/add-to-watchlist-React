import React, { useContext } from "react";
import "./Movie.css";

import { GlobalContext } from "./context/GlobalState";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};
function WatchList() {
  const { removeMovieFromWatchList, watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-container">
      {watchlist.map((movies) => (
        <div className="movie">
          <img
            className="movie-image"
            src={IMG_API + movies.poster_path}
            alt={movies.title}
          />

          <div className="movie-info">
            <h3>{movies.title}</h3>
            <span className={`tag ${setVoteClass(movies.vote_average)}`}>
              {movies.vote_average}
            </span>
          </div>

          <div className="movie-overflow">
            <h2>Overview</h2>
            <p>{movies.overview}</p>
            <button
              className="watchlist-btn"
              onClick={() => removeMovieFromWatchList(movies.id)}
            >
              Remove From watchlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WatchList;
