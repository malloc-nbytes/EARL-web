import { useState, useEffect, useRef } from 'react';

function EARLInfo({ text }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.9,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <p
            ref={elementRef}
            className={`text-sm md:text-base font-light bg-slate-950 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {text}
        </p>
    );
}

export default EARLInfo;
