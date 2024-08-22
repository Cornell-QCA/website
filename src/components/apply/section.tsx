import React from 'react'

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <div className="relative mb-12">
            <div className="absolute -translate-y-1/2 top-1/2 w-6 h-6 rounded-full bg-qca_red_dark-500 mx-1.5" />
            <div className="ml-16 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-qca_red_med-500 mb-4">{title}</h3>
                {children}
            </div>
        </div>
    );
};

export default Section;