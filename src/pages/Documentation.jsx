import EARLSideBar from "../components/EARLSideBar";
import EARLNavbar from "../components/EARLNavbar";
import EARLInfo from "../components/EARLInfo";
import EARLCodeSnippet from "../components/EARLCodeSnippet";
import EARLTable from "../components/EARLTable";

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

const keywordsData = [
    { keyword: "let", section: "Variable Declarations" },
    { keyword: "fn", section: "Function Definitions" },
    { keyword: "if", section: "Conditionals" },
    { keyword: "else", section: "Conditionals" },
    { keyword: "while", section: "While Loops" },
    { keyword: "for", section: "For Loops" },
    { keyword: "foreach", section: "Foreach Loops" },
    { keyword: "loop", section: "Forever Loops" },
    { keyword: "in", section: "For loops, Foreach Loops" },
    { keyword: "to", section: "For loops" },
    { keyword: "break", section: "For loops, While Loops, Foreach Loops, Forever Loops" },
    { keyword: "continue", section: "For loops, While Loops, Foreach Loops, Forever Loops" },
    { keyword: "import", section: "Imports" },
    { keyword: "almost", section: "Imports" },
    { keyword: "full", section: "Imports" },
    { keyword: "module", section: "Modules" },
    { keyword: "class", section: "Classes" },
    { keyword: "match", section: "Pattern Matching" },
    { keyword: "when", section: "Pattern Matching" },
    { keyword: "enum", section: "Enumerations" },
    { keyword: "@ref", section: "Attributes" },
    { keyword: "@pub", section: "Attributes" },
    { keyword: "@world", section: "Attributes" },
    { keyword: "@const", section: "Attributes" },
    { keyword: "@experimental", section: "Attributes" },
    { keyword: "return", section: "N/A" },
    { keyword: "true", section: "N/A" },
    { keyword: "false", section: "N/A" },
    { keyword: "none", section: "N/A" },
];

const keywordsColumns = ["Keyword", "Section"];

const binaryOperationsData = [
    { symbol: "+", datatypes: "int, float, list, str", description: "Adds the elements together" },
    { symbol: "-", datatypes: "int, float", description: "Subtracts the elements" },
    { symbol: "*", datatypes: "int, float", description: "Multiplies the elements together" },
    { symbol: "/", datatypes: "int, float", description: "Divides the elements" },
    { symbol: "%", datatypes: "int", description: "Produces the modulo" },
    { symbol: "**", datatypes: "int, float", description: "Produces the power" },
    { symbol: ">", datatypes: "int, float, time", description: "Greater than" },
    { symbol: "<", datatypes: "int, float, time", description: "Less than" },
    { symbol: ">=", datatypes: "int, float, time", description: "Greater than or equal to" },
    { symbol: "<=", datatypes: "int, float, time", description: "Less than or equal to" },
    { symbol: "==", datatypes: "bool, int, str, float, char, list, option, tuple, TypeKW, unit time", description: "Equal to"},
    { symbol: "!=", datatypes: "bool, int, str, float, char, list, option, tuple, TypeKW, unit time", description: "Not equal to"},
    { symbol: "&&", datatypes: "bool, option", description: "Logical AND"},
    { symbol: "||", datatypes: "bool, option", description: "Logical OR"},
    { symbol: "<<", datatypes: "int", description: "Bit shift left"},
    { symbol: ">>", datatypes: "int", description: "Bit shift right"},
    { symbol: "`&", datatypes: "int", description: "Bitwise AND (backtick needed)"},
    { symbol: "`|", datatypes: "int", description: "Bitwise OR (backtick needed)"},
    { symbol: "`~", datatypes: "int", description: "Bitwise NOT (backtick needed)"},
    { symbol: "`^", datatypes: "int", description: "Bitwise XOR (backtick needed)"},
];

const binaryOperationsColumns = ["Symbol", "Datatypes", "Description"];

const Section = ({ id, title, children, code }) => {
    return (
        <div className="py-4" id={id}>
            <h2 className="text-4xl font-bold p-4">{title}</h2>
            {children}
            {code && <EARLCodeSnippet code={code} language="bash" />}
        </div>
    );
};

