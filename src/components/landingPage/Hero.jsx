import React from 'react';
import hero from '../../assets/hero.png';
import heroBoll from '../../assets/hero-boll-1.jpeg';
import Cart2 from '../../assets/hero-card-2.jpeg';
import Cart1 from '../../assets/hero-side-1.jpeg';

export default function () {

    const cartData = [
        {
            id: 1,
            title: "Ethiopian runners took the top four spots.",
            date: "Race98 - 03 June 2023",
            image: Cart1,
        },
        {
            id: 2,
            title: "IndyCar Detroit: Dixon quickest in second practice",
            date: "INDYCAR - 03 June 2023",
            image: Cart2
        }
    ];

    return (
        <div className='w-full py-8'>
            <div className='w-11/12 mx-auto px-4 flex flex-col xl:flex-row gap-8'>
                {/* Main Hero Section */}
                <div className='relative min-w-full flex  xl:min-w-[75%] h-[400px] md:h-[600px] xl:h-[683px]'>
                    {/* Faded Background Image */}
                    <div>
                        <div className='absolute  max-w-[200px] md:max-w-[400px] xl:max-w-[716px] opacity-[8%] -left-16 md:-left-24 xl:-left-32 top-0 z-10'>
                            <img src={heroBoll} alt="Hero Faded Ball" className="object-cover" />
                        </div>

                        {/* Hero Text */}
                        <div className='hidden xl:flex absolute top-[15%] md:top-[20%] xl:top-[25%] left-4 md:left-8 xl:left-0 z-20'>
                            <div className='text-4xl md:text-6xl xl:text-8xl font-bold leading-[45px] md:leading-[65px] xl:leading-[75px] font-sequel-sance uppercase'>
                                Top <br /> scorer to <br /> the final <br /> match
                            </div>
                        </div>
                        <div className='text-center mb-3 xl:hidden'>
                            <div className='text-4xl md:text-6xl xl:text-8xl font-bold leading-[45px] md:leading-[65px] xl:leading-[75px] font-sequel-sance uppercase'>
                                Top  scorer to  the final  match
                            </div>
                        </div>

                        {/* Hero Main Image */}
                        <div className='absolute max-w-[300px] md:max-w-[500px] xl:max-w-[720px] right-0 top-[30%] md:top-[25%] xl:top-[19%] z-0'>
                            <img src={hero} alt="Hero" className="object-cover" />
                        </div>
                    </div>

                    {/* Hero Bottom Content */}
                    <div className='absolute hidden xl:flex justify-center ml-16  sm:w-full sm:mt-24   bottom-4 md:bottom-8 xl:bottom-0 left-1/2 transform -translate-x-1/2 xl:left-[50%]'>
                        <div className='flex flex-col gap-3 p-3 max-w-[300px]  md:max-w-[365px]'>
                            <p className='text-sm md:text-base'>
                                The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals.
                            </p>
                            <div>
                                <button className='px-6 md:px-8 py-2 md:py-3 bg-black text-white rounded-md'>
                                    Continue Reading
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Section */}
                <div className='w-full xl:w-1/4 flex flex-col justify-center gap-4'>
                    {/* Today's Date */}
                    <div>
                        <div className='px-4 py-1 bg-gray-300 rounded-md w-20'>Today</div>
                    </div>

                    {/* Cards */}
                    <div className='flex flex-col gap-4'>
                        {cartData.map((item) => (
                            <div key={item.id} className='relative rounded-md'>
                                <img src={item.image} alt={item.title} className='rounded-md object-cover w-full h-[180px] md:h-[240px]' />
                                <div className='absolute bottom-0 p-3 bg-gradient-to-t from-black via-transparent to-transparent w-full'>
                                    <p className='text-xs md:text-sm text-gray-200'>{item.date}</p>
                                    <p className='text-sm md:text-lg font-semibold text-white'>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
