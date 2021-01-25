import './App.css';
import React, {useEffect,useState,useContext} from 'react';

import Movie from './components/Movie';


const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`


function App() {
  const[movies,setMovies] = useState([]);
  const[search, setSearch] = useState(" ");
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?${process.env.REACT_APP_API}&language=en-US&query=${search}&page=1&include_adult=false`

  console.log("THIS IS THE NEW WATCHLIST")



  useEffect (async ()=> {
    getMovies();
    console.log("EFFECT HAS BEEN RUN")

  },[])

  const getMovies = async() =>{
    const response = await fetch(FEATURED_API)
    const data = await response.json();
    setMovies(data.results)  //DATA IS NOW IN MOVIES, SET MOVIES UPDATES THE MOVIES
    
   



  }
  const getSearchedMovies = async() =>{
    const response = await fetch(SEARCH_API+search)
    const data = await response.json();
    setMovies(data.results)  //DATA IS NOW IN MOVIES, SET MOVIES UPDATES THE MOVIES
    console.log(data.results)
  }



  const handleOnSubmit =(e)=>{
    e.preventDefault();
    getSearchedMovies()
    
   


  }


  //when user types text, set search value to what they entered
  const handleOnChange =(e) =>{
    setSearch(e.target.value)
    e.preventDefault();

  }


  return (

   
    <div className="App">
       <form onSubmit={handleOnSubmit} >
      <input type="text" className="search" onChange={handleOnChange} value ={search} placeholder="search"/>
      </form>
   
      

      <div className="movie-container">
      {movies.length >0 && movies.map(movie=>(
        <Movie key = {movie.id} movie={movie} />

      ))}
      </div>       {/* putting the images and titles etc in container */}

     




    </div>
  );
  
}

export default App;
