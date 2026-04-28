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

  const cardClasses = "bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col";

  return (
    <div className={cardClasses}>
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
      <div className="text-gray-700 leading-relaxed mb-6 prose prose-sm max-w-none">
        {children}
      </div>

      {/* Project Actions */}
      {link && (
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub Repository"
            className="text-gray-400 hover:text-gray-900 transition-colors p-1"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default Link;