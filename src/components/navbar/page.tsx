import React, { useState, useEffect } from 'react';
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

    return (

        <>
            <nav className="fixed top-0 right-0 p-4 z-50">
                <button
                    onClick={toggleSidebar}
                    className={`text-3xl focus:outline-none z-50 fixed top-0 right-0 p-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
                >

                    &#9776; {/* Hamburger menu icon */}
                </button>
            </nav>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </>
    );
}

export default Navbar;