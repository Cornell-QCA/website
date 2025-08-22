import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scrolling down
                setIsVisible(false);
            } else { // if scrolling up
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // Cleanup the event listener on component unmount
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const navigationItems = [
        { to: "/", label: "Home" },
        { to: "/recruitment", label: "Recruitment" },
        { to: "/projects", label: "Projects" },
        { to: "/team", label: "Team" },
        { to: "/educational", label: "Educational" },
        { to: "/events", label: "Events" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className={`fixed top-0 left-0 right-0 shadow-sm z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} style={{ backgroundColor: '#F4F5F7' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo/Brand - Responsive positioning */}
                        <div className="flex items-center">
                            <Link to="/">
                                <img 
                                    src="/logo.png" 
                                    alt="QCA @ Cornell" 
                                    className="h-10 sm:h-12 w-auto hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation - Hidden on mobile */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-base lg:text-lg whitespace-nowrap"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Hamburger Menu - Only visible on mobile */}
                        <button
                            onClick={toggleSidebar}
                            className="md:hidden text-2xl sm:text-3xl text-gray-700 hover:text-red-600 focus:outline-none transition-colors duration-200"
                        >
                            &#9776;
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </>
    );
}

export default Navbar;