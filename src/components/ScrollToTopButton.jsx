import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
    // State to manage button visibility
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 bg-white bg-opacity-30 backdrop-blur-md border border-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-opacity-40 transition-all"
                aria-label="Scroll to top"
            >
                <FontAwesomeIcon icon={faChevronUp} />
            </button>
        )
    );
};

export default ScrollToTopButton;
