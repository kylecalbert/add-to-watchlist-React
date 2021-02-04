import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState = {
  watchlist: [],
  watched: [],
};

//create context

export const GlobalContext = createContext(initialState); //so we can access it from other variables

//provider components
export const GlobalProvider = (props) => {
  ///function takes in prop and returned object stored in glabal state variable
  const [state, dispatch] = useReducer(AppReducer, initialState); //DISPATCH SENDS ACTION TO APP REDUCER
  //actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id }); //setting payload to id
  };

  ///passing to global state provider so we can access from other components
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList: addMovieToWatchList,
        removeMovieFromWatchList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
//provider components
