import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } z-40 shadow-lg`}
        style={{ backgroundColor: '#F4F5F7' }}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-2xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        
        <nav className="px-4 space-y-2">
          <Link 
            to="/" 
            className="block px-4 py-3 text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200 font-medium" 
            onClick={onClose}
          >
            Home
          </Link>
          <Link 
            to="/recruitment" 
            className="block px-4 py-3 text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200 font-medium" 
            onClick={onClose}
          >
            Recruitment
          </Link>
          <Link 
            to="/projects" 
            className="block px-4 py-3 text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200 font-medium" 
            onClick={onClose}
          >
            Projects
          </Link>
          <Link 
            to="/team" 
            className="block px-4 py-3 text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200 font-medium" 
            onClick={onClose}
          >
            Team
          </Link>
          <Link 
            to="/educational" 
            className="block px-4 py-3 text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200 font-medium" 
            onClick={onClose}
          >
            Educational
          </Link>
          <Link 
            to="/events" 
            className="block px-4 py-3 text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200 font-medium" 
            onClick={onClose}
          >
            Events
          </Link>
          <Link 
            to="/contact" 
            className="block px-4 py-3 text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200 font-medium" 
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;