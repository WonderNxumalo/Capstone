import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("MovieBusta/src/components/MovieInfo.json"); // Assuming "MovieInfo.json" is in the same directory
      const data = await response.json();
      setMovies(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container bg-gradient-to-br from-blue-400 to-blue-900">
      <div className="p-4">
        <h1 className="text-white hover:text-slate-300 text-5xl md:text-7xl lg:text-9xl font-bold">
          Movie Busta
        </h1>
        <p className="text-white text-lg md:text-3xl">Your home of Entertainment</p>
      </div>

      <div className="p-2 justify-evenly">
        <input 
        className="rounded-md"
        type="text" 
        name="searchbar"
        placeholder="Search for a movie" 
        />

        <button className="bg-white text-blue-500 font-bold p-2 py-0 rounded-md hover:bg-green-500">Search</button>
      </div>

      <div id="movie_container" className=" container mx-auto">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
          {movies.length > 0 ? (
            <ul className="bg-white">
              {movies.map((movie) => (
                <li key={movie.id}>
                  <h2 className="text-black">{movie.title}</h2>
                  <p className="text-black">{movie.year}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-600 text-lg bg-slate-300">Loading movie...</p>
          )}

          <button className="bg-blue-500 hover:bg-blue-300 text-white p-2 py-0 rounded-md">Add to favourites</button>
        </div>
      </div>
    </div>
  );
}

export default Home;