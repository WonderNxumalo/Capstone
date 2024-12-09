function MovieList () {
    return (
        <div className="bg-blue-500 p-4">
            <div>
                <h1 className="bg-white text-blue-500 p-2 py-0 rounded-md text-xl mx-20">My Watchlist</h1>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
                <div id="Movie_card" className="mx-auto bg-white border-white rounded-lg p-2 flex flex-col items-center text-blue-500">
                    <img src="https://via.placeholder.com/150" alt="Movie Poster" className="rounded-lg" />
                    <h3 className="text-xl text-blue-500 font-bold">Title</h3> 
                    <p>Year release</p>
                    <p className="">Rating</p>
                    <button className="bg-blue-500 text-white hover:bg-red-500 p-2 py-0 rounded-md">Remove</button>
                </div>
            </div>
            
        </div>
        
    );
}

export default MovieList;