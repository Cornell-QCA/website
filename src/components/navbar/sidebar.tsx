import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Helper function to determine if a nav item is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    // For coffee chat page, highlight recruitment instead
    if (location.pathname === '/coffee') {
      return path === '/recruitment';
    }
    return location.pathname === path;
  };

  const navigationItems = [
    { to: "/", label: "Home" },
    { to: "/recruitment", label: "Recruitment" },
    { to: "/projects", label: "Projects" },
    { to: "/team", label: "Team" },
    { to: "/education", label: "Education" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];
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
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block px-4 py-3 rounded-md transition-colors duration-200 font-medium ${
                isActive(item.to)
                  ? 'bg-red-100 text-red-600 border-l-4 border-red-600'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;