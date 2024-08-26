import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-100 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <nav className="mt-16 space-y-4">
          <a href="/home" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Home
          </a>
          <a href="/blurb" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            About
          </a>
          <a href="/apply" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Apply
          </a>
          <a href="/projects" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Projects
          </a>
          <a href="/people" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            People
          </a>
          <a href="/events" className="block px-6 py-2 hover:bg-gray-200" onClick={onClose}>
            Events
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;