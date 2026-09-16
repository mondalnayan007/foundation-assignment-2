import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero';
import MoviesCard from '../Components/MoviesCard';

const Home = () => {

    const [showsData,setShowsData] = useState([]);
  


    useEffect(()=>{
         fetch('https://api.tvmaze.com/shows')
         .then(res =>res.json())
         .then(data => setShowsData(data))
    },[])




    return (
        <div>
            <div className='h-2/6'><Hero></Hero></div>
           <div className='bg-black'>
            <h1 className='text-3xl font-bold text-[#C11406] py-3'>Featured Movies ---</h1>
             <div className='grid grid-cols-3 gap-4'>
                {
                    showsData.slice(0, 12).map(show => <MoviesCard show={show}></MoviesCard>)
                }
            </div>
           </div>
            
        </div>
    );
};

export default Home;