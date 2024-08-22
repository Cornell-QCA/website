import React from 'react';

interface CardProps {
    image: string;
    title: string;
    subtitle?: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, link }) => {
return (
    <a href={'https://www.linkedin.com/in/' + link} target="_blank" rel="noopener noreferrer">
        <div className="max-w-48 rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
            <div className="w-48 h-48 overflow-hidden">
                <img className="w-full h-full object-cover object-center" src={'people/' + image + '.jpg'} alt={title} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{title}</div>
                {subtitle && <p className="text-gray-700 text-base text-center">{subtitle}</p>}
            </div>
        </div>
    </a>
);
}

export default Card;