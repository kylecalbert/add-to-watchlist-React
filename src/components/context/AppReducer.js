export default(state,action) =>{
    switch(action.type){  //tells reducer on how to change the state
        case "ADD_MOVIE_TO_WATCHLIST":
            return{
                ...state, //return existing state
                watchlist:[action.payload, ...state.watchlist] //changing watchlist state, adds new watchlist arry to existing
            }


        default:
            return state;
    }
}
