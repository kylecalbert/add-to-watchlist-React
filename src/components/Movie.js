import React from "react"
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
function Movie({movie}) {
    return (
        <div className="movie">
            <img className="movie-image" src={IMG_API+movie.poster_path} alt={movie.title}/>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className={`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
                 
            </div>
            <div className="movie-overflow">
                <h2>Overview</h2>
                <p>{movie.overview}</p>

            </div>

        </div>
    )
}

export default Movie
