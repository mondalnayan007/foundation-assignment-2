import React from 'react';

const MovieModal = ({ show, onClose }) => {
  if (!show) return null;

  const {
    name,
    genres,
    rating,
    image,
    summary,
    premiered,
    ended,
    status,
    language,
    runtime,
    network,
    url,
    schedule,
  } = show;

  // HTML ট্যাগ রিমুভ করা
  const cleanSummary = summary
    ? summary.replace(/<[^>]*>?/gm, '')
    : 'No detailed summary available for this show.';

  return (
    /* Background Overlay with Blur & Close on Backdrop Click */
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
    >
      {/* Modal Box Container (Prevents closing when clicking inside content) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-slate-900 text-white w-full max-w-3xl rounded-2xl overflow-hidden border border-slate-800 shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
      >
        {/* Close (X) Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center transition duration-200 border border-white/10"
        >
          ✕
        </button>

        {/* Left Side: Poster Image */}
        <div className="w-full md:w-5/12 h-80 md:h-auto relative bg-slate-950 flex-shrink-0">
          <img
            src={image?.original || image?.medium || 'https://via.placeholder.com/300x450?text=No+Image'}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30 md:hidden" />
        </div>

        {/* Right Side: Detailed Content */}
        <div className="w-full md:w-7/12 p-6 overflow-y-auto space-y-4">
          {/* Title & Status */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                {status || 'Unknown Status'}
              </span>
              {language && (
                <span className="text-slate-400 text-xs font-medium">
                  • {language}
                </span>
              )}
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-wide">
              {name}
            </h2>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400">Rating:</span>{' '}
              <span className="text-amber-400 font-bold">
                ★ {rating?.average || 'N/A'}
              </span>
            </div>
            <div>
              <span className="text-slate-400">Runtime:</span>{' '}
              <span className="text-white font-medium">
                {runtime ? `${runtime} mins` : 'N/A'}
              </span>
            </div>
            <div>
              <span className="text-slate-400">Premiered:</span>{' '}
              <span className="text-white font-medium">
                {premiered || 'N/A'}
              </span>
            </div>
            <div>
              <span className="text-slate-400">Network:</span>{' '}
              <span className="text-white font-medium">
                {network?.name || 'N/A'}
              </span>
            </div>
          </div>

          {/* Genres */}
          {genres?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {genres.map((genre, idx) => (
                <span
                  key={idx}
                  className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-700/60 font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          {/* Schedule Info */}
          {schedule?.days?.length > 0 && (
            <p className="text-xs text-slate-400">
              📅 <span className="text-slate-300 font-medium">Schedule:</span>{' '}
              {schedule.days.join(', ')} at {schedule.time || 'N/A'}
            </p>
          )}

          {/* Summary */}
          <div>
            <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-1">
              Overview
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed font-light">
              {cleanSummary}
            </p>
          </div>

          {/* Official Site Button */}
          {url && (
            <div className="pt-2">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition duration-200 shadow-md"
              >
                Watch Now ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;