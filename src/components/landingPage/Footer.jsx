import React from 'react';
import Pagination from '../common/Pagination';
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='w-11/12 mx-auto bg-white flex flex-col md:flex-row items-center justify-between mb-10 p-4'>
            {/* Social Media Icons */}
            <div className='flex gap-3 mb-4 md:mb-0 items-center'>
                <div className='p-3 rounded-md bg-black text-white hover:bg-gray-800 transition duration-300'>
                    <FaFacebookSquare className='text-xl' />
                </div>
                <div className='p-3 rounded-md bg-black text-white hover:bg-gray-800 transition duration-300'>
                    <BsInstagram className='text-xl' />
                </div>
                <div className='p-3 rounded-md bg-black text-white hover:bg-gray-800 transition duration-300'>
                    <FaTwitter className='text-xl' />
                </div>
            </div>
            {/* Pagination */}
            <div className='w-full md:w-auto flex justify-center'>
                <Pagination />
            </div>
        </div>
    );
}
