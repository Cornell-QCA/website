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
        className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } z-40`}
        style={{ backgroundColor: '#E6E8E6' }}
      >
        <nav className="mt-16 space-y-4">
          <Link to="/" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Home</Link>
          <Link to="/events" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Events
          </Link>
          <Link to="/projects" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Projects
          </Link>
          <Link to="/team" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Team
          </Link>
          <Link to="/recruitment" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Recruitment
          </Link>
          <Link to="/educational" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Educational
          </Link>
          <Link to="/contact" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;