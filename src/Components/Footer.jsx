import React from 'react';
import { Link } from 'react-router';

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
              <li><Link to={'/'} className="hover:text-red-500 transition">Home</Link></li>
              <li><Link to={'/movies'} className="hover:text-red-500 transition">Movies</Link></li>
              <li><Link to={'/shows'} className="hover:text-red-500 transition">TV Shows</Link></li>
              <li><Link to={'/trending'} className="hover:text-red-500 transition">Trending</Link></li>
             
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Genres</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to={'/action'} className="hover:text-red-500 transition">Action</Link></li>
              <li><Link to={'/comedy'} className="hover:text-red-500 transition">Comedy</Link></li>
              <li><Link to={'/drama'} className="hover:text-red-500 transition">Drama</Link></li>
              <li><Link to={'/sci-fi'} className="hover:text-red-500 transition">Sci-Fi</Link></li>
            
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
          <p>&copy; 2026 MovieBuzz. All rights reserved.</p>
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