import React from 'react';
import SectionHeading from '../../Helper/SectionHeading';
import advantageImage from '@/public/images/428073187_337730955918864_827549171704944088_n.jpg';
import Image from 'next/image';

const Advantage = () => {
    // Danh sách qualifications
    const qualifications = [
        {
            title: "Web Design",
            school: "Fpt University",
            duration: "2023 - Present"
        },
        {
            title: "Tester",
            school: "Fpt University",
            duration: "2022 - 2023"
        },
        {
            title: "Web Development",
            school: "Fpt University",
            duration: "2022 - 2023"
        },
        {
            title: "UX Expert, Product Designer",
            school: "Fpt University",
            duration: "2022 - 2023"
        },
        {
            title: "UX Designer",
            school: "Fpt University",
            duration: "2022 - 2023"
        },
        {
            title: "Web Designer",
            school: "Fpt University",
            duration: "2022 - 2023"
        }
    ];

    return (
        <div className='pt-20 pb-16 bg-customWhite'>
            {/* Section Heading */}
            <SectionHeading heading='Qualification' />
            {/* define grid system */}
            <div className='w-4/5 mt-14 mx-auto items-center md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {/* Text content */}
                <div>
                    <h1 className='text-lg md:text-2xl font-semibold text-black'>
                        All Qualification from 2022-2023
                    </h1>
                    {/* Render qualifications */}
                    {qualifications.map((qualification, index) => (
                        <div key={index} className="mt-4">
                            <h2 className="text-base md:text-xl font-semibold text-black">{qualification.title}</h2>
                            <p className="text-black text-opacity-60 mt-1">{qualification.school}</p>
                            <p className="text-black text-opacity-60 mt-1">{qualification.duration}</p>
                        </div>
                    ))}
                </div>
                {/* Image Content */}
                <div data-aos="zoom-out" data-aos-delay="600" data-aos-anchor-placement="top-center">
                    <Image src={advantageImage} width={450} alt='advantage' />
                </div>
            </div>
        </div>
    );
}

export default Advantage;
