import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from 'react';

function EARLCodeSnippet({ code, language }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    return (
        <div className="relative my-6 p-6 bg-slate-800 border border-slate-600 rounded-lg shadow-lg">
            <button
                onClick={handleCopy}
                className="absolute top-4 right-4 bg-slate-600 text-white px-3 py-1 rounded-lg hover:bg-slate-500 transition duration-200"
                title="Copy to clipboard"
            >
                {copied ? "Copied!" : "Copy"}
            </button>
            <pre className="text-white overflow-x-auto">
                <SyntaxHighlighter language={language} style={nightOwl}>
                    {code}
                </SyntaxHighlighter>
            </pre>
        </div>
    );
}

export default EARLCodeSnippet;
