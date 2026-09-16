import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-wide">
              <span className="text-red-600">Movie</span>
              <span className="text-yellow-400">Buzz</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your ultimate destination for discovering trending movies, TV shows, and entertainment news worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Movies</a></li>
              <li><a href="#" className="hover:text-red-500 transition">TV Shows</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Trending</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Genres</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition">Action</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Comedy</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Drama</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Sci-Fi</a></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Subscribe</h4>
            <p className="text-xs text-slate-400 mb-3">
              Get updates about new releases and trending shows.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-slate-900 text-white text-xs px-3 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-red-600 w-full"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-2 rounded-lg font-semibold transition">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MovieBuzz. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;