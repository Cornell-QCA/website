import React from 'react';

interface ProjectProps {
  title: string;
  group?: string;
  link?: string;
  children: React.ReactNode;
}

const getGroupColors = (group?: string) => {
  switch (group?.toLowerCase()) {
    case 'theory':
      return {
        badge: 'bg-qca_red_dark-100 text-qca_red_dark-700',
        link: 'text-qca_red_dark-500 hover:text-qca_red_dark-600'
      };
    case 'hardware':
      return {
        badge: 'bg-qca_blue-100 text-qca_blue-700',
        link: 'text-qca_blue-500 hover:text-qca_blue-600'
      };
    case 'algos':
      return {
        badge: 'bg-qca_green-100 text-qca_green-700',
        link: 'text-qca_green-500 hover:text-qca_green-600'
      };
    case 'bizops':
      return {
        badge: 'bg-qca_purple-100 text-qca_purple-700',
        link: 'text-qca_purple-500 hover:text-qca_purple-600'
      };
    case 'education':
      return {
        badge: 'bg-qca_orange-100 text-qca_orange-700',
        link: 'text-qca_orange-500 hover:text-qca_orange-600'
      };
    default:
      return {
        badge: 'bg-gray-100 text-gray-700',
        link: 'text-gray-500 hover:text-gray-600'
      };
  }
};

const Link: React.FC<ProjectProps> = ({ title, group, link, children }) => {
  const colors = getGroupColors(group);
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200 h-full">
      {/* Project Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        {group && (
          <span className={`inline-block px-3 py-1 ${colors.badge} text-sm font-medium rounded-full`}>
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
            className={`inline-flex items-center ${colors.link} font-medium text-sm group`}
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