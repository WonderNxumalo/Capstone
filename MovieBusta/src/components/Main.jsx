import  { useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'; 

function Main() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = 'de4fc5e5a745086ed571e810f0b8e348';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&include_adult=false`;

    try {
      const response = await axios.get(url);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <form className='m-2' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border border-blue-500 rounded-sm mr-1 p-0.5'
        />
        <button className='bg-blue-500 rounded-md text-white px-1 hover:bg-blue-300' type="submit">Search</button>
      </form>

      <div className="movie-list">
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Main;