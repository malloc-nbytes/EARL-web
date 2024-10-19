import React from "react";

function EARLNavbar() {
    return (
        <header className="bg-slate-950 text-white shadow-md flex">
            <nav className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="/home"
                            className="text-sm md:text-base font-light hover:text-gray-300 transition-colors"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="text-sm md:text-base font-light hover:text-gray-300 transition-colors"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/documentation"
                            className="text-sm md:text-base font-light hover:text-gray-300 transition-colors"
                        >
                            Documentation
                        </a>
                    </li>
                    <li>
                        <a
                            href="/examples"
                            className="text-sm md:text-base font-light hover:text-gray-300 transition-colors"
                        >
                            Examples
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="text-sm md:text-base font-light hover:text-gray-300 transition-colors"
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
