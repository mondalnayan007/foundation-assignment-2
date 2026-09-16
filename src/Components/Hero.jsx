import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden bg-gray-900">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Movie Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide leading-tight">
          Welcome to <span className="text-red-600">Movie</span><span className="text-yellow-400">Buzz</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
          Discover the latest blockbuster movies, trending TV shows, and exclusive reviews all in one place. Your ultimate cinema experience starts here.
        </p>

        <div>
          <a
            href="#movies" 
            className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-3 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105 inline-block"
          >
            Explore Movies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;