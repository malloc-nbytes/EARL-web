import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import earlLogo from '../assets/earl-logo.jpg';

function EARLNavbar({ selected }) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY <= lastScrollY); // Show if scrolling up
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`bg-slate-950 text-white shadow-md flex items-center p-4 fixed top-0 left-0 w-full z-20 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="max-w-screen-xl mx-auto flex-grow">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link to="/home" className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'home' ? 'underline' : ''}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'about' ? 'underline' : ''}`}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/documentation" className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'documentation' ? 'underline' : ''}`}>
                            Documentation
                        </Link>
                    </li>
                    <li>
                        <Link to="/examples" className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'examples' ? 'underline' : ''}`}>
                            Examples
                        </Link>
                    </li>
                    <li>
                        <Link to="/earlmgr" className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'earlmgr' ? 'underline' : ''}`}>
                            earlmgr
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'contact' ? 'underline' : ''}`}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/source" className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'source' ? 'underline' : ''}`}>
                            Source
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Logo */}
            <div>
                <Link to="/home">
                    <img
                        src={earlLogo}
                        alt="EARL Logo"
                        className="w-12 h-12 rounded-full object-cover border-4 border-blue-400"
                    />
                </Link>
            </div>
        </header>
    );
}

export default EARLNavbar;
