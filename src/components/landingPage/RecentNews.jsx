import React from 'react';
import profile from '../../assets/car-1.jpeg';
import boxing from '../../assets/bosing-2.png';
import komfo from '../../assets/komfo.jpeg';
import cricate from '../../assets/cricket-ball.png';
import golf from '../../assets/golf.png';

// Data for Recent News and Clubs Ranking
const data = {
    recentNews: [
        {
            title: "Baku 2023 World Taekwondo Championships",
            image: profile,
            category: "Day 5 Highlights",
        },
        {
            title: "Open Championship Royal Liverpool Golf",
            image: golf,
            category: "Golf. Toni - 20 July 2023",
        },
        {
            title: "Ireland Tour of England Test 2023",
            image: cricate,
            category: "Cricket. Toni - 27 July 2023",
        },
        {
            title: "Ireland Tour of England Test 2023",
            image: cricate,
            category: "Cricket. Toni - 27 July 2023",
        },
    ],
    clubsRanking: [
        { club: "Manchester City", GP: 38, W: 29, D: 6, L: 3, F: 99, A: 26, GD: 73 },
        { club: "Liverpool", GP: 38, W: 28, D: 8, L: 2, F: 94, A: 26, GD: 68 },
        { club: "Chelsea", GP: 38, W: 21, D: 11, L: 6, F: 76, A: 33, GD: 43 },
        { club: "Tottenham Hotspur", GP: 38, W: 22, D: 5, L: 11, F: 69, A: 40, GD: 29 },
        { club: "Arsenal", GP: 38, W: 22, D: 3, L: 13, F: 61, A: 48, GD: 13 },
        { club: "Manchester United", GP: 38, W: 16, D: 10, L: 12, F: 57, A: 57, GD: 0 },
    ],
};

const SportsComponent = () => {
    return (
        <div className='mb-11'>
            <div className='w-11/12 mx-auto flex flex-col xl:flex-row gap-8'>
                {/* Recent News */}
                <div className='w-full xl:w-1/2 flex flex-col'>
                    <h2 className="text-2xl font-bold text-black mb-4">Recent News</h2>
                    <div className='flex flex-col h-full lg:flex-row gap-3'>
                        {/* Main article */}
                        <div className='flex-grow rounded-lg mb-4 lg:mb-0'>
                            <div className='relative'>
                                <img
                                    src={komfo}
                                    alt={data.recentNews[0].title}
                                    className='h-[311px] object-cover rounded-lg'
                                    loading="lazy"
                                />
                                <div className='absolute bottom-0 bg-black bg-opacity-50 text-white p-3 rounded-lg'>
                                    <span className="text-sm">{data.recentNews[0].category}</span>
                                    <h3 className="text-lg font-bold">{data.recentNews[0].title}</h3>
                                </div>
                            </div>
                        </div>

                        {/* Other news items */}
                        <div className='bg-slate-200 p-4 rounded-lg'>
                            <div className='flex flex-col gap-3'>
                                {data.recentNews.slice(1).map((news, index) => (
                                    <div key={index} className='flex gap-3 items-center'>
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className='w-[70px] h-[70px] object-cover rounded-md'
                                            loading="lazy"
                                        />
                                        <div>
                                            <span className="text-sm text-gray-600">{news.category}</span>
                                            <h3 className="text-md font-semibold">{news.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='w-full flex justify-center mt-3'>
                                <button className="text-white bg-slate-500 font-medium p-1 px-2 rounded-md">More →</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clubs Ranking */}
                <div className='w-full xl:w-1/2'>
                    <h2 className="text-2xl font-bold text-black mb-4">Clubs Ranking</h2>
                    <div className='bg-gray-300 rounded-lg'>
                        {/* Horizontal scrolling container */}
                        <div className="overflow-x-auto rounded-lg">
                            <table className="min-w-full  border-collapse">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                                        <th className="py-2.5 px-4 text-left">#</th>
                                        <th className="py-2.5 px-4 text-left">Club</th>
                                        <th className="py-2.5 px-4 text-center">GP</th>
                                        <th className="py-2.5 px-4 text-center">W</th>
                                        <th className="py-2.5 px-4 text-center">D</th>
                                        <th className="py-2.5 px-4 text-center">L</th>
                                        <th className="py-2.5 px-4 text-center">F</th>
                                        <th className="py-2.5 px-4 text-center">A</th>
                                        <th className="py-2.5 px-4 text-center">GD</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 text-sm">
                                    {data.clubsRanking.map((club, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="py-2.5 px-4 text-center">{index + 1}</td>
                                            <td className="py-2.5 px-4 flex items-center space-x-2.5">
                                                <img
                                                    src={`https://linktoicon/${club.club.toLowerCase().replace(/\s/g, '')}.png`}
                                                    alt={club.club}
                                                    className="w-6 h-6"
                                                    loading="lazy"
                                                />
                                                <span className='text-sm font-medium'>{club.club}</span>
                                            </td>
                                            <td className="py-2.5 px-4 text-center">{club.GP}</td>
                                            <td className="py-2.5 px-4 text-center">{club.W}</td>
                                            <td className="py-2.5 px-4 text-center">{club.D}</td>
                                            <td className="py-2.5 px-4 text-center">{club.L}</td>
                                            <td className="py-2.5 px-4 text-center">{club.F}</td>
                                            <td className="py-2.5 px-4 text-center">{club.A}</td>
                                            <td className="py-2.5 px-4 text-center">{club.GD}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsComponent;
