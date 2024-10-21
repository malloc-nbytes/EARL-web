function EARLSideBar({ sections, title }) {
    const scrollToSection = (sectionIndex, subIndex) => {
        const targetId = subIndex !== undefined ? `section${sectionIndex}-subsection${subIndex}` : `section${sectionIndex}`;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 50; // 10 pixels offset
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth" // Optional smooth scrolling
            });
        }
    };

    return (
        <div className="fixed top-0 left-0 w-64 h-full bg-slate-950 text-white p-4 overflow-auto z-30">
            <h2 className="text-2xl font-semibold mb-6">EA<span className="text-blue-400">RL</span> {title}</h2>
            <ul className="space-y-4">
                {sections.map((section, sectionIndex) => {
                    return (
                        <li key={sectionIndex}>
                            <a
                                href={`#section${sectionIndex}`}
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default anchor behavior
                                    scrollToSection(sectionIndex); // Call custom scroll function
                                }}
                                className="text-blue-400 hover:text-blue-600"
                            >
                                {section.title}
                            </a>
                            {section.subsections && section.subsections.length > 0 && (
                                <ul className="pl-4 space-y-2">
                                    {section.subsections.map((subsection, subIndex) => (
                                        <li key={subIndex}>
                                            <a
                                                href={`#section${sectionIndex}-subsection${subIndex}`}
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent default anchor behavior
                                                    scrollToSection(sectionIndex, subIndex); // Call custom scroll function
                                                }}
                                                className="text-blue-300 hover:text-blue-500"
                                            >
                                                {subsection.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const Section = ({ id, title, content, subsections, extraContent, depth = 0 }) => {
    const titleClass = depth === 0
        ? "text-4xl font-bold p-4 border-b border-gray-400" // Main sections (depth 0)
        : depth === 1
        ? "text-3xl font-bold p-4 border-b border-gray-400"
        : depth === 2
        ? "text-2xl font-bold p-4 border-b border-gray-400"
        : "text-xl font-bold p-4 border-b border-gray-400"; // More nested sections

    console.log("title: ", title, " titleclass: ", titleClass);

    return (
        <div className="py-4" id={id}>
            <h2 className={titleClass}>{title}</h2>
            <div>{content}</div>
            {/* Render subsections if they exist */}
            {subsections && subsections.length > 0 && (
                <div className="pl-6">
                    {subsections.map((subsection, index) => (
                        <Section
                            key={index}
                            id={`${id}-subsection${index}`}
                            title={subsection.title}
                            content={subsection.content}
                            subsections={subsection.subsections}
                            extraContent={subsection.extraContent}
                            depth={depth + 1}
                        />
                    ))}
                </div>
            )}
            {/* Render extra content after subsections */}
            {extraContent && <div className="mt-4">{extraContent}</div>}
        </div>
    );
};

function ContentWrapper({sections, sideBarTitle}) {
    return (
        <div className="flex">
            <EARLSideBar sections={sections} title={sideBarTitle} />

            {/* Main Content */}
            <div className="ml-64 p-8 flex-1">
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        id={`section${index}`}
                        title={section.title}
                        content={section.content}
                        subsections={section.subsections}
                        extraContent={section.extraContent}
                    />
                ))}
            </div>
        </div>
    );
}

export default ContentWrapper;
