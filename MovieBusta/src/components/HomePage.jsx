import { useEffect, useState } from "react";

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('MovieBusta/src/MovieInfo.json')
        .then(response => response.json())
        .then(data => setMovies(data));
    }, []);

  return (
    <div className="container bg-blue-500">
        <div className="p-4">
            <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold">Movie Busta</h1>
            <p>Your home of Entertainment</p>
        </div>

        <div id="movie_container" className=" bg-slate-900 container mx-auto">

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
                {movies.map((movie) =>(
                    <div key={movie.id} className="mx-auto bg-slate-500 border border-slate-500 rounded-lg p-2 flex flex-col items-center">
                        <img src="movie.image" alt="Movie Poster" className="rounded-lg" />
                        <h3 className="text-xl">{movie.title}</h3> 
                        <p>Year: {movie.year}</p>
                        <p className="">Rating: {movie.rating}</p>
                        <button className="bg-blue-500 p-2 py-0 rounded-md">Movie Info</button>
                 </div>
                ))}
                
                {/*
                <div id="Movie_card" className="mx-auto bg-slate-500 border border-slate-500 rounded-lg p-2 flex flex-col items-center">
                   <img src="https://via.placeholder.com/150" alt="Movie Poster" className="rounded-lg" />
                   <h3 className="text-xl">Title</h3> 
                   <p>Year release</p>
                   <p className="">Rating</p>
                   <button className="bg-blue-500 p-2 py-0 rounded-md">Movie Info</button>
                </div>

                <div id="Movie_card" className="mx-auto bg-slate-500 border border-slate-500 rounded-lg p-2 flex flex-col items-center">
                   <img src="https://via.placeholder.com/150" alt="Movie Poster" className="rounded-lg" />
                   <h3 className="text-xl">Title</h3> 
                   <p>Year release</p>
                   <p className="">Rating</p>
                   <button className="bg-blue-500 p-2 py-0 rounded-md">Movie Info</button>
                </div>

                <div id="Movie_card" className="mx-auto bg-slate-500 border border-slate-500 rounded-lg p-2 flex flex-col items-center">
                   <img src="https://via.placeholder.com/150" alt="Movie Poster" className="rounded-lg" />
                   <h3 className="text-xl">Title</h3> 
                   <p>Year release</p>
                   <p className="">Rating</p>
                   <button className="bg-blue-500 p-2 py-0 rounded-md">Movie Info</button>
                </div>
                */}

            </div>
                
        </div>
    </div>
  );
};

export default HomePage;