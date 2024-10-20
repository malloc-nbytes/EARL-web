import { useState, useEffect, useRef } from 'react';

function EARLInfo({ text }) {
    const [isVisible, setIsVisible] = useState(false);
    const [textOpacity, setTextOpacity] = useState(0);
    const [bgOpacity, setBgOpacity] = useState(0);
    const [scale, setScale] = useState(1); // New state for scale
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timeoutId = setTimeout(() => {
                setTextOpacity(1);
            }, 50);
            return () => clearTimeout(timeoutId);
        }
    }, [isVisible]);

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

    const parseTextWithCodeAndBold = (text) => {
        const escapedText = escapeHTML(text);
        const escapedBoldText = escapedText.replace(/\/\*/g, '%%BOLD%%');
        const escapedCodeText = escapedBoldText.replace(/\/`/g, '%%CODE%%');

        const codeRegex = /`(.*?)`/g;
        const boldRegex = /\*(.*?)\*/g;

        let parsedText = escapedCodeText;

        parsedText = parsedText.replace(codeRegex, (match, p1) => {
            return `<code class="bg-slate-800 text-white rounded-sm px-1">${p1}</code>`;
        });

        parsedText = parsedText.replace(boldRegex, (match, p1) => {
            return `<strong class="font-bold">${p1}</strong>`;
        });

        parsedText = parsedText.replace(/%%BOLD%%/g, '<span class="escaped-bold">/*</span>');
        parsedText = parsedText.replace(/%%CODE%%/g, '<span class="escaped-code">/`</span>');

        return parsedText;
    };

    const handleMouseMove = () => {
        setBgOpacity(0.1);
        setScale(1.005); // Slightly scale up
    };

    const handleMouseLeave = () => {
        setBgOpacity(0);
        setScale(1); // Reset scale
    };

    return (
        <p
            ref={elementRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`text-sm md:text-base font-light bg-slate-800 transition-opacity duration-1000 ease-out`}
            style={{
                opacity: textOpacity,
                backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
                position: 'relative',
                transition: 'opacity 1s ease, transform 0.2s ease', // Add transition for scale
                transform: `scale(${scale})`, // Apply scale transformation
            }}
            dangerouslySetInnerHTML={{ __html: parseTextWithCodeAndBold(text) }}
        />
    );
}

export default EARLInfo;
