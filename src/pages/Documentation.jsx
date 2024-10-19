import EARLSideBar from "../components/EARLSideBar";
import EARLNavbar from "../components/EARLNavbar";
import EARLInfo from "../components/EARLInfo";
import EARLCodeSnippet from "../components/EARLCodeSnippet";

const compilingEARLBash = `cd EARL
mkdir build
cd build
cmake -S .. -B .
`;

const installingEARLBash = `cd build
make
sudo make install
make test
`;

function Documentation() {
    const mainColors = [
        "bg-gradient-to-tr",
        "from-slate-900",
        "to-slate-600",
        "text-white",
    ];

    const mainSize = [
        "min-h-screen",
        "text-sm",
        "sm:text-base",
    ];

    const mainLoc = [
        "flex",
        "flex-col",
    ];

    const mainClassName = [...mainColors, ...mainSize, ...mainLoc].join(" ");

    return (
        <div className={mainClassName}>
            <EARLNavbar />

            <div className="flex">
                {/* Sidebar */}
                <EARLSideBar sections={["Important Notes", "Resources", "Compiling", "Installing", "EARL Language Reference"]} />

                {/* Main Content */}
                <div className="ml-64 p-8 flex-1">
                    <div id="section0">
                        <h2 className="text-4xl font-bold p-4">Important Notes</h2>
                        <div className="p-4">
                            <EARLInfo text="- *This language is still in the infant stage and it is NOT recommended to use in any real or professional capacity.*" />
                            <EARLInfo text="- As of now, the only supported platform is Linux, and no guarantees for MacOS." />
                            <EARLInfo text="- The project is regularly being built with `g++ (Debian 12.2.0-14) 12.2.0`, not `clang` or any other `c++` compiler." />
                        </div>
                    </div>

                    <div id="section1">
                        <h2 className="text-4xl font-bold p-4">Resources</h2>
                        <EARLInfo text="The EARL project consists of three Github repositories:" />

                        <div className="p-4">
                            <EARLInfo text="1. Main Project: https://www.github.com/malloc-nbytes/EARL.git/" />
                            <EARLInfo text="2. earlmgr (package manager WIP): https://www.github.com/malloc-nbytes/earlmgr.git/" />
                            <EARLInfo text="3. Syntax highlighting (VSCode, Emacs, Vim, NeoVim): https://www.github.com/malloc-nbytes/EARL-language-support.git/" />
                        </div>

                        <EARLInfo text="Only the first repository is required, the others are optional." />
                    </div>

                    <div id="section2">
                        <h2 className="text-4xl font-bold p-4">Compiling</h2>
                        <EARLInfo text="We have moved from autotools to cmake, so the required tools are:" />

                        <div className="p-4">
                            <EARLInfo text="`c++17`" />
                            <EARLInfo text="`cmake` (at least v3.25.1)" />
                            <EARLInfo text="`doxygen` (optional) (for c++ source code documentation [good for doing development on the interpreter])" />
                        </div>

                        <EARLInfo text="Users compiling for the first time should do:" />
                        <EARLCodeSnippet code={compilingEARLBash} language="bash" />
                        <div className="p-4">
                            <EARLInfo text="*Note*: you can also supply a prefix option to changed the default installation location (`/usr/local`) by using `-DINSTALL_PREFIX=<prefix>`." />
                            <EARLInfo text="*However, there must be an `include/` and `bin/` directory inside of the prefix that is supplied. *" />
                        </div>

                        <EARLInfo text="This will create the Makefile. Use `make <opt>` where `<opt>` is one of:" />
                        <div className="p-4">
                            <EARLInfo text="`<none>` -> builds the project" />
                            <EARLInfo text="`clean` -> cleans the project, removing `*.obj` files" />
                            <EARLInfo text="`test` -> build the project and runs tests *(StdLib must be installed)*" />
                            <EARLInfo text="`docs` -> generate the `c++` source code documentation *(Doxygen is required)*" />
                            <EARLInfo text="`install` -> install the project" />
                        </div>
                    </div>

                    <div id="section3">
                        <h2 className="text-4xl font-bold p-4">Installing</h2>
                        <EARLInfo text="Once the configuration step in Compiling is done, use the following to install EARL as well as the StdLib:" />
                        <EARLCodeSnippet code={installingEARLBash} language="bash" />
                        <EARLInfo text="If everything worked, all tests should pass." />
                    </div>

                    <div id="section4">
                        <h2 className="text-4xl font-bold p-4">EARL Language Reference</h2>
                        <p>...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Documentation;
