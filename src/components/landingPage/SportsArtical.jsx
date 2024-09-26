import React from 'react';
import news1 from '../../assets/news-1.jpeg';
import news2 from '../../assets/news-2.jpeg';
import news3 from '../../assets/news-3.jpeg';
import profile1 from '../../assets/profile-1.png';
import profile2 from '../../assets/profile-2.png';
import profile3 from '../../assets/img-3.png';
import { GoArrowLeft } from "react-icons/go";
import { LuArrowRight } from "react-icons/lu";

const articles = [
    {
        id: 1,
        category: "Basketball",
        profile: profile1,
        author: "Jake Will.",
        date: "04 June 2023",
        title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
        description: "This article was written by Jake Willhoite from Healthlisted.com. Strength in basketball isn’t all about a massive body mass or ripped muscles.",
        image: news1,
    },
    {
        id: 2,
        category: "Basketball",
        profile: profile2,
        author: "Jake Will.",
        date: "04 June 2023",
        title: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
        description: "This article was written by Jake Willhoite from Healthlisted.com. Strength in basketball isn’t all about a massive body mass or ripped muscles.",
        image: news2
    },
    {
        id: 3,
        category: "Basketball",
        profile: profile3,
        author: "Jake Will.",
        date: "04 June 2023",
        title: "‘Outdoor’ Badminton Gets Support From Local Federation",
        description: "This article was written by Jake Willhoite from Healthlisted.com. Strength in basketball isn’t all about a massive body mass or ripped muscles.",
        image: news3
    }
];

export default function SportsArticles() {
    return (
        <div>
            <div className='w-11/12 mx-auto flex flex-col gap-3'>
                <h1 className='text-2xl md:text-3xl font-semibold'>Sports Articles</h1>
                <div className='flex flex-wrap gap-5 justify-between'>
                    {articles.map((article) => {
                        return (
                            <div key={article.id} className='flex flex-col w-full sm:w-1/2 md:w-[370px]'>
                                <div className='relative'>
                                    <img src={article.image} alt="" className='w-full h-[248px] rounded-md object-cover' />
                                    <div className='absolute right-0 top-0 p-4 text-white'>
                                        <p className='border border-white px-2 py-1 rounded-md'>{article.category}</p>
                                    </div>
                                </div>
                                <div className='flex gap-3 items-center mt-2'>
                                    <img src={article.profile} alt="" className='w-11 h-11 rounded-full' />
                                    <p className='text-sm font-normal'>{article.author}</p>
                                </div>
                                <p className='text-sm font-medium'>{article.date}</p>
                                <h1 className='text-lg md:text-xl font-normal font-sequel-sance'>{article.title}</h1>
                                <p className='text-sm font-medium'>{article.description}</p>
                            </div>
                        );
                    })}
                </div>
                <div className='flex gap-7 mt-6'>
                    <button className='px-5 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300'>
                        <GoArrowLeft className='text-2xl' />
                    </button>
                    <button className='px-5 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700'>
                        <LuArrowRight className='text-2xl' />
                    </button>
                </div>
            </div>
        </div>
    );
}
