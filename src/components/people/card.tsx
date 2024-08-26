import React from 'react';

interface CardProps {
    image: string;
    title: string;
    subtitle?: string;
    link: string;
    children?: React.ReactNode; // Support children for custom content
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, link, children }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="max-w-64 rounded overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
                <div className="w-64 h-64 overflow-hidden">
                    <img className="w-full h-full object-cover object-center" src={'people/' + image + '.jpg'} alt={title} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-lg mb-2 text-center">{title}</div>
                    {<p className="text-gray-700 text-sm text-center">
                        {subtitle ? subtitle : <>&#8203;</>}
                    </p>}
                    <div className="text-gray-700 text-sm text-center">
                        {children} {/* Render custom content */}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Card;