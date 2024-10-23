import { Link } from "react-router-dom";
import EARLInfoNote from "./EARLInfoNote";
import EARLCodeSnippet from "./EARLCodeSnippet";

function EARLLegend() {
    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 relative z-10">
            <h1 className="uppercase font-semibold text-6xl sm:text-6xl md:text-8xl lg:text-9xl">EA<span className="text-blue-400">RL</span></h1>
            <EARLInfoNote children="A gradually typed programming language that introduces higher level programming concepts to BASH scripting, and designed to replace BASH scripts."
            />
            <EARLInfoNote children="Supports Object Oriented Programming, a fully interactive REPL, a standard library, a package manager, the ability to be translated to Python, and extensive documentation." />
            <EARLInfoNote children="Syntax highlighting for common editors (VSCode, Emacs, Vim) is available." />
            <div className="space-x-4">
                <Link to="/documentation">
                    <button className="px-12 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
                        <p>Docs</p>
                    </button>
                </Link>
                <a href="https://www.github.com/malloc-nbytes/EARL.git/">
                    <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
                        <p>Github Repo</p>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default EARLLegend;
