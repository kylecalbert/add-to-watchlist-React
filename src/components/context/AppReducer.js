export default (state, action) => {
  switch (
    action.type //tells reducer on how to change the state
  ) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state, //return existing state
        watchlist: [action.payload, ...state.watchlist], //changing watchlist state, adds new watchlist arry to existing
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload //for each movie in the watchlist, return movie if id!= payload id passed in
        ),
      };
    default:
      return state;
  }
};
