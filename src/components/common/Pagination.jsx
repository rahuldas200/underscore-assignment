import React from 'react';
import { GoArrowLeft } from "react-icons/go";
import { LuArrowRight } from "react-icons/lu";

export default function Pagination() {
    return (
        <div className="flex justify-end p-4">
            <div className="flex items-center gap-2 md:gap-4">
                <button className="flex items-center justify-center w-8 h-8 rounded-sm bg-gray-300 hover:bg-gray-400 transition-colors">
                    <GoArrowLeft className="text-lg text-white" />
                </button>

                <div className="flex gap-1 md:gap-2">
                    {/* Use a different layout for mobile, e.g., reduce the size of the buttons */}
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white font-semibold">
                        1
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 text-black hover:bg-gray-300 transition-colors">
                        2
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 text-black hover:bg-gray-300 transition-colors">
                        3
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 text-black hover:bg-gray-300 transition-colors">
                        4
                    </div>
                </div>

                <button className="flex items-center justify-center w-8 h-8 rounded-sm bg-black hover:bg-gray-800 transition-colors">
                    <LuArrowRight className="text-lg text-white" />
                </button>
            </div>
        </div>
    );
}
