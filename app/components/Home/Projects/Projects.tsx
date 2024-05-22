import React from 'react';
import SectionHeading from '../../Helper/SectionHeading';
import ProjectsCard from './ProjectsCard';
import projectsData from '@/public/projects.json'; // Adjust the path as necessary

const Projects = () => {
    return (
        <div className='pt-20 pb-16 bg-customWhite'>
            {/* section heading */}
            <SectionHeading heading='My Projects' />
            {/* define the grid system */}
            <div className='w-4/5 mt-16 mx-auto items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* Projects card */}
                {projectsData.map((project, index) => (
                    <ProjectsCard
                        data-aos="zoom-in" data-aos-delay="600" data-aos-anchor-placement="top center"
                        key={index}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        githubLink={project.githubLink}
                    />
                ))}

            </div>
        </div>
    );
}

export default Projects;
