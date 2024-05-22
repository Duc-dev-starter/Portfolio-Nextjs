import Image from 'next/image';
import React from 'react';

// Define Props
type Props = {
    image: string;
    name: string;
    description: string;
    githubLink: string;
};

const ProjectsCard: React.FC<Props> = ({ image, name, description, githubLink }) => {
    return (
        <div className="bg-customBlue p-6 rounded-xl shadow-lg w-full max-w-[400px] mx-auto">
            {/* Image */}
            <Image src={image} alt={name} width={500} height={400} className='object-cover rounded-t-xl' />
            <div className='flex flex-col mt-4 space-y-4'>
                <h1 className='cursor-pointer text-xl text-black font-semibold underline'>{name}</h1>
                <p className='text-black'>{description}</p>
                <a href={githubLink} target='_blank' rel='noopener noreferrer'>
                    <p className='text-lg cursor-pointer text-black underline'>Go to Github</p>
                </a>
            </div>
        </div>
    );
}

export default ProjectsCard;
