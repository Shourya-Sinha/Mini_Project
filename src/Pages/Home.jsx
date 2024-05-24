import React, { useEffect, useState } from 'react'

const Home = () => {
  const [movieData, setMovieData] = useState(null);
  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=646b4a1c';

  const searchMovie = async () => {
    try {
      const result = await fetch(API_URL);
      const json = await result.json();
      console.log(json);
      setMovieData(json);  // Update the state with fetched data
    } catch (error) {
      console.log('Error in fetching', error);
    }
  };

  useEffect(() => {
    searchMovie();
  }, []);
  return (
    <>
     <div>
      <h1>Movie Information</h1>
      {movieData ? (
        <div>
        <div>
          <img src={movieData.Poster} alt='Movie Picture' style={{width:200, height:300}} />
          <h2>{movieData.Title}</h2>
          <p><strong>Year:</strong> {movieData.Year}</p>
          <p><strong>Language:</strong> {movieData.Language}</p>
          <p><strong>IMDB Rating:</strong> {movieData.imdbRating}</p>
        </div>
          {/* <h2>{movieData.Title}</h2>
          <img src={movieData.Poster} alt={movieData.Title} /> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
   
  )
}

export default Home;