const ContentWrapper = ({ sections }) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <EARLSideBar sections={sections} />

            {/* Main Content */}
            <div className="ml-64 p-8 flex-1">
                {sections.map((section, index) => (
                    <Section key={index} id={`section${index}`} title={section.title} code={section.code}>
                        {section.content}
                    </Section>
                ))}
            </div>
        </div>
    );
};

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
                <EARLSideBar sections={["Important Notes", "Resources", "Compiling", "Installing", "Syntax Highlighting", "EARL Language Reference"]} />

                {/* Main Content */}
                <div className="ml-64 p-8 flex-1">
                    <div id="section0">
                        <h2 className="text-4xl font-bold p-4">Important Notes</h2>
                        <EARLInfo text="- *This language is still in the infant stage and it is NOT recommended to use in any real or professional capacity.*" />
                        <EARLInfo text="- As of now, the only supported platform is Linux, and no guarantees for MacOS." />
                        <EARLInfo text="- The project is regularly being built with `g++ (Debian 12.2.0-14) 12.2.0`, not `clang` or any other `c++` compiler." />
                    </div>

                    <div className="py-4" id="section1">
                        <h2 className="text-4xl font-bold p-4">Resources</h2>
                        <EARLInfo text="The EARL project consists of three Github repositories:" />

                        <div className="p-4">
                            <EARLInfo text="1. Main Project: https://www.github.com/malloc-nbytes/EARL.git/" />
                            <EARLInfo text="2. earlmgr (package manager WIP): https://www.github.com/malloc-nbytes/earlmgr.git/" />
                            <EARLInfo text="3. Syntax highlighting (VSCode, Emacs, Vim, NeoVim): https://www.github.com/malloc-nbytes/EARL-language-support.git/" />
                        </div>

                        <EARLInfo text="Only the first repository is required, the others are optional." />
                    </div>

                    <div className="py-4" id="section2">
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
                            <EARLInfo text="*However, there must be an `include` and `bin` directory inside of the prefix that is supplied. *" />
                        </div>

                        <EARLInfo text="This will create the Makefile. Use `make <opt>` where `<opt>` is one of:" />
                        <div className="p-4">
                            <EARLInfo text="`<none>` -> builds the project" />
                            <EARLInfo text="`clean` -> cleans the project, removing `*.obj` files" />
                            <EARLInfo text="`test` -> build the project and runs tests *(StdLib must be installed)*" />
                            <EARLInfo text="`docs` -> generate the `c++` source code documentation *(Doxygen is required)*" />
                            <EARLInfo text="`install` -> install the project." />
                        </div>
                    </div>

                    <div className="py-4" id="section3">
                        <h2 className="text-4xl font-bold p-4">Installing</h2>
                        <EARLInfo text="Once the configuration step in Compiling is done, use the following to install EARL as well as the StdLib:" />
                        <EARLCodeSnippet code={installingEARLBash} language="bash" />
                        <EARLInfo text="If everything worked, all tests should pass." />
                    </div>

                    <div className="py-4" id="section4">
                        <h2 className="text-4xl font-bold p-4">Syntax Highlighting</h2>
                        <EARLInfo text="As stated before, I have provided basic syntax highlighting for the common editors:" />
                        <div className="p-4">
                            <EARLInfo text="VSCode" />
                            <EARLInfo text="Emacs" />
                            <EARLInfo text="Vim" />
                            <EARLInfo text="NeoVim." />
                        </div>
                        <EARLInfo text="The repo is: https://www.github.com/malloc-nbytes/EARL-language-support.git/" />
                    </div>

                    <div className="py-4" id="section5">
                        <h2 className="text-4xl font-bold p-4">EARL Language Reference</h2>
                        <EARLInfo text="*Note*: for *Grammar* sections of this document..." />
                        <div className="p-4">
                            <EARLInfo text="- `This text format represents keywords`" />
                            <EARLInfo text="- This text format represents keywords" />
                            <EARLInfo text="- <text> represents keywords" />
                            <EARLInfo text="- | represents *OR*" />
                            <EARLInfo text="- [text] represents *list*" />
                            <EARLInfo text="- *(text) means 0 or more of" />
                            <EARLInfo text="- ?(text) means 0 or 1 of" />
                            <EARLInfo text='- "text" represents a string' />
                        </div>
                    </div>

                    <div className="py-4" id="section6">
                        <h3 className="text-3xl font-bold p-4">Your First Program</h3>
                        <EARLInfo text="To jump right into testing out EARL, do the following to implement a Hello World! program." />
                        <EARLCodeSnippet code={`module Main

println("Hello World!");`} language="armasm" />
                        <EARLInfo text="Then run" />
                        <EARLCodeSnippet code={"earl ./hello.earl"} language="bash" />
                        <EARLInfo text="For more information on `module Main`, see *Modules* section" />
                    </div>

                    <div className="py-4" id="section7">
                        <h3 className="text-3xl font-bold p-4">Typing</h3>
                        <EARLInfo text='EARL is "gradually" typed. This means that explicit types are not required, rather the type of a' />
                        <EARLInfo text='variable is the type of the right hand side expression. Values are also not dynamic, so once a variable' />
                        <EARLInfo text='has a type, it will always have that type. If dynamic types are desired, see the `option` datatype in *Datatypes*.' />
                        <EARLCodeSnippet code={`let x = 1; # x is an int
let y = 1.2; # y is a float
let z = [1, 2, 3]; # z is a list

x = "not allowed"; # error because x is an integer.`} language="armasm" />

                        <EARLInfo text='If explicit types are desired, here are the following types that can be used:' />
                        <div className="p-4">
                            <EARLInfo text='1. int' />
                            <EARLInfo text='2. float' />
                            <EARLInfo text='3. real (int or float)' />
                            <EARLInfo text='4. char' />
                            <EARLInfo text='5. str' />
                            <EARLInfo text='6. bool' />
                            <EARLInfo text='7. option' />
                            <EARLInfo text='8. file' />
                            <EARLInfo text='9. tuple' />
                            <EARLInfo text='10. list' />
                            <EARLInfo text='11. closure' />
                            <EARLInfo text='12. slice' />
                            <EARLInfo text='13. dictionary' />
                            <EARLInfo text='14. type' />
                            <EARLInfo text='15. unit (void)' />
                            <EARLInfo text='16. any' />
                        </div>
                    </div>

                    <div className="py-4" id="section8">
                        <h3 className="text-3xl font-bold p-4">REPL</h3>
                        <div className="p-4" id="section9">
                            <h4 className="text-2xl font-bold p-4">REPL Commands</h4>
                            <EARLInfo text='If you were to just start earl without any files, it will launch the built-in REPL. Here you can' />
                            <div className="mb-4"><EARLInfo text='evaluate and run code that is provided.' /></div>
                            <EARLInfo text='When in the REPL, typing `:<cmd>` will run a REPL command. It will not evaluate any code, but you' />
                            <EARLInfo text='can use it to show the current session, edit lines that have already been typed, remove lines, and' />
                            <EARLInfo text='more. To view more information, launch the REPL and type `:help`.' />
                        </div>
                        <div className="p-4" id="section10">
                            <h4 className="text-2xl font-bold p-4">REPL Programming</h4>
                            <EARLInfo text='If a line that is typed does not start with `:`, it will be interpreted as code. Upon hitting `<enter>`, it ' />
                            <EARLInfo text='will not immediately evaluate the code. It only does code evaluation when an empty line is processed.' />
                            <EARLInfo text='Because of this, you can code in *sessions*. Starting a new session does not mean that the current' />
                            <EARLInfo text='environment is lost, but it essentially focuses on a new code block. As long as `<enter>` has not been' />
                            <div className='mb-4'><EARLInfo text='hit on an empty line, you can continue to write code and have it wait to be evaluated.' /></div>

                            <EARLInfo text='One benefit to this is that if a mistake has been made, you can edit it or remove that line entirely by using the REPL' />
                            <EARLInfo text='command `:e` or `:rm`. Keep in mind that as soon as `<enter>` is performed on an empty line, you' />
                            <div className='mb-4'><EARLInfo text='will *not* be able to go back and change it as it starts a new session.' /></div>

                            <EARLInfo text='You will know when a new session starts because the line numbers on the left will reset to 0 and the' />
                            <div className='mb-4'><EARLInfo text='last evaluated expression will have its result printed to `stdout`.' /></div>

                            <EARLInfo text='Using the REPL allows for one major benefit, which is immediate evaluation of any expression. This' />
                            <EARLInfo text='means that if `1 + 2;` is typed into the REPL followed by `<enter><enter>`, it will print `3 -> int` ' />
                            <div className='mb-4'><EARLInfo text='(the value and the type). Here are some examples.' /></div>
                            <div className='mb-4'><EARLInfo text='*Note*: The line numbers are provided from the REPL and you do not type these in.' /></div>
                            <EARLInfo text='*Note*: Some things will vanish while using the REPL to keep everything clean looking, but I am unable' />
                            <EARLInfo text='to demonstrate it in text, so it will be more verbose than it actually is i.e., `[ENTER TO EVAL]`.' />

                            <EARLCodeSnippet code={`0: let x = 1;
1: x;
2: [ENTER TO EVAL]
<unit> -> unit
1 -> int
0:`} language='armasm' />
                            <EARLInfo text="The first result `<unit> -> unit` is the result type of the `let` statement and can be ignored as it's" />
                            <div className='mb-4'><EARLInfo text='not important. The second output `1 -> int` is the result (and the type) of `x;`.' /></div>

                            <EARLInfo text='Starting a new session does not remove variables that were created. That means that this is also valid:' />
                            <EARLCodeSnippet code={`0: let x = 1;
1: [ENTER TO EVAL]
<unit> -> unit
0: x;
1: [ENTER TO EVAL]
1 -> int
0:`} language='armasm' />
                            <EARLInfo text='If you just want to do some quick math and use EARL as a calculator, here is another example:' />
                            <EARLCodeSnippet code={`0: -(3 * (0.5 / float(2)) - 1);
1: [ENTER TO EVAL]
0.25 -> float
0:`} language='armasm' />
                            <EARLInfo text='It is important to note that if inside `{ }`, `[ ]`, and `( )`, the `<enter><enter>` will not work. It will' />
                            <EARLInfo text='wait to evaluate the statements until you are outside of the nested brackets. This means that if inside' />
                            <div className='mb-4'><EARLInfo text='of a class, enum, function, or closure, you can hit `<enter>` as many times as you want.' /></div>

                            <EARLInfo text='For example:' />
                            <EARLCodeSnippet code={`0: fn fib(n) {
1:      if n < 2 {
2:              return n;
3:      }
4:
5:      return fib(n-1)+fib(n-2);
6: }
7: class Point [x, y] {
8:      @pub let x = x;
9:
10:     @pub let y = y;
11:
12:     @pub fn sumxy() {
13:         return this.x + this.y;
14:     }
15: }
16: [ENTER TO EVAL]
<unit> -> unit
<unit> -> unit
0: Point(fib(10), fib(15));
1: [ENTER TO EVAL]
<Class Point { y = 610, x = 55 }> -> class
0:`} language='armasm' />
                            <EARLInfo text='Another cool benefit of using the REPL is importing local files. By using the REPL command `:i`' />
                            <EARLInfo text='<file1> <file2> … <fileN>, it will essentially just insert the code in those files in-place. After doing so, ' />
                            <div className='mb-4'><EARLInfo text='you can use and test functions, classes, enums etc. right from within the REPL.' /></div>

                            <div className='mb-4'><EARLInfo text='*Note*: You can also still use the `import` statement as well. See *Imports*.' /></div>
                            <div className='mb-4'><EARLInfo text='*Note*: The REPL uses some colors and if undesired can be disabled by using the `--repl-nocolor` flag.' /></div>
                            <div className='mb-4'><EARLInfo text='*Note*: The REPL saves your history and stores it in `~/.earl_history` and will be cleared every time it hits 1MB in file size.' /></div>
                            <EARLInfo text='*Note*: You can use left and right arrow keys to navigate back and forth in the text and the up and' />
                            <EARLInfo text='down arrows to navigate through history. The stored history in `~/.earl_history` is what initializes' />
                            <div className='mb-4'><EARLInfo text='this, so as soon as you launch the REPL, it gives you the ability to hit the up arrow to get code from other sessions' /></div>
                            <div className='mb-4'><EARLInfo text='*Note*: You can also use Emacs keybindings such as `C-f`, `C-b`, `C-p`, `C-n`, `M-f`, `M-b`, etc.' /></div>
                            <EARLInfo text='Hitting `<tab>` will insert two spaces.' />
                        </div>
                    </div>

                    <div className="py-4" id="section11">
                        <h2 className="text-4xl font-bold p-4">Keywords</h2>
                        <div className='p-4'>
                            <EARLTable columns={keywordsColumns} data={keywordsData} />
                        </div>
                    </div>

                    <div className="py-4" id="section12">
                        <h2 className="text-4xl font-bold p-4">Builtin Identifiers</h2>
                        <EARLInfo text='These are identifiers that are built into the interpreter. The ones that exist at the moment are:' />
                        <div className='p-4'>
                            <EARLInfo text='- `__FILE__` -. Get the current filename as a `str`' />
                            <EARLInfo text='- `__FUNC__` -. Get the current function as a `str`' />
                        </div>
                    </div>

                    <div className="py-4" id="section13">
                        <h2 className="text-4xl font-bold p-4">Binary Operations</h2>
                        <EARLInfo text='In the table below, the datatypes section describes which datatypes are able to use the binary operations.' />
                        <EARLInfo text='This does not mean that if an entry has (`int`, `list`), that you can add an integer to a list.' />
                        <EARLInfo text='Rather, it is describing that the operator works for (`int` <op> `int`) or (`list` <op> `list`). ' />

                        <div className='p-4'>
                            <EARLTable columns={binaryOperationsColumns} data={binaryOperationsData} />
                        </div>
                    </div>

                    <div className="py-4" id="section14">
                        <h2 className="text-4xl font-bold p-4">Variable Declarations</h2>
                        <div className="p-4" id="section15">
                            <h4 className="text-3xl font-bold p-4">Grammar</h4>
                            <div className='p-4'>
                                <EARLInfo text='`let` <id> ?(: <type>) = expr;' />
                                <EARLInfo text='or' />
                                <EARLInfo text='`let` <id0> ?(: <type>), <id1> ?(: <type>), <id2> ?(: <type>), …, <idN> ?(: <type>) = tuple;' />
                                <div className='p-4'><EARLInfo text='where |tuple| = number of IDs' /></div>
                            </div>

                            <h2 className="text-3xl font-bold p-4">Examples</h2>
                            <div className="p-4" id="section16">
                                <EARLCodeSnippet code={`let k = 1;
let x: int = func(k);
let y = [1, 2, 3];
let z: list = (0..10).rev().filter(|x| { return x % 2 == 0; });

let x, y, z = ('a', none, false);
let a: int, b: int, c: real = (1, 2, 3);
let s = (1, 2);
let k, j = s;`} language='armasm' />
                            </div>
                        </div>

                    </div>
                    <div className="py-4" id="section17">
                        <h2 className="text-4xl font-bold p-4">Mutation</h2>
                        <EARLInfo text={"Mutation describes changing a variable's value in memory."} />
                        <div className="p-4" id="section18">
                            <h4 className="text-3xl font-bold p-4">Grammar</h4>
                            <div className='p-4'>
                                <EARLInfo text={'expr = expr;'} />
                            </div>
                        </div>
                        <div className="p-4" id="section19">
                            <h4 className="text-3xl font-bold p-4">Examples</h4>
                            <div className='p-4'>
                                <EARLCodeSnippet code={`k = 1;
k = 3+9;
k = (3+3)*2;
lst[3] = 9+23;
lst[3].nth(1) = 9+23;`} language={'armasm'} />
                            </div>
                        </div>
                        <div className="p-4" id="section20">
                            <h4 className="text-3xl font-bold p-4">Shorthand</h4>
                            <div className='p-4'>
                                <EARLInfo text={'For convenience, there are some shorthand operations that can be performed.'} />
                                <EARLCodeSnippet code={`k += N # substitutes -> k = k + (N);
k -= N # substitutes -> k = k - (N);
k *= N # substitutes -> k = k * (N);
k /= N # substitutes -> k = k / (N);
k %= N # substitutes -> k = k % (N);
k \`|= N # substitutes -> k = k \`| (N);
k \`&= N # substitutes -> k = k \`& (N);
k \`^= N # substitutes -> k = k \`^ (N);`} language={'none'} />
                            </div>
                        </div>
                    </div>
                    <div className="py-4" id="section21">
                        <h2 className="text-4xl font-bold p-4">Conditionals</h2>
                        <EARLInfo text={'Conditionals are `if`, `if-else`, and `if-else-if` statements. If the expression is true, that branch will occur.'} />
                        <div className="p-4" id="section22">
                            <h4 className="text-3xl font-bold p-4">Grammar</h4>
                            <div className='p-4'>
                                <EARLInfo text={'`if` expr { [stmt] }'} />
                                <EARLInfo text={'`else if` expr { [stmt] }'} />
                                <EARLInfo text={'`else` { [stmt] }'} />
                            </div>
                        </div>
                        <div className="p-4" id="section23">
                            <h4 className="text-3xl font-bold p-4">Examles</h4>
                            <div className='p-4'>
                                <EARLCodeSnippet code={`if k == 2 {
    # code
}
else if (k+1 == 9) {
    # code
}
else {
    # code
}`} language={'armasm'} />
                            </div>
                        </div>
                    </div>
                    <div className="py-4" id="section24">
                        <h2 className="text-4xl font-bold p-4">Pattern Matching</h2>
                        <div className="mb-4"><EARLInfo text={'*Note*: Pattern matching is still a work in progress and may be buggy.'} /></div>
                        <div className="mb-4"><EARLInfo text={'*Note*: Pattern matching on lists is not yet fully implemented.'} /></div>
                        <div className="mb-4"><EARLInfo text={'Pattern matching allows you to match on some pattern. This is the case for all primitives `int`, `str`, `list` etc.'} /></div>
                        <EARLInfo text={'A `match` consists of two things:'} />
                        <div className="p-4">
                            <EARLInfo text={'1. The pattern -> this comes right after the `match` keyword'} />
                            <EARLInfo text={'2. Branches -> these are all the different patterns that can happen'} />
                        </div>
                        <EARLInfo text={'Each branch can either specify one pattern or multiple patterns with the `|` (or) operator. The `when`'} />
                        <EARLInfo text={'keyword acts as a guard for the branch. If the pattern matches, only then is the guard evaluated. If'} />
                        <EARLInfo text={'the guard is true, only then will the branch activate.'} />
                        <div className="p-4" id="section25">
                            <h4 className="text-3xl font-bold p-4">Grammar</h4>
                            <div className='p-4'>
                                <EARLInfo text={'TODO'} />
                            </div>
                        </div>
                        <div className="p-4" id="section26">
                            <h4 className="text-3xl font-bold p-4">Examples</h4>
                            <div className='p-4'>
                                <EARLCodeSnippet code={`let x = 4;
let msg = "foo";

match x {
    1 -> { println("x is 1"); }
    2 | 3 -> { println("x is two or three"); }
    [1,2,3] when type(x) == "list" -> { println(x is a list and is [1,2,3]"); }
    4 when msg = "bar" -> { println("x is 4 with msg = bar"); }
    4 when msg = "foo" -> { println("x is 4 with msg = foo"); }
    _ when msg = "hello" -> { println("base case, 4 is something else and msg = hello"); }
    _ -> { println("base case, 4 is something else"); }
}`} language={'armasm'} />
                                <div className="p-4">
                                    <EARLInfo text={'output: '}/ >
                                    <EARLCodeSnippet code={`x is 4 with msg = foo`} language={"bash"}/>
                                </div>
                                <EARLCodeSnippet code={`let x = some(4);

match x {
    none -> {
        print("x is none");
    }
    some(3) -> {
        print("x is some 3");
    }
    some(k) when k % 2 == 1 -> {
        print("x is something and is odd");
    }
    some(k) -> {
        # This branch will execute.
        # \`k\` is the unwrapped value of \`x\`.
        print("x is: ", k);
        print(x.unwrap() == k);
    }
    some(_) -> {
        print("x is something");
    }
    _ -> {
        print("x is something else");
    }
}`} language={'armasm'} />
                                <div className="p-4">
                                    <EARLInfo text={'output: '}/ >
                                    <EARLCodeSnippet code={`x is: 4
true`} language={'bash'} />
                                </div>
                            </div>
                        </div>
                        <div className="py-4" id="section25">
                            <h2 className="text-4xl font-bold p-4">Bash Commands</h2>
                            <EARLInfo text={'You can use BASH commands directly in EARL source code, and there are three different ways to do this:'} />
                            <div className="p-4">
                                <EARLInfo text={'1. by just having the embedded bash'} />
                                <EARLInfo text={'2. by piping the output into a new variable'} />
                                <EARLInfo text={'3. by piping the output into an existing variable/location.'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Documentation;
