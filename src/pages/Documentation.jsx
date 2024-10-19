// import katex from "katex";
// import "katex/dist/katex.min.css";
import Latex from "../components/Latex";
import EARLNavbar from "../components/EARLNavbar";
import EARLInfo from "../components/EARLInfo";
import EARLInfoIndent from "../components/EARLInfoIndent";
import EARLInfoSpace from "../components/EARLInfoSpace";
import EARLCodeSnippet from "../components/EARLCodeSnippet";
import EARLTable from "../components/EARLTable";
import { yourFirstProgramSrc, yourFirstProgramOutput } from "../code-snippets/DocumentationYourFirstProgram";
import { typingExampleSrc } from "../code-snippets/TypingExample";
import { replProgrammingExample1, replProgrammingExample2, replProgrammingExample3, replProgrammingExample4 } from "../code-snippets/ReplProgramming";
import { variableDeclarationsExample1 } from "../code-snippets/VariableDeclarations";
import { mutationExample1 } from "../code-snippets/Mutation";
import { conditionalsExample1 } from "../code-snippets/Conditionals";
import { patternMatchingExample1Src, patternMatchingExample1Output, patternMatchingExample2Src, patternMatchingExample2Output } from "../code-snippets/PatternMatching";
import { bashCommandsExample1Src } from "../code-snippets/BashCommands";
import { whileLoopsExample1Src } from "../code-snippets/WhileLoops";
import { forLoopsExample1Src } from "../code-snippets/ForLoops";
import { foreachLoopsExample1Src } from "../code-snippets/ForeachLoops";

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

const compilingMakeTableData = [
    { opt: "<none>", desc: "Builds the project" },
    { opt: "clean", desc: "Cleans the project" },
    { opt: "test", desc: "Runs tests (StdLib must be installed)" },
    { opt: "docs", desc: "generate the c++ source code documentation (Doxygen is required)" },
];

const compilingMakeTableColumns = ["Option", "Description"];

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

