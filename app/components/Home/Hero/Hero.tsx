import Image from 'next/image'
import React from 'react'
import HeroImage from '@/public/images/428073187_337730955918864_827549171704944088_n.jpg'

const Hero = () => {
    return (
        <div className='lg:h-[88vh] bg-customWhite md:h-[80vh] sm:h-[75vh] h-[70vh] flex items-center justify-center flex-col'>
            {/* define grid system */}
            <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-4/5 mx-auto'>
                {/* text-content */}
                <div className='col-span-2'>
                    <h1 data-aos="fade-right"
                        className='text-[27px] md:text-[35px] lg:text-[40px] mb-4 font-bold 
                    text-black leading-[2.4rem] md:leading-[4rem]'>
                        My name is <span className='text-yellow-300'>Duc</span>
                    </h1>
                    <p data-aos="fade-left" data-aos-delay="200" className='md:text-[17px] text-[15px] mb-8 text-black opacity-90 font-normal'>
                        I&apos;m creative designer (starter) based in HCM city, and i&apos;m very passionate and dedicated to my work
                    </p>
                </div>
                {/* image-content */}
                <div data-aos="fade-left" data-aos-delay="800" className='col-span-3 hidden sm:block mx-auto'>
                    {/* image */}
                    <Image className='rounded-lg' src={HeroImage} alt='Hero' width={450} />
                </div>
            </div>
        </div>
    )
}

export default Hero