import React from 'react';
import boxing from '../../assets/footerimg.png';
import { LuArrowRight } from "react-icons/lu";

export default function Subcreption() {
    return (
        <div className='mt-20 mb-9'>
            <div className='flex flex-col xl:flex-row w-11/12 relative mx-auto'>
                {/* Left Section: Subscription Form */}
                <div className='p-4 pl-9 w-full h-[385px] bg-gray-300 flex flex-col justify-center'>
                    <div className='flex flex-col gap-5 w-full md:w-3/4 lg:w-1/2'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl sm:text-3xl font-sequel-sance uppercase footerColor font-bold'>
                            Newsletter <br /> Subscription
                        </h1>
                        <div className='relative w-full'>
                            <input
                                type="text"
                                className='p-3 w-full pr-10 border border-black rounded-md'
                                placeholder='shovon.khan0099@gmail.com'
                            />
                            <button className='absolute right-0 top-0 bg-black h-full w-16 flex items-center rounded-md'>
                                <LuArrowRight className='text-white w-full text-2xl' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section: Image - Only Visible on XL and above */}
                <div className='hidden xl:flex absolute -top-[140px] -right-7'>
                    <img src={boxing} alt="Boxing" className="w-[631px] h-[467px] object-cover object-top scale-125" />
                </div>
            </div>
        </div>
    )
}
