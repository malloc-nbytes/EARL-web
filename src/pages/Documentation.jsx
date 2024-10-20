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
import { foreverLoopsExample1Src } from "../code-snippets/ForeverLoops";
import { functionDefinitionsExample1Src } from "../code-snippets/FunctionDefinitions";
import { importsExample1Src } from "../code-snippets/Imports";
import { modulesExample1Src, modulesExample2Src } from "../code-snippets/Modules";
import { attributesExample1Src } from "../code-snippets/Attributes";
import { enumerationsExample1Src, enumerationsExample2Src } from "../code-snippets/Enumerations";
import { classesExample1Src, classesExample2Src, classesExample3Src } from "../code-snippets/Classes";
import { doccumentationCommentsExample1Src } from "../code-snippets/DoccumentationComments";
import { fstrExample1Src } from "../code-snippets/Fstr";
import { listExample1Src } from "../code-snippets/List";
import { rangeExample1Src } from "../code-snippets/Range";
import { sliceExample1Src } from "../code-snippets/Slice";
import { tupleExample1Src } from "../code-snippets/Tuple";
import { optionExample1Src, optionExample2Src } from "../code-snippets/Option";
import { closureCXXExample1Src, closureExample1Src, closureExample2Src } from "../code-snippets/Closure";
import { typeKWExample1Src } from "../code-snippets/TypeKW";
import { dictionaryExample1Src } from "../code-snippets/Dictionary";
import { unitExample1Src } from "../code-snippets/Unit";
import {
    printDef,
    printlnDef,
    helpDef,
    sinDef,
    cosDef,
    setFlagDef,
    unsetFlagDef,
    inputDef,
    intDef,
    floatDef,
    strDef,
    boolDef,
    tupleDef,
    listDef,
    dictDef,
    assertDef,
    lenDef,
    someDef,
    typeDef,
    typeofDef,
    argvDef,
    openDef,
    unimplementedDef,
    datetimeDef,
    sleepDef,
    envDef,
    initSeedDef,
    randomDef,
} from "../code-snippets/Intrinsics";
import {
    listAppend,
    listPop,
    listRev,
    listFilter,
    listForeach,
    listMap,
    listFold,
    listContains,
} from "../code-snippets/ListMemberIntrinsics";
import {
    strAppend,
    strPop,
    strRev,
    strFilter,
    strForeach,
    strSplit,
    strContains,
} from "../code-snippets/StrMemberIntrinsics";
import {
    dictInsert,
    dictHasKey,
    dictHasValue,
} from "../code-snippets/DictionaryMemberIntrinsics";
import {
    tupleRev,
    tupleFilter,
    tupleForeach,
    tupleContains,
} from "../code-snippets/TupleMemberIntrinsics";
import { charAscii } from "../code-snippets/CharMemberIntrinsics";
import {
    optionIsNone,
    optionIsSome,
    optionUnwrap,
} from "../code-snippets/OptionMemberIntrinsics";
import {
    fileClose,
    fileRead,
    fileDump,
    fileWrite,
    fileWriteLines,
} from "../code-snippets/FileMemberIntrinsics";
import {
    timeRaw,
    timeReadable,
    timeYears,
    timeMonths,
    timeDays,
    timeHours,
    timeMinutes,
    timeSeconds,
} from "../code-snippets/TimeMemberIntrinsics";
import { stdLibModules } from "../code-snippets/StdLibModules";

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

const attributesTableData = [
    { name: "@pub", vars: "YES", funcs: "YES", classes: "YES", enums: "YES", desc: "Makes the identifier available to other files" },
    { name: "@world", vars: "YES", funcs: "YES", classes: "UNIMPLEMENTED", enums: "UNIMPLEMENTED", desc: "The identifier closes in the world scope" },
    { name: "@ref", vars: "YES", funcs: "NO*", classes: "NO", enums: "NO", desc: "Declares the variable to be a reference (see the note below)" },
    { name: "@const", vars: "YES", funcs: "NO", classes: "NO", enums: "NO", desc: "Declares the variable as constant" },
    { name: "@experimental", vars: "YES", funcs: "YES", classes: "YES", enums: "YES", desc: "Shows an `experimental` warning once upon use" },
];

const attributesTableColumns = ["Name", "Variables", "Functions", "Classes", "Enumerations", "Description"];

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

