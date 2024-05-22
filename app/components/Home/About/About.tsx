import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { GiOpenBook } from 'react-icons/gi';
import { MdMovieCreation } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import AboutImage from '@/public/images/428073187_337730955918864_827549171704944088_n.jpg'
import Image from 'next/image'


const About = () => {
    return (
        <div className='pt-20 pb-16 bg-customWhite'>
            {/* Section Heading */}
            <SectionHeading heading="About Me" />
            {/* define grid system */}
            <div className='w-4/5 mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {/* Text Content */}
                <div>
                    <h1 className='text-[19px] md:text-[25px] font-semibold text-black'>A faster way to do just about anything</h1>
                    <p className='text-black text-opacity-60 mt-4'>
                        Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
                    </p>
                    {/* icon list item 1 */}
                    <div className='flex mt-8 items-center space-x-4'>
                        {/* icon box */}
                        <div className='w-12 h-12 rounded-full bg-pink-700 flex items-center flex-col justify-center'>
                            <GiOpenBook className='w-[1.3rem] h-[1.3rem] text-black' />
                        </div>
                        {/* icon text content */}
                        <div>
                            <h1 className='text-[16px] md:text-[22px] text-black font-semibold'>Reading Books</h1>
                            <p className='mt-1 text-[15px] text-black text-opacity-70'>I love reading books in my free time.</p>
                        </div>
                    </div>

                    {/* icon list item 2 */}
                    <div className='flex mt-8 items-center space-x-4'>
                        {/* icon box */}
                        <div className='w-12 h-12 rounded-full bg-blue-700 flex items-center flex-col justify-center'>
                            <MdMovieCreation className='w-[1.3rem] h-[1.3rem] text-black' />
                        </div>
                        {/* icon text content */}
                        <div>
                            <h1 className='text-[16px] md:text-[22px] text-black font-semibold'>Watching Movies</h1>
                            <p className='mt-1 text-[15px] text-black text-opacity-70'>I enjoy watching movies on weekends.</p>
                        </div>
                    </div>

                    {/* icon list item 3 */}
                    <div className='flex mt-8 items-center space-x-4'>
                        {/* icon box */}
                        <div className='w-12 h-12 rounded-full bg-orange-700 flex items-center flex-col justify-center'>
                            <FaCode className='w-[1.3rem] h-[1.3rem] text-black' />
                        </div>
                        {/* icon text content */}
                        <div>
                            <h1 className='text-[16px] md:text-[22px] text-black font-semibold'>Coding</h1>
                            <p className='mt-1 text-[15px] text-black text-opacity-70'>I am passionate about coding and software development.</p>
                        </div>
                    </div>
                </div>
                {/* Image Content */}
                <div>
                    {/* Image */}
                    <Image data-aos="zoom-in" data-aos-anchor-placement="top-center" src={AboutImage} width={450} alt='about' />
                </div>
            </div>
        </div>
    )
}

export default About