const EARL_language_reference = [
    {
        title: "Notes",
        content: (
            <>
                <EARLInfo text='For *Grammar Sections* of this document:' />
                <EARLInfoIndent>
                    <EARLInfo text='`This text format represents keywords`' />
                    <EARLInfo text='This text format represents a type of grammar' />
                    <EARLInfo text='"text" represents a string' />
                    <EARLInfo text='<text> represents an identifier' />
                    <EARLInfo text='| represents OR' />
                    <EARLInfo text='[text] means list' />
                    <EARLInfo text='*(text) means either 0 or more of' />
                    <EARLInfo text='?(text) means either 0 or 1 of.' />
                </EARLInfoIndent>
            </>
        ),
    },
    {
        title: "Your First Program, Hello World!",
        content: (
            <>
                <EARLInfo text='To jump right into testing out EARL, do the following to implement a Hello World! program.' />
                <EARLInfo text='Create a new file called `hello.earl` and put the follow code in it:' />
                <EARLCodeSnippet code={yourFirstProgramSrc} language={'armasm'} />
                <EARLInfo text='Then run:' />
                <EARLCodeSnippet code={'earl ./hello.earl'} language={'bash'} />
                <EARLInfo text='Output:' />
                <EARLCodeSnippet code={yourFirstProgramOutput} language={'bash'} />
                <EARLInfo text='For more information on `module Main`, see section *Modules*.' />
            </>
        ),
    },
    {
        title: "Typing",
        content: (
            <>
                <EARLInfo text='EARL is "gradually typed". This means that explicit types are not required, rather the type of a' />
                <EARLInfo text='variable is the type of the right hand side expression. Values are also not dynamic, so once a variable' />
                <EARLInfoSpace>
                    <EARLInfo text='has a type, it will always have that type. If dynamic types are desired, see the `option` datatype in *Datatypes*.' />
                </EARLInfoSpace>
                <EARLInfo text='For example:' />
                <EARLCodeSnippet code={typingExampleSrc} language={'armasm'} />
                <EARLInfo text='If explicit types are desired, here are the following types that can be used:' />
                <EARLInfoIndent>
                    <EARLInfo text='int' />
                    <EARLInfo text='float' />
                    <EARLInfo text='real -> int or float' />
                    <EARLInfo text='char' />
                    <EARLInfo text='str' />
                    <EARLInfo text='bool' />
                    <EARLInfo text='option' />
                    <EARLInfo text='file' />
                    <EARLInfo text='tuple' />
                    <EARLInfo text='list' />
                    <EARLInfo text='closure' />
                    <EARLInfo text='slice' />
                    <EARLInfo text='dictionary' />
                    <EARLInfo text='type' />
                    <EARLInfo text='unit' />
                    <EARLInfo text='any' />
                </EARLInfoIndent>
            </>
        ),
    },
    {
        title: "REPL",
        content: (
            <>
                <EARLInfo text='The REPL (Read Evaluate Print Loop) is an interactive text editing environment' />
                <EARLInfo text='where you can instantly evaluate code.' />
            </>
        ),
        subsections: [
            {
                title: "REPL Commands",
                content: (
                    <>
                        <EARLInfo text='If you were to just start earl without any files, it will launch the built-in REPL. Here you can' />
                        <EARLInfoSpace>
                            <EARLInfo text='evaluate and run code that is provided.' />
                        </EARLInfoSpace>
                        <EARLInfo text='When in the REPL, typing `:<cmd>` will run a REPL command. It will not evaluate any code, but you' />
                        <EARLInfo text='can use it to show the current session, edit lines that have already been typed, remove lines, and' />
                        <EARLInfo text='more. To view more information, launch the REPL and type `:help`.' />
                    </>
                ),
            },
            {
                title: "REPL Programming",
                content: (
                    <>
                        <EARLInfo text='If a line that is typed does not start with `:`, it will be interpreted as code. Upon hitting `<enter>`, it' />
                        <EARLInfo text='will not immediately evaluate the code. It only does code evaluation when an empty line is processed.' />
                        <EARLInfo text='Because of this, you can code in *sessions*. Starting a new session does not mean that the current' />
                        <EARLInfo text='environment is lost, but it essentially focuses on a new code block. As long as `<enter>` has not been' />
                        <EARLInfo text='hit on an empty line, you can continue to write code and have it wait to be evaluated. One benefit to' />
                        <EARLInfo text='this is that if a mistake has been made, you can edit it or remove that line entirely by using the REPL' />
                        <EARLInfo text='command `:e` or `:rm`. Keep in mind that as soon as `<enter>` is performed on an empty line, you' />
                        <EARLInfoSpace>
                            <EARLInfo text='will *not* be able to go back and change it as it starts a new session. ' />
                        </EARLInfoSpace>
                        <EARLInfo text='You will know when a new session starts because the line numbers on the left will reset to 0 and the' />
                        <EARLInfoSpace>
                            <EARLInfo text='last evaluated expression will have its result printed to `stdout`.' />
                        </EARLInfoSpace>
                        <EARLInfo text='Using the REPL allows for one major benefit, which is immediate evaluation of any expression. This' />
                        <EARLInfo text='means that if `1 + 2`; is typed into the REPL followed by `<enter><enter>`, it will print `3 -> int`' />
                        <EARLInfoSpace>
                            <EARLInfo text='(the value and the type). Here are some examples.' />
                        </EARLInfoSpace>
                        <EARLInfoSpace>
                            <EARLInfo text='*Note*: The line numbers are provided from the REPL and you do not type these in.' />
                        </EARLInfoSpace>
                        <EARLInfo text='*Note*: Some things will vanish while using the REPL to keep everything clean looking, but I am unable' />
                        <EARLInfo text='to demonstrate it in text, so it will be more verbose than it actually is i.e., `[ENTER TO EVAL]`.' />
                        <EARLCodeSnippet code={replProgrammingExample1} language={'armasm'} />
                        <EARLInfo text="The first result `<unit> -> unit` is the result type of the `let` statement and can be ignored as it's" />
                        <EARLInfoSpace>
                            <EARLInfo text='not important. The second output `1 -> int` is the result of `x;`.' />
                        </EARLInfoSpace>
                        <EARLInfo text='Starting a new session does not remove variables that were created. That means that this is also valid:' />
                        <EARLCodeSnippet code={replProgrammingExample2} language={'armasm'} />
                        <EARLInfo text='If you just want to do some quick math and use EARL as a calculator, here is another example:' />
                        <EARLCodeSnippet code={replProgrammingExample3} language={'armasm'} />
                        <EARLInfo text='It is important to note that if inside `{ }`, `[ ]`, and `( )`, the `<enter><enter>` will not work. It will' />
                        <EARLInfo text='wait to evaluate the statements until you are outside of the nested brackets. This means that if inside' />
                        <EARLInfoSpace>
                            <EARLInfo text='of a class, enum, function, or closure, you can hit <enter> as many times as you want.' />
                        </EARLInfoSpace>
                        <EARLInfo text='For example:' />
                        <EARLCodeSnippet code={replProgrammingExample4} language={'armasm'} />
                        <EARLInfo text='Another cool benefit of using the REPL is importing local files. By using the REPL command `:i`' />
                        <EARLInfo text='<file1> <file2> … <fileN>, it will essentially just insert the code in those files in-place. After doing so,' />
                        <EARLInfoSpace>
                            <EARLInfo text='you can use and test functions, classes, enums etc. right from within the REPL.' />
                        </EARLInfoSpace>
                        <EARLInfoSpace><EARLInfo text='*Note*: You can also still use the import statement as well. See section *Imports*.' /></EARLInfoSpace>
                        <EARLInfoSpace><EARLInfo text='*Note*: The REPL uses some colors and if undesired can be disabled by using the `--repl-nocolor` flag.' /></EARLInfoSpace>
                        <EARLInfoSpace>
                            <EARLInfo text='*Note*: The REPL saves your history and stores it in `~/.earl_history` and will be cleared every time it' />
                            <EARLInfo text='hits 1MB in file size.' />
                        </EARLInfoSpace>
                        <EARLInfoSpace>
                            <EARLInfo text='*Note*: You can use left and right arrow keys to navigate back and forth in the text and the up and' />
                            <EARLInfo text='down arrows to navigate through history. The stored history in `~/.earl_history` is what initializes' />
                            <EARLInfo text='this, so as soon as you launch the REPL, it gives you the ability to hit the up arrow to get code from other sessions.' />
                        </EARLInfoSpace>
                        <EARLInfoSpace><EARLInfo text='*Note*: You can also use Emacs keybindings such as `C-f`, `C-b`, `C-p`, `C-n`, `M-f`, `M-b`, etc.' /></EARLInfoSpace>
                        <EARLInfoSpace><EARLInfo text='*Note*: Hitting `<tab>` will insert two spaces.' /></EARLInfoSpace>
                    </>
                ),
            },
        ],
    },
    {
        title: "Keywords",
        content: (
            <>
                <EARLInfo text='EARL has quite a few reserved keywords, and these must not be used as identifier names.' />
                <EARLInfoIndent>
                <EARLTable columns={keywordsColumns} data={keywordsData} />
                </EARLInfoIndent>
            </>
        ),
    },
    {
        title: "Builtin Identifiers",
        content: (
            <>
                <EARLInfo text='These are identifiers that are built into the interpreter. The ones that exist at the moment are:' />
                <EARLInfoIndent>
                    <EARLInfo text='`__FILE__` -> Get the current filename as a `str`' />
                    <EARLInfo text='`__FUNC__` -> Get the current function name as a `str`' />
                </EARLInfoIndent>
            </>
        ),
    },
    {
        title: "Binary Operations",
        content: (
            <>
                <EARLInfo text='In the table below, the datatypes section describes which datatypes are able to use the binary' />
                <EARLInfo text='operations. This does not mean that if an entry has (`int`, `list`), that you can add an integer to a' />
                <EARLInfo text='list. Rather, it is describing that the operator works for (`int <op> int`) or (`list <op> list`). ' />
                <EARLInfoIndent>
                    <EARLTable columns={binaryOperationsColumns} data={binaryOperationsData} />
                </EARLInfoIndent>
            </>
        ),
    },
    {
        title: "Variable Declarations",
        content: (
            <>
                <EARLInfo text='Variable declarations are how you create new variables.' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='`let` <id> ?(: <type>) = expr; ' />
                        <EARLInfo text='or' />
                        <EARLInfo text='`let` <id0> ?(: <type>), <id1> ?(: <type>), <id2> ?(: <type>), …, <idN> ?(: <type>) = tuple ' />
                        <EARLInfoIndent>
                            <EARLInfo text='where' />
                            <EARLInfo text='|tuple| = number of IDs.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={variableDeclarationsExample1} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "Mutation",
        content: (
            <>
                <EARLInfo text='Mutation describes changing a variables value in memory.' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='expr = expr;' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={mutationExample1} language={'armasm'} />
                    </>
                ),
            },
            {
                title: "Shorthand",
                content: (
                    <>
                        <EARLInfo text='For convenience, there are some shorthand operations that can be performed.' />
                        <EARLInfoIndent>
                            <EARLInfo text='k += N # substitutes -> k = k + (N);' />
                            <EARLInfo text='k -= N # substitutes -> k = k - (N);' />
                            <EARLInfo text='k *= N # substitutes -> k = k * (N);' />
                            <EARLInfo text='k /= N # substitutes -> k = k / (N);' />
                            <EARLInfo text='k %= N # substitutes -> k = k % (N);' />
                            <EARLInfo text='k `|= N # substitutes -> k = k `| (N);' />
                            <EARLInfo text='k `&= N # substitutes -> k = k `& (N);' />
                            <EARLInfo text='k `^= N # substitutes -> k = k `^ (N);' />
                        </EARLInfoIndent>
                        <EARLInfo text='TODO: Fix shorthand' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Conditionals",
        content: (
            <>
                <EARLInfo text='Conditionals are `if`, `if-else`, and `if-else-if` statements. If the expression is true, that branch will occur.' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='`if` expr { [stmt] } ' />
                        <EARLInfo text='`else if` expr { [stmt] } ' />
                        <EARLInfo text='`else` { [stmt] } ' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <EARLCodeSnippet code={conditionalsExample1} language={"armasm"} />
                ),
            },
        ],
    },
    {
        title: "Pattern Matching",
        content: (
            <>
                <EARLInfoSpace><EARLInfo text='*Note*: Pattern matching is still a work in progress and may be buggy.' /></EARLInfoSpace>
                <EARLInfoSpace><EARLInfo text='*Note*: Pattern matching on lists is not yet fully implemented.' /></EARLInfoSpace>
                <EARLInfoSpace><EARLInfo text='Pattern matching allows you to match on some pattern. This is the case for all primitives `int`, `str`, `option` etc.' /></EARLInfoSpace>
                <EARLInfo text='A `match` consists of a two things:' />
                <EARLInfoIndent>
                    <EARLInfo text='1. the pattern -> this comes right after the match keyword,' />
                    <EARLInfo text='2. branches -> these are all the different patterns can be.' />
                </EARLInfoIndent>
                <EARLInfo text='Each branch can either specify one pattern or multiple patterns with the `|` (or) operator. The `when`' />
                <EARLInfo text='keyword acts as a guard for the branch. If the pattern matches, only then is the guard evaluated. If' />
                <EARLInfoSpace><EARLInfo text='the guard is true, only then will the branch activate.' /></EARLInfoSpace>
                <EARLInfo text='And finally, the base case consists of the pattern `_`. If none of the other branches above this one' />
                <EARLInfo text='happens, this one is guaranteed to happen (unless there is a guard).'/>
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <EARLInfo text='TODO' />
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLInfo text='TODO: fix syntax highlighting' />
                        <EARLCodeSnippet code={patternMatchingExample1Src} language={'armasm'} />
                        <EARLInfo text={'Output:'} />
                        <EARLInfoIndent><EARLInfo text={patternMatchingExample1Output} /></EARLInfoIndent>
                        <EARLCodeSnippet code={patternMatchingExample2Src} language={'armasm'} />
                        <EARLInfo text={'Output:'} />
                        <EARLInfoIndent><EARLInfo text={patternMatchingExample2Output} /></EARLInfoIndent>
                        <EARLInfo text={'*Note*: For more information on `some` and `none`, see `option` in *Datatypes*. For `unwrap()`, see `unwrap` in *Member Intrinsics*.'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "Bash Literals",
        content: (
            <>
                <EARLInfo text='This is one of the more important parts of this document. This is how you can' />
                <EARLInfo text='use `BASH` commands directly in EARL source code. There are three different ways to do this:' />
                <EARLInfoIndent>
                    <EARLInfo text='1. by just having the embedded `BASH`,' />
                    <EARLInfo text='2. by piping the output into a new variable,' />
                    <EARLInfo text='3. by piping the output into an existing variable/location.' />
                </EARLInfoIndent>
                <EARLInfo text='*Note*: For convenience, if a bash command returns a string of size 1 that is a space, newline, tab etc,' />
                <EARLInfo text='EARL will cut those out. This can be disabled using the `--no-sanitize-pipes` flag. ' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='`$`expr`;`' />
                        <EARLInfo text='or' />
                        <EARLInfo text='*(<attr>) `$`<expr> `|>` <id>`;`' />
                        <EARLInfo text='or' />
                        <EARLInfo text='`$`<expr> `|>` <expr>`;`' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={bashCommandsExample1Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "While Loops",
        content: (
            <>
                <EARLInfo text='`while` loops will continue to loop while the expression is `true`' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='`while` expr { [stmt] }' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={whileLoopsExample1Src} language={'armasm'} />
                        <EARLInfo text='Output:' />
                        <EARLInfoIndent><EARLInfo text='012' /></EARLInfoIndent>
                    </>
                ),
            },
        ],
    },
    {
        title: "For Loops",
        content: (
            <>
                <EARLInfo text='For loops will enumerate over a range of numbers, with the enumerator being assigned the current' />
                <EARLInfo text='number. If the enumerator is less than the initial destination value, it will be incremented. If it is less' />
                <EARLInfoSpace><EARLInfo text='than the initial destination value, it will decrement.' /></EARLInfoSpace>
                <EARLInfo text='*Note*: There is a special extra step that is taken if enumerating down.' />
                <EARLInfoIndent>
                    <EARLInfoSpace><Latex>{`\\text{Let } i \\text{ be the enumerator} \\\\ \\text{and } e \\text{ be the end where } i \\ge e.`}</Latex></EARLInfoSpace>
                    <EARLInfoSpace><EARLInfo text='The loop will stop when' /></EARLInfoSpace>
                    <EARLInfoSpace><Latex>{`i < e.`}</Latex></EARLInfoSpace>
                    <EARLInfo text='This makes it so that if enumerating from `10 to 0`, it will stop at −1. This is not the case if we are enumerating upwards.' />
                </EARLInfoIndent>
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='`for` <id> in expr to expr { [stmt] }' />
                    </>
                ),
            },
            {
                title: "Examles",
                content: (
                    <>
                        <EARLCodeSnippet code={forLoopsExample1Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "Foreach Loops",
        content: (
            <>
                <EARLInfo text='Foreach loops take a list, string, tuple, or a dictionary and will iterate over the elements. The most' />
                <EARLInfo text='common way to use these loops is with a `range` (see *Ranges*). Also, the iterator (usually the variable' />
                <EARLInfo text='labeled as `i`), can be set as a reference (see Attributes) to the expression. This means that `i` will take' />
                <EARLInfoSpace><EARLInfo text='the reference of each iterated value in the list and can modify it directly (see ref example below).' /></EARLInfoSpace>
                <EARLInfo text='You can also destructure the value being enumerated over by providing more ids. This is also true for' />
                <EARLInfo text='dictionaries (see dictionary example below).' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='`foreach` /*(`@`[`ref`|`const`]) <id> /*(`,` <id>) `in` expr { [stmt] }' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={foreachLoopsExample1Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
];

const sections = [
    {
        title: "Important Notes",
        content: (
            <>
                <EARLInfo text="- *This language is still in the infant stage and it is NOT recommended to use in any real or professional capacity.*" />
                <EARLInfo text="- As of now, the only supported platform is Linux, and no guarantees for MacOS." />
                <EARLInfo text="- The project is regularly being built with `g++ (Debian 12.2.0-14) 12.2.0`, not `clang` or any other `c++` compiler." />
            </>
        ),
    },
    {
        title: "Resources",
        content: (
            <>
                <EARLInfo text="The EARL project consists of three Github repositories." />
                <EARLInfo text="Only the first repository is required, the others are optional." />
            </>
        ),
        subsections: [
            {
                title: "Main Project",
                content: (
                    <>
                        <EARLInfo text='Github: https://www.github.com/malloc-nbytes/EARL.git/' />
                    </>
                ),
            },
            {
                title: "Syntax Highlighting (VSCode, Emacs, Vim, NeoVim)",
                content: (
                    <>
                        <EARLInfo text='Github: https://www.github.com/malloc-nbytes/EARL-language-support.git/' />
                    </>
                ),
            },
            {
                title: "earlmgr (package manager) (WIP USE AT YOUR OWN RISK!)",
                content: (
                    <>
                        <EARLInfo text='Github: https://www.github.com/malloc-nbytes/earlmgr.git/' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Compiling",
        content: (
            <>
                <EARLInfo text="We have moved from `autotools` to `cmake`, so the new required tools are:" />
                <EARLInfoIndent>
                    <EARLInfo text="`c++17`" />
                    <EARLInfo text="`cmake` (at least v3.25.1)" />
                    <EARLInfo text="`doxygen` (optional) (for `c++` source code documentation [good for doing development on the interpreter])" />
                </EARLInfoIndent>
            </>
        ),
        subsections: [
            {
                title: "CMake Setup",
                content: (
                    <>
                        <EARLInfo text="Use the following command to set up CMake." />
                        <EARLCodeSnippet code={compilingEARLBash} language="bash" />
                    </>
                ),
                subsections: [
                    {
                        title: "Using a Custom Prefix",
                        content: (
                            <>
                                <EARLInfo text="You can specify a custom installation location using `-DINSTALL_PREFIX=<prefix>`." />
                                <EARLInfo text="*However, there must be an `include` and `bin` directory inside of the prefix that is supplied. *" />
                            </>
                        ),
                    },
                ],
            },
        ],
        extraContent: (
            <>
                <EARLInfo text='This will create the Makefile. Use `make <opt>` where `<opt>` is one of:' />
                <EARLInfoIndent>
                    <EARLTable columns={compilingMakeTableColumns} data={compilingMakeTableData} />
                </EARLInfoIndent>
            </>
        ),
    },
    {
        title: "Installing",
        content: (
            <>
                <EARLInfo text='Once the configuration step in *Compiling* is done, use the following to install EARL as well as the `StdLib`.' />
                <EARLCodeSnippet code={installingEARLBash} language={'bash'} />
                <EARLInfo text='To uninstall, simply do `sudo make uninstall`.' />
            </>
        ),
    },
    {
        title: "EARL Language Reference",
        content: (
            <>
                <EARLInfo text='This is the manual for how to use EARL.' />
            </>
        ),
        subsections: EARL_language_reference,
    },
];

// const Subsection = ({ title, content, subsections, depth = 0 }) => {
//     const titleClass = `text-${Math.max(2 - depth, 1)}xl font-semibold p-2`;

//     return (
//         <div className="ml-8 py-2">
//             <h3 className={titleClass}>{title}</h3>
//             <div>{content}</div>
//             {subsections && subsections.length > 0 && (
//                 <div className="pl-4">
//                     {subsections.map((subsection, index) => (
//                         <Subsection key={index} {...subsection} depth={depth + 1} />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

function EARLSideBar({ sections }) {
    return (
        <div className="fixed top-0 left-0 w-64 h-full bg-slate-950 text-white p-4 overflow-auto">
            <h2 className="text-2xl font-semibold mb-6">Documentation</h2>
            <ul className="space-y-4">
                {sections.map((section, sectionIndex) => {
                    return (
                        <li key={sectionIndex}>
                            <a href={"#section" + sectionIndex} className="text-blue-400 hover:text-blue-600">
                                {section.title}
                            </a>
                            {section.subsections && section.subsections.length > 0 && (
                                <ul className="pl-4 space-y-2">
                                    {section.subsections.map((subsection, subIndex) => (
                                        <li key={subIndex}>
                                            <a href={"#section" + sectionIndex + "-subsection" + subIndex} className="text-blue-300 hover:text-blue-500">
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
        ? "text-4xl font-bold p-4" // Main sections (depth 0)
        : depth === 1
        ? "text-3xl font-bold p-4" // First level subsections
        : depth === 2
        ? "text-2xl font-bold p-4" // Second level subsections
        : "text-xl font-bold p-4"; // Further nested sections

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
                            depth={depth + 1} // Increment depth for nested subsections
                        />
                    ))}
                </div>
            )}
            {/* Render extra content after subsections */}
            {extraContent && <div className="mt-4">{extraContent}</div>}
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
            <ContentWrapper sections={sections} />
        </div>
    );
}

export default Documentation;
