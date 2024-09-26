import React from 'react';
import boxing from '../../assets/boxing.jpeg';
import cycilest from '../../assets/cycilest.jpeg';
import horse from '../../assets/horse.jpeg';
import trandingRight from '../../assets/tranding-right.jpeg';

const trendingNews = {
  title: "Trending News",
  news: [
    {
      id: 1,
      title: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
      description: "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s",
      date: "Race98 - 03 June 2023",
      image: horse,
    },
    {
      id: 2,
      title: "Cycling Enthusiasts Gather for Annual Tour",
      description: "Thousands of cycling fans gathered to celebrate the sport during the annual cycling tour.",
      date: "Event - 04 June 2023",
      image: cycilest,
    },
    {
      id: 3,
      title: "Boxing Championship Scheduled for Next Month",
      description: "Boxing fans are gearing up for an exciting championship next month featuring top fighters.",
      date: "Sports - 05 June 2023",
      image: boxing,
    },
  ],
};

export default function TrendingNews() {
  return (
    <div className='bg-white mt-12 mb-12'>
      <div className='w-11/12 mx-auto flex flex-col xl:flex-row gap-10 bg-gray-200'>
        <div className='xl:w-1/2 p-8 flex flex-col gap-3'>
          <h2 className='text-2xl sm:text-3xl leading-8 font-semibold'>{trendingNews.title}</h2>
          <div className='flex flex-col gap-4'>
            {trendingNews.news.map((news) => (
              <div key={news.id} className='flex gap-4 items-start sm:items-center flex-col sm:flex-row'>
                <div className='w-full sm:w-[234px] h-[150px]'>
                  <img src={news.image} alt={news.title} className='w-full h-full rounded-md object-cover' />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-xs text-gray-600'>{news.date}</p>
                  <p className='text-md sm:text-lg font-semibold'>{news.title}</p>
                  <p className='text-xs text-gray-500'>{news.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='xl:w-1/2 relative sm:w-full'>
          <div className='w-full h-full'>
            <img src={trandingRight} className='w-full h-full object-cover' alt="Trending Right" />
          </div>
          <div className='absolute inset-0 bg-black opacity-40'></div>
          <div className='absolute w-full h-full p-5 md:p-9 top-0 flex flex-col justify-between text-white'>
            <div>
              <button className='border border-white px-3 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300'>
                Cycling
              </button>
            </div>
            <div>
              <p className='text-sm mb-2 font-light'>Debits - 03 June 2023</p>
              <h1 className='text-xl md:text-2xl font-medium'>
                DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
