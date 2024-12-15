import { useState } from 'react';
import Overview from './Overview';
const MovieCard = ({ movie }) => {
  const [showOverview, setShowOverview] = useState(false);
  const imageUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  const handleShowOverview = () => {
    setShowOverview(!showOverview);
  };

  return (
    <div className='container border bg-gradient-to-br from-blue-400 to-white'>
        <div className="p-2 flex flex-col items-center justify-center">
          <img className='rounded-md' src={imageUrl} alt={movie.title} />
          <h2 className='text-blue-500 text-xl lg:text-2xl xl:text-3xl font-bold'>{movie.title}</h2>
          <p className='text-blue-900 lg:text-lg xl:text-xl'>{movie.release_date.substring(0, 4)}</p>
          <button className='bg-blue-500 text-white lg:text-xl xl:text-2xl rounded-md p-0.5 hover:bg-blue-300' onClick={handleShowOverview}>
            Movie Info
          </button>
          {showOverview && <Overview movie={movie} />}
        </div>
    </div>
  );
};

export default MovieCard;