import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import React, {useEffect, useState} from 'react';


const MOVIE_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5d74d71d';

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
    .then(response => response.json())
    .then(jsonResponse => {
      setMovies(jsonResponse.Search);
      setLoading(false);
    });
  },[]);


  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);
  
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=5d74d71d`)
    .then(response => response.json())
    .then(jsonResponse => {
      if(jsonResponse.Response === "True") {
        setMovies(jsonResponse.Search);
        setLoading(false);
      }else{
        setErrorMessage(jsonResponse.Error);
        setLoading(false);
      }
    })

  };




  return (
    <div className="App">
        <Header text='HOOKED'/>
        <Search search={search}/>
        <p className="App-intro">
          Sharing a few of our favour movies
        </p>
        <div className='movies'>
          {loading && !errorMessage ? (<span>Loading..</span>) : errorMessage ? 
            <div className='errorMessage'>{errorMessage}</div> : (
              movies?.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
              ))
            )}
        </div>
    </div>
  );
}

export default App;
