import React from 'react';
import { HashLink } from 'react-router-hash-link';

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
        className={`fixed top-0 right-0 h-full w-64 bg-gray-100 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } z-40`}
      >
        <nav className="mt-16 space-y-4">
          <HashLink to="/#home" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Home</HashLink>
          <HashLink to="/#blurb" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            About
          </HashLink>
          <HashLink to="/#apply" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Apply
          </HashLink>
          <HashLink to="/#links" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Links
          </HashLink>
          <HashLink to="/#projects" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Projects
          </HashLink>
          <HashLink to="/#people" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            People
          </HashLink>
          <HashLink to="/#events" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Events
          </HashLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;