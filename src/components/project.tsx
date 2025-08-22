import React from 'react';

interface ProjectProps {
  title: string;
  group?: string;
  link?: string;
  children: React.ReactNode;
}

const Link: React.FC<ProjectProps> = ({ title, group, link, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200 h-full">
      {/* Project Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        {group && (
          <span className="inline-block px-3 py-1 bg-qca_red_dark-100 text-qca_red_dark-700 text-sm font-medium rounded-full">
            {group} Group
          </span>
        )}
      </div>
      
      {/* Project Description */}
      <div className="text-gray-700 leading-relaxed mb-4 prose prose-sm max-w-none">
        {children}
      </div>
      
      {/* Project Link */}
      {link && (
        <div className="pt-2 border-t border-gray-100">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-qca_red_dark-500 hover:text-qca_red_dark-600 font-medium text-sm group"
          >
            View on GitHub
            <svg 
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default Link;