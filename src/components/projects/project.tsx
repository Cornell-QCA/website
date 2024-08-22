import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
    link: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link }) => {
    return (
        <a href={'https://www.linkedin.com/in/' + link} target="_blank" rel="noopener noreferrer">
            <div className=" max-w-48 rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
                <img className="w-full" src={'public/people/' + image + '.jpg'} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">{title}</div>
                    {subtitle && <p className="text-gray-700 text-base text-center">{subtitle}</p>}
                </div>
            </div>
        </a>
    );
}

export default Project;