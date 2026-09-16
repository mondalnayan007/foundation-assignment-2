import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-red-600">Movie</span>
          <span className="text-yellow-400">Buzz</span>
        </div>

        {/* Navigation Menus */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#" className="hover:text-red-500 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition duration-200">
              Movies
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition duration-200">
              TV Shows
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition duration-200">
              Trending
            </a>
          </li>
        </ul>

        {/* Action Button Section */}
        <div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-200 shadow">
            Sign In
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;