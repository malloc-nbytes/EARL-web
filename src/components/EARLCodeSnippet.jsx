import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function EARLCodeSnippet({ code, language }) {
    return (
        <div className="my-6 p-6 bg-slate-800 border border-slate-600 rounded-lg shadow-lg">
            <pre className="text-white overflow-x-auto">
                <SyntaxHighlighter language={language} style={nightOwl}>
                    {code}
                </SyntaxHighlighter>
            </pre>
        </div>
    );
}

export default EARLCodeSnippet;
