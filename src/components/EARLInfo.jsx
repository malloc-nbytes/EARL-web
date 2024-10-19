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

    // Function to escape HTML special characters
    const escapeHTML = (str) => {
        return str.replace(/[&<>"']/g, (match) => {
            switch (match) {
                case '&': return '&amp;';
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '"': return '&quot;';
                case "'": return '&#039;';
                default: return match;
            }
        });
    };

    // Function to parse text and convert inline code (backticks) and bold (asterisks) to respective elements
    const parseTextWithCodeAndBold = (text) => {
        // Escape HTML special characters
        const escapedText = escapeHTML(text);

        // First, replace the inline code surrounded by backticks (`...`)
        const codeRegex = /`(.*?)`/g;
        const boldRegex = /\*(.*?)\*/g;

        // Replace all instances of inline code and bold text
        let parsedText = escapedText;

        // First pass: Replace inline code
        parsedText = parsedText.replace(codeRegex, (match, p1) => {
            return `<code class="bg-slate-700 text-white rounded-sm px-1">${p1}</code>`;
        });

        // Second pass: Replace bold text surrounded by *
        parsedText = parsedText.replace(boldRegex, (match, p1) => {
            return `<strong class="font-bold">${p1}</strong>`;
        });

        // Return the parsed HTML
        return parsedText;
    };

    return (
        <p
            ref={elementRef}
            className={`text-sm md:text-base font-light bg-slate-900 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            dangerouslySetInnerHTML={{ __html: parseTextWithCodeAndBold(text) }}
        />
    );
}

export default EARLInfo;
