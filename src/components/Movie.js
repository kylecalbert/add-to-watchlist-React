import React from 'react'
import'./Movie.css';


const setVoteClass = (vote) =>{
    if(vote>=8){
        return 'green'


    }else if(vote>=6){
        return 'orange'
    }else{
        return 'red'

    }
    
}
const IMG_API = "https://image.tmdb.org/t/p/w500/"  
function Movie({title,poster_path,overview,vote_average}) {
    return (
        <div className="movie">
            <img className="movie-image" src={IMG_API+poster_path} alt={title}/>

            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
                 
            </div>
            <div className="movie-overflow">
                <h2>Overview</h2>
                <p>{overview}</p>
                <button>Add to watchlist</button>
            </div>

        </div>
    )
}

export default Movie
