import React from 'react';

interface ProjectProps {
  title: string;
  group?: string;
  children: React.ReactNode;
}

const Link: React.FC<ProjectProps> = ({ title, group, children }) => {
  return (
    <div className="rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 duration-300 h-min">
      <h3 className="text-2xl font-semibold text-qca_red_dark-400 mb-4">{title}</h3>
      <p className="text-gray-700 text-base mb-4">{group}</p>
      {children}
    </div>
  );
};

export default Link;