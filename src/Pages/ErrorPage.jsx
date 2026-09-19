import React from 'react';

const ErrorPage = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 overflow-hidden">
      
      
      <div 
        className="absolute inset-0 z-0 opacity-15 bg-cover bg-center filter grayscale contrast-150"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90 z-0" />
      
      
      <div className="absolute w-[350px] md:w-[550px] h-[350px] md:h-[550px] bg-red-600/15 blur-[140px] rounded-full pointer-events-none z-0" />

     
      <div className="relative z-10 max-w-lg w-full text-center space-y-6">
        
        
        <div className=" ">
          <h1 className="text-9xl md:text-[13rem] flex items-center justify-center font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-slate-500 to-slate-900 select-none">
            4
            <span>
                <img src="https://i.ibb.co.com/spzQHftY/Screenshot-2026-09-17-223300-removebg-preview.png" alt="" />
            </span>
            4
          </h1>
          
        </div>

        
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase">
            Looks Like You're Lost
          </h2>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
           Page Not Found 😭 Goto the previous page ro Homepage !!!!
          </p>
        </div>

        
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold px-7 py-3.5 rounded-xl transition duration-200 shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 active:scale-95 text-slate-300 text-xs font-bold px-7 py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
        </div>

      </div>

    </div>
  );
};

export default ErrorPage;