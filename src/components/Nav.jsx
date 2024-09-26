import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: 'home'
  },
  {
    id: 2,
    name: "Category",
    link: 'category'
  },
  {
    id: 3,
    name: "Trending News",
    link: 'trending'
  },
  {
    id: 4,
    name: "Recent News",
    link: 'recent'
  },
  {
    id: 5,
    name: "Club Ranking",
    link: 'ranking'
  },
  {
    id: 6,
    name: "Sports Article",
    link: 'articles'
  }
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [handleClick, setHandleClick] = useState(1);

  return (
    <div className="w-11/12 mx-auto py-5 px-4 xl:px-0 flex justify-between flex-wrap items-center">
      {/* Logo/Title */}
      <div className="font-normal text-4xl font-darkline" >
        Sport News
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links - Hidden on Mobile */}
      <ul className={`lg:flex gap-3   ${menuOpen ? 'block' : 'hidden'} lg:block`}>
        {navLinks.map((item) => (
          <li key={item.id} onClick={() => setHandleClick(item.id)} className={` ${handleClick === item.id ? "font-bold text-[#262626] " : " font-normal"} text-sm  text-[#26262699] p-2.5  transition duration-300 font-dm-sans`}>
            <a href={`#${item.link}`}>{item.name}</a>
          </li>
        ))}
      </ul>

      {/* Search Bar - Always Visible */}
      <div className="hidden lg:flex relative ">
        <div className='w-[100px] h-[35px]'>
          <input
            type="text"
            className="bg-gray-200 text-black placeholder:text-white  text-sm w-full h-full rounded-lg px-2 pl-7 py-1 focus:outline-none"
            placeholder="Search"
          />

          <div className='absolute top-2.5 left-2 text-black'>
            <IoIosSearch className='w-4 text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}
