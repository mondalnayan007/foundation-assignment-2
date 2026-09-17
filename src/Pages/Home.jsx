import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero';
import MoviesCard from '../Components/MoviesCard';
import MovieModal from '../Components/MovieModal';

const Home = () => {

    const [showsData, setShowsData] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);



    useEffect(() => {
        fetch('https://api.tvmaze.com/shows')
            .then(res => res.json())
            .then(data => setShowsData(data))
    }, [])

    const handleDetails = (show) => {
        setSelectedShow(show);

    }


    return (
        <div>
            <div className='h-2/6'><Hero></Hero></div>
            <div className='bg-black px-8'>
                <h1 className='text-3xl font-bold text-[#C11406] py-3'>Featured Shows ---</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  py-5'>
                    {
                        showsData.slice(0, 12).map(show => <MoviesCard
                            key={show.id}
                            show={show}
                            handleDetails={handleDetails}></MoviesCard>)
                    }
                </div>
                {selectedShow && (
                    <MovieModal
                        show={selectedShow}
                        onClose={() => setSelectedShow(null)}
                    />
                )}
            </div>

        </div>
    );
};

export default Home;