import React from 'react';

const MoviesCard = ({ show, handleDetails }) => {
  const { name, genres, rating, image, summary, premiered } = show || {};
  
  const cleanSummary = summary ? summary.replace(/<[^>]*>?/gm, '') : 'No description available.';
  const releaseYear = premiered ? premiered.split('-')[0] : null;

  return (
    <div className="group relative w-full h-[400px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-red-600/80 transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_10px_30px_rgba(225,29,72,0.25)] flex flex-col justify-between">
      
      {/* ১. পোস্টার ইমেজ (মোবাইলে একদম ক্লিয়ার থাকবে) */}
      <div className="relative w-full h-[280px] md:h-full overflow-hidden">
        <img
          src={image?.medium || 'https://via.placeholder.com/300x450?text=No+Poster'}
          alt={name}
          className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* টপ ব্যাজ (ইয়ার এবং রেটিং - মোবাইলে ছবির ওপর ভেসে থাকবে) */}
        <div className="absolute top-3 inset-x-3 flex justify-between items-center z-10 pointer-events-none">
          {releaseYear ? (
            <span className="bg-black/60 backdrop-blur-md text-slate-200 text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10 shadow-md">
              {releaseYear}
            </span>
          ) : <div />}

          {rating?.average ? (
            <div className="bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center space-x-1 border border-amber-500/20 shadow-md">
              <span>★</span>
              <span className="text-white">{rating.average}</span>
            </div>
          ) : null}
        </div>
      </div>

      {/* ২. মোবাইল ডিভাইসের জন্য লেআউট (ছবির নিচে টাইটেল এবং বাটন) */}
      <div className="md:hidden bg-slate-900/90 p-3 flex flex-col justify-between gap-2 border-t border-slate-800">
        <h3 className="text-base font-bold text-white tracking-wide line-clamp-1">
          {name}
        </h3>
        <button
          onClick={() => handleDetails(show)}
          className="w-full bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold py-2 rounded-xl transition duration-200 shadow-md flex items-center justify-center cursor-pointer"
        >
          See Details
        </button>
      </div>

      {/* ৩. ডেস্কটপ লেআউট (md: - টাইটেল বার যা হোভার করলে ভ্যানিশ হবে) */}
      <div className="hidden md:flex absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 items-end group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
        <h3 className="text-lg font-bold text-white tracking-wide line-clamp-1">
          {name}
        </h3>
      </div>

      {/* ৪. ডেস্কটপ হোভার ওভারলে (md: - হোভার করলে ফুল ডিটেইলস দেখাবে) */}
      <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/40 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 
                      p-5 flex-col justify-end z-20 backdrop-blur-[2px]">
        
        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 ease-out space-y-3">
          
          <div className="flex flex-wrap gap-1.5">
            {genres?.slice(0, 3).map((genre, index) => (
              <span
                key={index}
                className="text-[10px] uppercase tracking-wider font-semibold text-red-400 bg-red-950/40 px-2 py-0.5 rounded-md border border-red-800/30"
              >
                {genre}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-extrabold text-white leading-tight">
            {name}
          </h3>

          <p className="text-slate-300 text-xs line-clamp-3 leading-relaxed font-normal">
            {cleanSummary}
          </p>

          <div className="pt-2">
            <button
              onClick={() => handleDetails(show)}
              className="w-full bg-red-600 cursor-pointer hover:bg-red-700 active:scale-95 text-white text-xs font-bold py-2.5 rounded-xl transition duration-200 shadow-lg shadow-red-600/30 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              See Details
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default MoviesCard;