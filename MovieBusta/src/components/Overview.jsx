
const Overview = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  return (
    <div className="p-2 mt-2 bg-blue-500 rounded-md">
        <h1 className="text-white text-2xl font-bold">Synopsis</h1>
        <p>Original Language: {movie.original_language}</p>
        <p className="mt-2 text-justify text-slate-100">{movie.overview}</p>
    </div>
  );
};

export default Overview;