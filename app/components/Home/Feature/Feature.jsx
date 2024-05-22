import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { FaJs, FaJava, FaReact } from 'react-icons/fa' // Import icons
import { SiCsharp } from 'react-icons/si' // Import the C# icon

const Feature = () => {
    return (
        <div className='pt-20 pb-16 bg-customWhite'>
            {/* Section Heading */}
            <SectionHeading heading='Programming Language' />
            {/* define grid system */}
            <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 items-center'>
                {/* 1st feature card */}
                <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                    <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 
                    bg-yellow-400 rounded-md shadow-md'>
                        {/* icon */}
                        <FaJs className='mx-auto mt-8 w-16 h-16 text-white' />
                        <h1 className='text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold'>
                            JavaScript
                        </h1>
                        <p className='text-center text-white text-opacity-70'>
                            JavaScript used for both front-end and back-end development.
                        </p>
                    </div>
                </div>

                {/* 2nd feature card */}
                <div data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement="top-center">
                    <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 
                    bg-red-600 rounded-md shadow-md'>
                        {/* icon */}
                        <FaJava className='mx-auto mt-8 w-16 h-16 text-white' />
                        <h1 className='text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold'>
                            Java
                        </h1>
                        <p className='text-center text-white text-opacity-70'>
                            Java is a robust language used for building large-scale applications.
                        </p>
                    </div>
                </div>

                {/* 3rd feature card */}
                <div data-aos="fade-left" data-aos-delay="400" data-aos-anchor-placement="top-center">
                    <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 
                    bg-blue-600 rounded-md shadow-md'>
                        {/* icon */}
                        <FaReact className='mx-auto mt-8 w-16 h-16 text-white' />
                        <h1 className='text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold'>
                            TypeScript
                        </h1>
                        <p className='text-center text-white text-opacity-70'>
                            TypeScript is a superset of JavaScript that adds static types.
                        </p>
                    </div>
                </div>

                {/* 4th feature card */}
                <div data-aos="fade-left" data-aos-delay="600" data-aos-anchor-placement="top-center">
                    <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-300 
                    bg-indigo-900 rounded-md shadow-md'>
                        {/* icon */}
                        <SiCsharp className='mx-auto mt-8 w-16 h-16 text-white' />
                        <h1 className='text-base text-center mt-8 mb-4 md:text-xl text-white font-semibold'>
                            Python
                        </h1>
                        <p className='text-center text-white text-opacity-70'>
                            Python is a popular language known for its simplicity and readability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