const grammarAndFeatures = [
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
    {
        title: "Forever Loops",
        content: (
            <>
                <EARLInfo text='The point of Forever loops is in their name, they will loop forever until manually breaking out of them.' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='`loop` { [stmt] }' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: [
                    <>
                        <EARLCodeSnippet code={foreverLoopsExample1Src} language={'armasm'} />
                    </>
                ],
            },
        ],
    },
    {
        title: "Function Definitions",
        content: (
            <>
                <EARLInfo text='This is how to create a function. The `@world`, `@pub` and `@ref` are attributes.' />
                <EARLInfo text='See *Attributes* for a description on them.' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='TODO: fix grammar' />
                        <EARLInfo text='*(<attr>)' />
                        <EARLInfo text='`fn` <id>(*(`@ref`|`@const`) <id> ?(`:` <type>)) ?(`:` <type>) { [stmt] }' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={functionDefinitionsExample1Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "Imports",
        content: (
            <>
                <EARLInfo text='EARL looks for the files relative to the directory that it was invoked in. During runtime, if an `import`' />
                <EARLInfo text='statement is hit, it will immediately interpret that file. If there is no processing in the `@world` scope,' />
                <EARLInfoSpace>
                    <EARLInfo text='only the variables, function definitions, enums, and classes are gathered.' />
                </EARLInfoSpace>
                <EARLInfo text='If importing something from the stdlib, you want to start the import string with "std/" then the file' />
                <EARLInfo text='name. It will look at the prefix that the project was compiled with that CMake set up' />
                <EARLInfo text='(`-DINSTALL_PREFIX`) and append "EARL/" to it. If you did not do this, or this section does not make' />
                <EARLInfo text='any sense, then the stdlib is most likely installed in `/usr/local`.' />
                <EARLInfoSpace>
                    <EARLInfo text='tl;dr make sure to put "std/" before the filename if using the stdlib.' />
                </EARLInfoSpace>
                <EARLInfo text='When importing, a depth can be specified. Use `full` if you want all public elements from the file' />
                <EARLInfo text='(enums, functions, variables, classes, etc.), or `almost` if you only desire public variables and enums.' />
                <EARLInfoSpace>
                    <EARLInfo text='If none is provided, full will be used by default.' />
                </EARLInfoSpace>
                <EARLInfo text='If the module name of the file that is being imported is not known, or it is undesired, you can rename' />
                <EARLInfo text='it using the `as` keyword followed by some identifier.' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='`import` <expr>`;` ?(`full`|`almost`) ?(`as` <id>)' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={importsExample1Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "Modules",
        content: (
            <>
                <EARLInfo text='Modules allow other files to access resources to the file that has the module declared in it. If a file' />
                <EARLInfo text='does not have it, the entire file is private. While modules do allow other files to access resources, only' />
                <EARLInfoSpace>
                    <EARLInfo text='resources that have the `@pub` attribute (see *Attributes*). ' />
                </EARLInfoSpace>
                <EARLInfoSpace>
                    <EARLInfo text='To access some identifer from a different module, you use `::` syntax (similar to `c++` namespaces). ' />
                </EARLInfoSpace>
                <EARLInfo text='*It is expected to have the module declaration at the top of the file. If you do not follow this rule, undefined behavior may occur*.' />
                <EARLInfo text=' If you forget, the interpreter will throw a warning (with the exception of using the REPL as the REPL module is not required).' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='`module` <id>' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLInfo text='Output of `tree`' />
                        <EARLInfoIndent>
                            <EARLInfo text='.' />
                            <EARLInfo text='├── main.earl' />
                            <EARLInfo text='└── my-math.earl' />
                            <EARLInfo text='1 directory, 2 files' />
                        </EARLInfoIndent>
                        <EARLInfo text='File: `my-math.earl`' />
                        <EARLCodeSnippet code={modulesExample1Src} language={'armasm'} />
                        <EARLInfo text='File: `main.earl`' />
                        <EARLCodeSnippet code={modulesExample2Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "Attributes",
        content: (
            <>
                <EARLInfo text='Attributes embeds meta information into identifiers. You can have none, one, or multiple.' />
                <EARLInfoIndent>
                    <EARLTable columns={attributesTableColumns} data={attributesTableData} />
                </EARLInfoIndent>
                <EARLInfo text='*Note*: `@ref` can be used in a function parameter and that function will take a reference to the value passed to it.' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='*(`@`(`pub` | `world` | `ref` | `const` | `experimental`))' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={attributesExample1Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "Enumerations",
        content: (
            <>
                <EARLInfo text="Enumerations (enums) act as it's own datatype, but they are just integers. They compose of comma" />
                <EARLInfo text='separated identifiers and each identifier can optionally have an assignment to it. By default, if no' />
                <EARLInfo text='assignments are made, it starts at 0 and increments by 1 for each enum item. Once an assignment is' />
                <EARLInfoSpace>
                    <EARLInfo text='found, it will start incrementing from *that number*.' />
                </EARLInfoSpace>
                <EARLInfo text='To access an enum element, use the dot `.` notation i.e, `MyEnum.Element1` and can be accessed from' />
                <EARLInfo text='other modules using the double colon `::` notation (as long as it has the `@pub` attribute). ' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='TODO' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={enumerationsExample1Src} language={'armasm'} />
                        <EARLCodeSnippet code={enumerationsExample2Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "Classes",
        content: (
            <>
                <EARLInfoSpace>
                    <EARLInfo text='While classes are available, I am not planning on implementing inheritance.' />
                </EARLInfoSpace>
                <EARLInfo text='1. All member variable assignments will happen. If the class has bracket notation `[ ... ]`, it will use these.' />
                <EARLInfo text='2. If there is a function called `constructor` in the class, that function will immediately happen.' />
                <EARLInfo text='3. For visibility:' />
                <EARLInfoIndent>
                    <EARLInfoSpace>
                        <EARLInfo text='- All member variables that have the `@pub` attribute will be visible outside of the class scope,' />
                        <EARLInfo text='including other modules (if the class is marked as `@pub`).' />
                    </EARLInfoSpace>
                    <EARLInfoSpace>
                        <EARLInfo text='- All methods that have the `@pub` attribute will be visible outside of the class scope, including' />
                        <EARLInfo text='other modules (if the class is marked as `@pub`).' />
                    </EARLInfoSpace>
                    <EARLInfo text='- Everything that does not have `@pub` will only be visibile to the class scope.' />
                </EARLInfoIndent>
                <EARLInfoSpace>
                    <EARLInfo text='4. The use of the `this` keyword is optional.' />
                </EARLInfoSpace>
                <EARLInfo text='To use *public* member variables or *public* methods from outside of the class scope, you use the dot `.`' />
                <EARLInfo text='notation, i.e., `MyClass.member_var` or `MyClass.my_method()`. ' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='*(<attr>)' />
                        <EARLInfo text='`class` <id> `[`*(<id> ?(`:` <type>))`]` `{`' />
                        <EARLInfo text='*(<let stmt>)' />
                        <EARLInfo text='?(`fn` `constructor()` { ... })'  />
                        <EARLInfo text='*(<function definitions>) '  />
                        <EARLInfo text='`}`'  />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={classesExample1Src} language={'armasm'} />
                        <EARLCodeSnippet code={classesExample2Src} language={'armasm'} />
                        <EARLCodeSnippet code={classesExample3Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "Documentation Comments",
        content: (
            <>
                <EARLInfo text='Documentation Comments allow you to embed help information into variables, functions, enums,' />
                <EARLInfoSpace>
                    <EARLInfo text='and classes. The information can be retrieved by calling the intrinsic function `help()` on the appropriate identifier.' />
                </EARLInfoSpace>
                <EARLInfo text='*Note*: When using these, a variable, function, enum, or class *must* be immediately after it. ' />
            </>
        ),
        subsections: [
            {
                title: "Grammar",
                content: (
                    <>
                        <EARLInfo text='*(#-- <text>) <Variable> | <Function> | <Enum> | <Class>' />
                    </>
                ),
            },
            {
                title: "Examples",
                content: (
                    <>
                        <EARLCodeSnippet code={doccumentationCommentsExample1Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
];

const datatypesSections = [
    {
        title: "int",
        content: (
            <>
                <EARLInfoSpace>
                    <EARLInfo text='Your basic 32-bit integer.' />
                </EARLInfoSpace>
                <EARLInfo text='*Note*: They *do* over/under-flow.' />
            </>
        ),
    },
    {
        title: "float",
        content: (
            <>
                <EARLInfoSpace>
                    <EARLInfo text='Your basic 64-bit floating point number.' />
                </EARLInfoSpace>
                <EARLInfo text='*Note*: They *do* over/under-flow.' />
            </>
        ),
    },
    {
        title: "bool",
        content: (
            <>
                <EARLInfo text='The boolean datatype. Can either be `true` or `false`.' />
            </>
        ),
    },
    {
        title: "char",
        content: (
            <>
                <EARLInfo text="A single character. They are surrounded by single quotes `'`." />
            </>
        ),
    },
    {
        title: "str",
        content: (
            <>
                <EARLInfo text="A string is a list of `char`'s. They are surrounded with double quotes." />
            </>
        ),
        subsections: [
            {
                title: "fstr",
                content: (
                    <>
                        <EARLInfo text='`fstr` is syntax sugar to put variables inside of a string literal. They start with `f` followed by a string literal.' />
                        <EARLInfoSpace>
                            <EARLInfo text='All identifiers enclosed with `{ }` will have their value stringified.' />
                        </EARLInfoSpace>
                        <EARLInfo text='*Note*: They currently only work with *identifiers*.' />
                        <EARLCodeSnippet code={fstrExample1Src} language={'armasm'} />
                    </>
                ),
            },
        ],
    },
    {
        title: "list",
        content: (
            <>
                <EARLInfo text="A list is a growable array. They can hold any datatype, and you can even mix multiple datatypes in a" />
                <EARLInfo text="single list. They can be initialized with braces or a `range`." />
                <EARLCodeSnippet code={listExample1Src} language={'armasm'} />
            </>
        ),
        subsections: [
            {
                title: "range",
                content: (
                    <>
                        <EARLInfo text='Ranges are not their own datatype, they are just syntax sugar for a list. For example:' />
                        <EARLCodeSnippet code={rangeExample1Src} language={'armasm'} />
                    </>
                ),
            }
        ],
    },
    {
        title: "slice",
        content: (
            <>
                <EARLInfo text="Currently, `slice` types are only useful for indexing a `list`. They allow you to take a slice of the `list`" />
                <EARLInfoSpace>
                    <EARLInfo text="and create a new list of those elements. They are two expressions separated by a colon `:`." />
                </EARLInfoSpace>
                <EARLInfoSpace>
                    <EARLInfo text="A `slice` is defined by:" />
                </EARLInfoSpace>
                <EARLInfoIndent>
                    <Latex>
                        {`\\text{Given a "starting" and "ending" expression } S, E \\in \\mathbb{Z} \\text{ where } S \\le E \\text{ and some nonempty list of elements } L \\text{ then}`}
                    </Latex>
                    <EARLInfoIndent>
                        <Latex>
                            {`L_{S:E} = [L_S, L_{S+1}, L_{S+2}, ..., L_{E-1}]`}
                        </Latex>
                    </EARLInfoIndent>
                    <Latex>
                        {`\\text{and}`}
                    </Latex>
                    <EARLInfoIndent>
                        <Latex>
                            {`\\text{if } S \\text{ is either empty or unit, then } S = 0,`}
                        </Latex>
                    </EARLInfoIndent>
                    <EARLInfoIndent>
                        <Latex>
                            {`\\text{if } E \\text{ is either empty or unit, then } E = |L|,`}
                        </Latex>
                    </EARLInfoIndent>
                    <EARLInfoIndent>
                        <Latex>
                            {`\\text{if both } S \\text{ and } E \\text{ are either empty or unit, then } L_{S:E} = L.`}
                        </Latex>
                    </EARLInfoIndent>
                </EARLInfoIndent>
                <EARLCodeSnippet code={sliceExample1Src} language={'armasm'} />
            </>
        ),
    },
    {
        title: "tuple",
        content: (
            <>
                <EARLInfo text='A `tuple` is the exact same thing as a `list` except they are immutable. You cannot reassign,' />
                <EARLInfoSpace>
                    <EARLInfo text='append, or modify a `tuple`. You can use bracket notation `[]` to index values.' />
                </EARLInfoSpace>
                <EARLInfo text='They can be created by using parenthesis and having elements be separated by commas (*including tuples of size 1*):' />
                <EARLCodeSnippet code={tupleExample1Src} language={'armasm'} />
                <EARLInfo text='*Note*: If an empty tuple is desired (why would you ever want this?) you can use the intrinsic casting' />
                <EARLInfo text='function `tuple()` i.e., `let empty_tuple = tuple();`.' />
            </>
        ),
    },
    {
        title: "TypeKW",
        content: (
            <>
                <EARLInfo text='`TypeKW` (or Type Keyword) are global identifiers for types. You are unable to do any operations on' />
                <EARLInfoSpace>
                    <EARLInfo text='them except for passing them around as variables, using them as raw values, or doing equality `==` or `!=`.' />
                </EARLInfoSpace>
                <EARLInfo text='*Note*: These are not the same as the casting functions.' />
                <EARLCodeSnippet code={typeKWExample1Src} language={'armasm'} />
            </>
        ),
    },
    {
        title: "option",
        content: (
            <>
                <EARLInfo text='Because all variables need to be initialized when using a `let` statement, it may be annoying to be' />
                <EARLInfo text='forced to give it some initial value. The `none` type allows you to set a variable to it and can be' />
                <EARLInfoSpace>
                    <EARLInfo text='reassigned later.' />
                </EARLInfoSpace>
                <EARLInfo text='To assign a value to a `none` type, you must wrap it in `some` i.e.,' />
                <EARLCodeSnippet code={optionExample1Src} language={'armasm'} />

                <EARLInfoSpace>
                    <EARLInfo text='The underlying value (in the above example, 9) can be extracted out using the unwrap() member intrinsic.' />
                </EARLInfoSpace>
                <EARLInfo text='Another important note is that the underlying value that the `option` holds is dynamic:' />
                <EARLCodeSnippet code={optionExample2Src} language={'armasm'} />
            </>
        ),
    },
    {
        title: "closure",
        content: (
            <>
                <EARLInfo text='Closures are anonymous functions that close in the outer scope. They can be used as functions or' />
                <EARLInfo text='passed around as variables. The closure parameters are surrouned by vertical bars `||`. If a closure' />
                <EARLInfoSpace>
                    <EARLInfo text='does not take any parameters, then the item inside of the vertical bars is `_` i.e., `|_|`.' />
                </EARLInfoSpace>
                <EARLInfo text='Here is an example of `c++` lambdas and the equivalent EARL closures.' />
                <EARLCodeSnippet code={closureCXXExample1Src} language={'cpp'} />
                <EARLCodeSnippet code={closureExample1Src} language={'armasm'} />
                <EARLInfo text='Some other examples:' />
                <EARLCodeSnippet code={closureExample2Src} language={'armasm'} />
            </>
        ),
    },
    {
        title: "dictionary",
        content: (
            <>
                <EARLInfo text='A `dictionary` is a collection of key-value pairs. Every key has an associated value. If a `dictionary` is' />
                <EARLInfo text='indexed with a key that *does not* exist, it will return a `none` value. If the value *does* exist, it will return' />
                <EARLInfo text='it in a wrapped `some` value. They can be created with a brace initializer list where keys and values' />
                <EARLInfoSpace>
                    <EARLInfo text='are separed by a colon `:` and entries are separated by a comma `,`.' />
                </EARLInfoSpace>
                <EARLInfo text='The keys in dictionaries must be uniform throughout, although the values can be of any type. They' />
                <EARLInfo text='must also be initalized with data so it can infer the type of the keys, however you may want an empty' />
                <EARLInfo text='dictionary. This can be done by using the `Dict(type: TypeKW) -> Dict<type>` function which will' />
                <EARLInfo text='produce an empty dictionary that holds keys of type `type`.' />
                <EARLCodeSnippet code={dictionaryExample1Src} language={'armasm'} />
            </>
        ),
    },
    {
        title: "file",
        content: (
            <>
                <EARLInfo text='The `file` type is a file handler. It handles opening, closing, reading, and writing to files. The way to' />
                <EARLInfoSpace>
                    <EARLInfo text='get a file handler is by using the intrinsic function `open()` (see *Intrinsics*).' />
                </EARLInfoSpace>
                <EARLInfo text='*Note*: It is up to the user to `close()` the file handle.' />
            </>
        ),
    },
    {
        title: "time",
        content: (
            <>
                <EARLInfo text='This is a datatype representing time. It contains the values of the years, months, days, hours,' />
                <EARLInfo text='minutes, and seconds of the current date.' />
            </>
        ),
    },
    {
        title: "unit",
        content: (
            <>
                <EARLInfo text='The unit type is used as a "throwaway" or `void`. It essentially throws away the value that gets assigned to it.' />
                <EARLInfo text='The following are some examples of correct usages of it:' />
                <EARLCodeSnippet code={unitExample1Src} language={'armasm'} />
            </>
        ),
    },
];

const intrinsicsSections = [
    {
        title: "print()",
        content: (
            <>
                <EARLCodeSnippet code={printDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will print all elements given.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "println()",
        content: (
            <>
                <EARLCodeSnippet code={printlnDef} language={'armasm'} />
                <EARLInfoIndent>
                    <EARLInfoSpace><EARLInfo text='Will print all elements given and add a newline. Will flush the output.' /></EARLInfoSpace>
                    <EARLInfo text='*Note*: If given a class or enum, both this function and `print()` will do an in-depth print showing all' />
                    <EARLInfo text='variables that they contain as well as their value. This is very helpful for debugging.' />
                </EARLInfoIndent>
            </>
        ),
    },
    {
        title: "help()",
        content: (
            <>
                <EARLCodeSnippet code={helpDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will return a `str` of all doc comments (see *Documentation Comments*) associated with the identifer `id`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "sin()",
        content: (
            <>
                <EARLCodeSnippet code={sinDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will return the sin of `arg`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "cos()",
        content: (
            <>
                <EARLCodeSnippet code={cosDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will return the cosine of `arg`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "set_flag()",
        content: (
            <>
                <EARLCodeSnippet code={setFlagDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will set the command line flag `flag` during runtime.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "unset_flag()",
        content: (
            <>
                <EARLCodeSnippet code={unsetFlagDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will unset the command line flag `flag` during runtime.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "input()",
        content: (
            <>
                <EARLCodeSnippet code={inputDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will print all elements given. Gets input from the user and returns it as a `str`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "int()",
        content: (
            <>
                <EARLCodeSnippet code={intDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Casts `arg` to an `int`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "float()",
        content: (
            <>
                <EARLCodeSnippet code={floatDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Casts `arg` to a `float`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "str()",
        content: (
            <>
                <EARLCodeSnippet code={strDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Casts `arg` to a `str`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "bool()",
        content: (
            <>
                <EARLCodeSnippet code={boolDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Casts `arg` to a `bool`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "tuple()",
        content: (
            <>
                <EARLCodeSnippet code={tupleDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Cast the values to a `tuple`. You can also supply 0 arguments to create an empty `tuple`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "list()",
        content: (
            <>
                <EARLCodeSnippet code={listDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Cast the values to a `list`. You can also supply 0 arguments to create an empty `list`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "Dict()",
        content: (
            <>
                <EARLCodeSnippet code={dictDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Creates a new *empty* `dictionary` that holds keys of type `ty`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "assert()",
        content: (
            <>
                <EARLCodeSnippet code={assertDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Tests each argument. If any of the conditions fail, the program immediately crashes.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "len()",
        content: (
            <>
                <EARLCodeSnippet code={lenDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Expects either a `list`, `string`, or `tuple`. Will give the length as an integer.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "some()",
        content: (
            <>
                <EARLCodeSnippet code={someDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Wraps `arg` in an `option` type.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "type()",
        content: (
            <>
                <EARLCodeSnippet code={typeDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the type of `arg` as a `str`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "typeof()",
        content: (
            <>
                <EARLCodeSnippet code={typeofDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the type of `arg` as a `TypeKW`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "argv()",
        content: (
            <>
                <EARLCodeSnippet code={argvDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns a `list` of `str` of the supplied command line arguments that were given by the `--` option.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "open()",
        content: (
            <>
                <EARLCodeSnippet code={openDef} language={'armasm'} />
                <EARLInfoIndent>
                    <EARLInfo text='Opens the filepath `fp` with mode `mode`. Mode must either be `r` for read, `w` for write, or `b` for binary.' />
                    <EARLInfo text='You can also supply multiple modes by combining the letters into a single `str` i.e., `"wrb"`.' />
                </EARLInfoIndent>
            </>
        ),
    },
    {
        title: "unimplemented()",
        content: (
            <>
                <EARLCodeSnippet code={unimplementedDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Prints "UNIMPLEMENTED" `arg1..argN` to `stderr` and exits with a non-zero exit code.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "datetime()",
        content: (
            <>
                <EARLCodeSnippet code={datetimeDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the current date as a `time` type.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "sleep()",
        content: (
            <>
                <EARLCodeSnippet code={sleepDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Sleep for `milli` milliseconds.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "env()",
        content: (
            <>
                <EARLCodeSnippet code={envDef} language={'armasm'} />
                <EARLInfoIndent>
                    <EARLInfo text='Get the environment variable `variable` as a `str`.' />
                    <EARLInfoSpace>
                        <EARLInfo text='*Note*: Do not put `"$"` in the variable name unless it has one explicitly in the name.' />
                    </EARLInfoSpace>
                </EARLInfoIndent>
            </>
        ),
    },
    {
        title: "init_seed()",
        content: (
            <>
                <EARLCodeSnippet code={initSeedDef} language={'armasm'} />
                <EARLInfoIndent>
                    <EARLInfo text='Sets the internal seed to `seed`.' />
                    <EARLInfoSpace>
                        <EARLInfo text='*Note*: A good way of getting a random seed is by doing `init_seed(datetime().raw())`.' />
                    </EARLInfoSpace>
                </EARLInfoIndent>
            </>
        ),
    },
    {
        title: "random()",
        content: (
            <>
                <EARLCodeSnippet code={randomDef} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Gives a random number based off of the internal seed from `init_seed()`.' /></EARLInfoIndent>
            </>
        ),
    },
];

const memberIntrinsicsSections = [
    {
        title: "list Implements",
        content: (
            <>
                <EARLCodeSnippet code={listAppend} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will append `arg1..argN` to the list.' /></EARLInfoIndent>

                <EARLCodeSnippet code={listPop} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will remove the element at index `idx`.' /></EARLInfoIndent>

                <EARLCodeSnippet code={listRev} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns a new list that is the reverse of the original.' /></EARLInfoIndent>

                <EARLCodeSnippet code={listFilter} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Takes the closure `cl` and creates a new list of all the elements where `cl` returns `true`.' /></EARLInfoIndent>

                <EARLCodeSnippet code={listForeach} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Calls the closure `cl` on each element.' /></EARLInfoIndent>

                <EARLCodeSnippet code={listMap} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Calls the closure `cl` on each element and creates a new list on the evaluated results.' /></EARLInfoIndent>

                <EARLCodeSnippet code={listFold} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Calls the closure `cl` on each element with the accumulator `acc`.' /></EARLInfoIndent>

                <EARLCodeSnippet code={listContains} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Checks to see if `val` is in the list.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "str Implements",
        content: (
            <>
                <EARLCodeSnippet code={strAppend} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will append `arg1..argN` to the `str`.' /></EARLInfoIndent>

                <EARLCodeSnippet code={strPop} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Will remove the element at index `idx`.' /></EARLInfoIndent>

                <EARLCodeSnippet code={strRev} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns a new `str` that is the reverse of the original.' /></EARLInfoIndent>

                <EARLCodeSnippet code={strFilter} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Takes the closure `cl` and creates a new `str` of all the elements where `cl` returns true.' /></EARLInfoIndent>

                <EARLCodeSnippet code={strForeach} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Calls the closure `cl` on each element.' /></EARLInfoIndent>

                <EARLCodeSnippet code={strSplit} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Split a string by the delimiter `delim`.' /></EARLInfoIndent>

                <EARLCodeSnippet code={strContains} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Checks to see if `val` is in the `str`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "tuple Implements",
        content: (
            <>
                <EARLCodeSnippet code={tupleRev} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns a new `tuple` that is the reverse of the original.' /></EARLInfoIndent>

                <EARLCodeSnippet code={tupleFilter} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Takes the closure `cl` and creates a new `tuple` of all the elements where `cl` returns true.' /></EARLInfoIndent>

                <EARLCodeSnippet code={tupleForeach} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Calls the closure `cl` on each element.' /></EARLInfoIndent>

                <EARLCodeSnippet code={tupleContains} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Checks to see if `val` is in the `tuple`.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "dictionary Implements",
        content: (
            <>
                <EARLCodeSnippet code={dictInsert} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Inserts the key `k` and value `v` into the `dictionary`.' /></EARLInfoIndent>

                <EARLCodeSnippet code={dictHasKey} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns `true` if the key `k` is present in the `dictionary` and `false` if otherwise.' /></EARLInfoIndent>

                <EARLCodeSnippet code={dictHasValue} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns `true` if the value `v` is present in the `dictionary` and `false` if otherwise.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "char Implements",
        content: (
            <>
                <EARLCodeSnippet code={charAscii} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the ascii code of the character.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "option Implements",
        content: (
            <>
                <EARLCodeSnippet code={optionIsNone} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns `true` if the value is `none`, `false` otherwise.' /></EARLInfoIndent>

                <EARLCodeSnippet code={optionIsSome} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns `true` if the value is `some`, `false` otherwise.' /></EARLInfoIndent>

                <EARLCodeSnippet code={optionUnwrap} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the inner value of the `option` datatype. If the `option` is `none`, a panic will occur.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "file Implements",
        content: (
            <>
                <EARLCodeSnippet code={fileClose} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Closes an opened file.' /></EARLInfoIndent>

                <EARLCodeSnippet code={fileRead} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Get the contents of a file as a `str`.' /></EARLInfoIndent>

                <EARLCodeSnippet code={fileDump} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Print the contents of a file.' /></EARLInfoIndent>

                <EARLCodeSnippet code={fileWrite} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Writes `msg` to the opened file.' /></EARLInfoIndent>

                <EARLCodeSnippet code={fileWriteLines} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Writes all elements in the list `msg` to the opened file. At the end of each value, a newline is added.' /></EARLInfoIndent>
            </>
        ),
    },
    {
        title: "time Implements",
        content: (
            <>
                <EARLCodeSnippet code={timeRaw} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Gives the underlying time value as a raw `int`. This is a good way for setting the seed with `init_seed`. ' /></EARLInfoIndent>

                <EARLCodeSnippet code={timeReadable} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the current value of the time object as a `tuple` of `(years, months, days, hours, minutes, seconds)`' /></EARLInfoIndent>

                <EARLCodeSnippet code={timeYears} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the number of years in the `time` object.' /></EARLInfoIndent>

                <EARLCodeSnippet code={timeMonths} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the number of months in the `time` object.' /></EARLInfoIndent>

                <EARLCodeSnippet code={timeDays} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the number of days in the `time` object.' /></EARLInfoIndent>

                <EARLCodeSnippet code={timeHours} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the number of hours in the `time` object.' /></EARLInfoIndent>

                <EARLCodeSnippet code={timeMinutes} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the number of minutes in the `time` object.' /></EARLInfoIndent>

                <EARLCodeSnippet code={timeSeconds} language={'armasm'} />
                <EARLInfoIndent><EARLInfo text='Returns the number of seconds in the `time` object.' /></EARLInfoIndent>
            </>
        ),
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
        title: "Your First Program",
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
        title: "Grammar and Features",
        content: (
            <>
                <EARLInfo text='This section contains all grammar and features of EARL.' />
            </>
        ),
        subsections: grammarAndFeatures,
    },
    {
        title: "Datatypes",
        content: (
            <>
                <EARLInfo text='The following is a list of the currently implemented primitive types.' />
            </>
        ),
        subsections: datatypesSections,
    },
    {
        title: "Intrinsics",
        content: (
            <>
                <EARLInfo text='Intrinsics are functions that are automatically built into the interpreter. You do not need to import' />
                <EARLInfo text='anything to use these functions.' />
            </>
        ),
        subsections: intrinsicsSections,
    },
    {
        title: "Member Intrinsics",
        content: (
            <>
                <EARLInfo text='Member intrinsics are the same as intrinsics, except they are member functions (or methods) that' />
                <EARLInfo text='types have built into them. You access these with the dot `.` notation i.e. `let r = (1..10).rev();`' />
            </>
        ),
        subsections: memberIntrinsicsSections,
    },
    {
        title: "StdLib Modules",
        content: (
            <>
                <EARLInfo text='Upon installing EARL, the standard library is installed into `-DINSTALL_PREFIX` (`/usr/local/include` by default).' />
                <EARLInfo text='The first place that EARL looks when evaluating an `import` statement is `-DINSTALL_PREFIX`.' />
                <EARLInfoSpace>
                <EARLInfo text='This means that all you need to do to import these files is do: `import "std/<file>.earl";` <depth>.' />
                </EARLInfoSpace>
                <EARLInfo text='*Note for Contributers*: This section is autogenerated by:' />
                <EARLInfoIndent><EARLInfo text='https://github.com/malloc-nbytes/EARL/blob/main/src/stdlib-docs-gen.earl' /></EARLInfoIndent>
                <EARLInfo text='so do not modify this section by hand.' />
            </>
        ),
        subsections: stdLibModules,
    },
];

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
        ? "text-4xl font-bold p-4 underline" // Main sections (depth 0)
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
