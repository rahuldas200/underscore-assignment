import React from 'react';
import FootballImg from '../../assets/footboll.jpeg';
import Pagination from '../common/Pagination';

export default function Football() {
    return (
        <div className='mb-8'>
            <div className='w-11/12 mx-auto relative'>
                {/* Image Section */}
                <img 
                    src={FootballImg} 
                    className='w-full h-[400px] md:h-[618px] rounded-md object-cover' 
                    alt="Football" 
                />

                {/* Overlay for shadow effect */}
                <div className='absolute inset-0 bg-black opacity-40 rounded-md'></div>

                {/* Content Section */}
                <div className='absolute inset-0 flex flex-col justify-between p-5 text-white'>
                    <div>
                        <button className='border border-white px-3 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300'>
                            Football
                        </button>
                    </div>
                    <div className='w-full md:w-[70%] flex flex-col gap-3'>
                        <p className='text-xs md:text-sm mb-2'>Agence France-Presse - 04 June 2023</p>
                        <h2 className='text-xl md:text-3xl font-sequel-sance font-bold text-white'>Lionel Messi Leaving Ligue 1 Team Paris Saint-Germain, Club Confirms</h2>
                        <p className='text-xs md:text-sm mb-2'>The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals</p>
                    </div>
                </div>
            </div>

            {/* Pagination Component */}
            {/* Uncomment to use pagination */}
            {/* <Pagination /> */}
        </div>
    );
}
