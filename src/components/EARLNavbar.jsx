import React from "react";

function EARLNavbar({ selected }) {
    return (
        <header className="bg-slate-950 text-white shadow-md flex">
            <nav className={"max-w-screen-xl mx-auto p-4 flex justify-between items-center"}>
                <ul className="flex space-x-6">
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
                </ul>
            </nav>
        </header>
    );
}

export default EARLNavbar;
