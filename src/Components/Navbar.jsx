import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-slate-950 text-white border-b border-slate-800 px-4 md:px-8 sticky top-0 z-50">
      {/* Navbar Start: Mobile Dropdown & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-slate-300 hover:text-white">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-900 border border-slate-800 rounded-xl z-50 mt-3 w-52 p-3 shadow-2xl space-y-1">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li>
              <span className="text-slate-400 font-medium">Categories</span>
              <ul className="p-2 border-l border-slate-800 ml-2 space-y-1">
                <li><a href="#" className="hover:text-red-500">Action</a></li>
                <li><a href="#" className="hover:text-red-500">Comedy</a></li>
                <li><a href="#" className="hover:text-red-500">Drama</a></li>
                <li><a href="#" className="hover:text-red-500">Sci-Fi</a></li>
              </ul>
            </li>
            <li><a href="#" className="hover:text-red-500">Movies</a></li>
            <li><a href="#" className="hover:text-red-500">TV Shows</a></li>
          </ul>
        </div>

        {/* MovieBuzz Logo */}
        <a href="#" className="btn btn-ghost text-2xl font-bold tracking-wide hover:bg-transparent">
          <span className="text-red-600">Movie</span>
          <span className="text-yellow-400">Buzz</span>
        </a>
      </div>

      {/* Navbar Center: Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium space-x-1">
          <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
          <li>
            <details>
              <summary className="hover:text-red-500 transition">Genres</summary>
              <ul className="p-2 bg-slate-900 border border-slate-800 rounded-xl w-44 z-50 shadow-xl space-y-1">
                <li><a href="#" className="hover:text-red-500">Action</a></li>
                <li><a href="#" className="hover:text-red-500">Comedy</a></li>
                <li><a href="#" className="hover:text-red-500">Drama</a></li>
                <li><a href="#" className="hover:text-red-500">Sci-Fi</a></li>
              </ul>
            </details>
          </li>
          <li><a href="#" className="hover:text-red-500 transition">Movies</a></li>
          <li><a href="#" className="hover:text-red-500 transition">TV Shows</a></li>
        </ul>
      </div>

      {/* Navbar End: CTA Button */}
      <div className="navbar-end">
        <a className="btn bg-red-600 hover:bg-red-700 text-white border-none min-h-0 h-10 px-5 rounded-lg font-semibold shadow-md transition">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Navbar;