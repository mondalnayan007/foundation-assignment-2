import React, { useState, useEffect } from 'react';
import MoviesCard from '../Components/MoviesCard';
import MovieModal from '../Components/MovieModal';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSearch, setActiveSearch] = useState(''); // বাটনে ক্লিকের পর ফিল্টার করার জন্য
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);

  // ১. প্রাথমিক ডাটা ফেচিং
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.tvmaze.com/shows');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  

  const handleDetails =(show)=>{
    setSelectedShow(show);
    
  }

  // ২. শুধুমাত্র 'Search' বাটনে ক্লিক করলে ফিল্টার ট্রিগার হবে
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveSearch(searchTerm);
    setVisibleCount(12); // নতুন সার্চ দিলে দৃশ্যমান কার্ড রিসেট হবে
  };

  // ৩. টাইটেলে সার্চ টার্মের মিল অনুযায়ী ফিল্টারিং (Case-Insensitive Partial Match)
  const filteredMovies = movies.filter((movie) =>
    movie.name?.toLowerCase().includes(activeSearch.toLowerCase().trim())
  );

  // ৪. Explore More ক্লিকে নতুন ১২টি কার্ড যুক্ত হবে
  const handleExploreMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <section className="bg-slate-950 text-white min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Search Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide">
              Explore <span className="text-red-600">Movies</span> & <span className="text-yellow-400">Shows</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Find your favorite blockbusters and trending TV series
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-96 flex gap-2">
            <input
              type="text"
              placeholder="Search movies (e.g. 'con')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 text-white placeholder-slate-500 text-sm rounded-xl px-4 py-3 border border-slate-800 focus:outline-none focus:border-red-600 transition duration-200"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-sm px-5 py-3 rounded-xl transition duration-200 shadow-md flex-shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-[360px] bg-slate-900/60 rounded-2xl animate-pulse border border-slate-800/50" />
            ))}
          </div>
        ) : (
          <>
            {filteredMovies.length > 0 ? (
              <>
                {/* Movie Grid Section (4 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredMovies.slice(0, visibleCount).map((show) => (
                    <MoviesCard key={show.id} show={show}
                    handleDetails={handleDetails} />
                  ))}
                </div>

                {/* Clean Explore More Button */}
                {visibleCount < filteredMovies.length && (
                  <div className="text-center mt-12">
                    <button
                      onClick={handleExploreMore}
                      className="bg-slate-900 hover:bg-red-600 border border-slate-800 hover:border-red-600 text-white font-bold px-8 py-3.5 rounded-2xl transition duration-300 transform hover:scale-105 shadow-xl active:scale-95 inline-flex items-center gap-2"
                    >
                      <span>Explore More</span>
                      
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20 text-slate-500">
                <p className="text-lg">No movies or shows found with "{activeSearch}"!</p>
              </div>
            )}
          </>
        )}

      </div>
      {selectedShow && (
  <MovieModal 
    show={selectedShow} 
    onClose={() => setSelectedShow(null)} 
  />
)}
    </section>
  );
};

export default Movies;