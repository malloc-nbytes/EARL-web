function EARLSideBar({sections}) {
    return (
        <div className="fixed top-0 left-0 w-64 h-full bg-slate-950 text-white p-4">
            <h2 className="text-2xl font-semibold mb-6">Documentation</h2>
            <ul className="space-y-4">
                {sections.map((section, sectionIndex) => {
                    return (
                        <li>
                            <a href={"#section"+sectionIndex} className="text-blue-400 hover:text-blue-600">
                                {section}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default EARLSideBar;
