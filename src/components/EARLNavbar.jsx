import React, { useEffect, useState } from "react";
import earlLogo from '../assets/earl-logo.jpg';

function EARLNavbar({ selected }) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setIsVisible(false); // Scrolling down
        } else {
            setIsVisible(true); // Scrolling up
        }
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
                        <a
                            href="/home"
                            className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'home' ? 'underline' : ''}`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'about' ? 'underline' : ''}`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/documentation"
                            className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'documentation' ? 'underline' : ''}`}
                        >
                            Documentation
                        </a>
                    </li>
                    <li>
                        <a
                            href="/examples"
                            className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'examples' ? 'underline' : ''}`}
                        >
                            Examples
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'contact' ? 'underline' : ''}`}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="/source"
                            className={`text-sm md:text-base font-light hover:text-gray-300 transition-colors ${selected === 'source' ? 'underline' : ''}`}
                        >
                            Source
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Logo aligned to the right */}
            <div className="">
                <img 
                    src={earlLogo} 
                    alt="EARL Logo" 
                    className="w-12 h-12 rounded-full object-cover border-4 border-blue-400" 
                />
            </div>
        </header>
    );
}

export default EARLNavbar;
