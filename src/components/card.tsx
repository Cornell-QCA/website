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
        <a href={link} target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                    <img 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                        src={'people/' + image + '.jpg'} 
                        alt={title} 
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-center mb-1 group-hover:text-qca_red_dark-600 transition-colors">
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="text-gray-600 text-sm text-center">
                            {subtitle}
                        </p>
                    )}
                    {children && (
                        <div className="text-gray-600 text-sm text-center mt-1">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </a>
    );
};

export default Card;