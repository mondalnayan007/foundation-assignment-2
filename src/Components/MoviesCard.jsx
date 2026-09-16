import React from 'react';

const MoviesCard = ({ show }) => {
  // ডাটা আনপ্যাক বা Destructuring (সুরক্ষার জন্য ডিফল্ট ভ্যালুসহ)
  const { name, genres, rating, image, summary, premiered } = show || {};

  // HTML ট্যাগ (যেমন <p>, <b>) রিমুভ করে ক্লিন টেক্সট বের করার পদ্ধতি
  const cleanSummary = summary ? summary.replace(/<[^>]*>?/gm, '') : 'No description available.';

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105 flex flex-col justify-between group">
      
      {/* Movie Image Container */}
      <div className="relative overflow-hidden aspect-[2/3]">
        <img
          src={image?.medium || image?.original || 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />

        {/* Rating Badge */}
        {rating?.average && (
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-yellow-400 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 border border-yellow-400/30">
            <span>⭐</span>
            <span>{rating.average}</span>
          </div>
        )}

        {/* Premiered Year Badge */}
        {premiered && (
          <div className="absolute top-3 left-3 bg-red-600/90 text-white px-2.5 py-1 rounded-md text-xs font-semibold shadow">
            {premiered.split('-')[0]}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Movie Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition line-clamp-1 mb-2">
            {name}
          </h3>

          {/* Genres */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {genres?.map((genre, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-300 text-[11px] px-2 py-0.5 rounded-full font-medium"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Summary / Description */}
          <p className="text-gray-400 text-xs line-clamp-3 mb-4 leading-relaxed">
            {cleanSummary}
          </p>
        </div>

        {/* Action Button */}
        <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 rounded-lg transition duration-200 shadow">
          View Details
        </button>
      </div>

    </div>
  );
};

export default MoviesCard;