import EARLInfo from "../components/EARLInfo";
import EARLInfoIndent from "../components/EARLInfoIndent";
import EARLCodeSnippet from "../components/EARLCodeSnippet";
export const stdLibModules = [
    {
        title: "Time",
        content: (
            <>
                <EARLInfo text='Import: `"std/time.rl"`' />
                <EARLInfo text='Module: `Time`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLCodeSnippet code={`ONE_SECOND: @const int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The number of microseconds for one second." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`HALF_SECOND: @const int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The number of microseconds for half a second." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`QUARTER_SECOND: @const int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The number of microseconds for a quarter of a second." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`FIVE_SECONDS: @const int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The number of microseconds for five seconds." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`TEN_SECONDS: @const int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The number of microseconds for ten seconds." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`THIRTY_SECONDS: @const int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The number of microseconds for thirty seconds." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`ONE_MINUTE: @const int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The number of microseconds for one minute." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`TEN_MINUTES: @const int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The number of microseconds for ten minutes." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`ONE_HOUR: @const int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The number of microseconds for one hour." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`ONE_DAY: @const int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The number of microseconds for one day." />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Dictionary",
        content: (
            <>
                <EARLInfo text='Import: `"std/datatypes/dictionary.rl"`' />
                <EARLInfo text='Module: `Dictionary`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`to_list(@const @ref d: dictionary) -> list<tuple>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Description' />
                            <EARLInfo text='Takes the dictionary `d` and converts it' />
                            <EARLInfo text='to a list of tuples.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`of_list(@const @ref lst: : list<x0: any, x1: typeof(x0), x2: typeof(x0), ..., xN: typeof(x0)>) -> dictionary<typeof(lst[0])>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes a list where all values are the same type and' />
                            <EARLInfo text='converts it into a dictionary of the number of times' />
                            <EARLInfo text='some value appears in `lst`. Note: `lst` is expected' />
                            <EARLInfo text='to have a length > 0.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Char",
        content: (
            <>
                <EARLInfo text='Import: `"std/datatypes/char.rl"`' />
                <EARLInfo text='Module: `Char`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`isalpha(c: char) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes the char `c` and returns a boolean of whether or not it is a an alpha character.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`isnum(c: char) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes the char `c` and returns a boolean of whether or not' />
                            <EARLInfo text='it is a digit.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`isalnum(c: char) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes the char `c` and returns a boolean of whether or not it is a digit or an alpha character.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`islower(c: char) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes the char `c` and returns whether or not it is lowercase.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`isupper(c: char) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes the char `c` and returns whether or not it is uppercase.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`tolower(c: char) -> char`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes the char `c` and returns a lowercase character version of the latin alphabet' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`toupper(c: char) -> char`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes the char `c` and returns a uppercase character version of the latin alphabet' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Str",
        content: (
            <>
                <EARLInfo text='Import: `"std/datatypes/str.rl"`' />
                <EARLInfo text='Module: `Str`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`isnum(s: str) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Check to see if the string `s` is a number.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`to_list(s: @ref str) -> list`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Convert the string `s` to a `list`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`find(s: @ref str, t: char) -> int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the index of target `t` in a `some` value or `none` if not found.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`trim(s: @ref str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Trims all whitespace (spaces, tabs, newlines etc.) from `s` in-place.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`find_first_of(s: @const @ref str, t: char) -> option<int>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Finds the first ocurrence of `t` in `s`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`find_last_of(s: @const @ref str, t: char) -> option<int>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Finds the last ocurrence of `t` in `s`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`is_only_ignorable(s: @const @ref str) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Checks to see if the all characters in' />
                            <EARLInfo text='the string `s` are (` `, `\n`, `\r`, `\t`).' />
                            <EARLInfo text='Return `true` if all are one of the ignorable' />
                            <EARLInfo text='characters, or `false` if otherwise.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "List",
        content: (
            <>
                <EARLInfo text='Import: `"std/datatypes/list.rl"`' />
                <EARLInfo text='Module: `List`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLCodeSnippet code={`DEFAULT_INT_ASCEND_QUICKSORT: closure(int, int) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The default comparison function for ascending sort." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`DEFAULT_INT_DESCEND_QUICKSORT: closure(int, int) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The default comparison function for descending sort." />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`preset(elem: any, cap: int) -> list`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Creates a list with elements `elem` of size `cap`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`from_range(start: int, stop: int, stride: int) -> list<int|float>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes a list and then returns element within range specified by the parameters `start`, `stop`, `stride`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`fill(lst: @ref list<any>, k: any) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Fills the given list `lst` with element `k`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`sumf(lst: @const @ref list<real>) -> float`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the sum all elements in `lst` as a float.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`sum(lst: @const @ref list<int|float>) -> int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the sum all elements in `lst` as an integer.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`find(lst: @const @ref list<any>, elem: @const @ref any) -> option<int>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes a reference to a list and a reference to an element and looks for the element find in the given list' />
                            <EARLInfo text='Returns the index of the first occurrence that `elem` appears in `lst` wrapped in `some`, or `none` if not found.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`count(lst: @const @ref list<any>, elem: @const @ref any) -> int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Counts the number of occurrences that `elem` appears in `lst`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`quicksort(lst: @ref list<any>, compar: : @const closure(x1: any, x2: type(x1)) -> bool|int) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='where =compar= is some ordering function $F(x_1, x_2) \in \{true, false\}$' />
                            <EARLInfo text='and $F$ is defined by' />
                            <EARLInfo text='\[' />
                            <EARLInfo text='F(x_1, x_2) = \begin{cases}' />
                            <EARLInfo text='true & \text{if } R(x_1) \ge R(x_2) \\' />
                            <EARLInfo text='false & \text{if } R(x_1) < R(x_2)' />
                            <EARLInfo text='\end{cases}' />
                            <EARLInfo text='\]' />
                            <EARLInfo text='and $R(x)$ is some ranking function that produces a rank of $x$.' />
                            <EARLInfo text='Performs the quicksort sorting algorithm on =lst= and' />
                            <EARLInfo text='sorts by the comparison closure =compar=.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`dict_to_list(dict: @const @ref dict<any, any>) -> list<tuple<any, any>>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Converts the dictionary `dict` to a list.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`to_str(lst: @const @ref list<any>) -> str`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Convert a list to a space separated string.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "IO",
        content: (
            <>
                <EARLInfo text='Import: `"std/io.rl"`' />
                <EARLInfo text='Module: `IO`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLCodeSnippet code={`Fd {
    In -> int,
    Out -> int,
    Err -> int
}`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='The integer codes for `stdin`, `stdout`, and `stderr` for' />
                            <EARLInfo text='`In`, `Out`, and `Err` respectively.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`file_to_str(fp: str) -> str`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Get the contents of a file `fp` and put it into a string.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`read_lines(fp: str) -> list`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Read the lines of the file `fp` and get' />
                            <EARLInfo text='each line as a list.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`write_to_file(content: str, fp: str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Takes the string `content` and writes it to' />
                            <EARLInfo text='the file `fp`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`rename(path_from: str, path_to: str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Rename the file `path_from` to `path_to`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`walkdir(dir: str) -> list<str>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Walks the directory `dir` recursively, returning' />
                            <EARLInfo text='all files found.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`strip_path(path: str) -> str`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the filename after striping the' />
                            <EARLInfo text='path leading to it.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Script",
        content: (
            <>
                <EARLInfo text='Import: `"std/script.rl"`' />
                <EARLInfo text='Module: `Script`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`program_exists(progname: str) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns `true` if `progname` exists as a program on the' />
                            <EARLInfo text='machine or `false` if otherwise.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`get_pid(proc: str) -> list<tuple<int, str>>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns a list of pids and the process associated' />
                            <EARLInfo text='with it in the form of `[(pid1, proc1), (pid2, proc2), ..., (pidN, procN)]`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`kill_pid(pid: int) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Kill the PID `pid`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`kill_pids(pid: list<int>) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Kill all PIDs `pids`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`wget(link: str, name: str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Performs a `wget` on `link` and saves it to `name`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`wget_wredirects(link: str, name: str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Performs a `wget` on `link` and saves it to `name`.' />
                            <EARLInfo text='Allows redirects.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`git_clone(link: str, depth: int) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Performs a `git clone <link> --depth=<depth>`. To not' />
                            <EARLInfo text='specify a depth, put some number less than 1 as the `depth`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`whoami() -> str`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Return the user as a `str`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`all_running_procs() -> list<dict<str>>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Return information on all running processes as a `dict<str>`' />
                            <EARLInfo text='in the form of:' />
                            <EARLInfo text='`dict["user"] = str`' />
                            <EARLInfo text='`dict["pid"] = str`' />
                            <EARLInfo text='`dict["cpu"] = str`' />
                            <EARLInfo text='`dict["mem"] = str`' />
                            <EARLInfo text='`dict["vsz"] = str`' />
                            <EARLInfo text='`dict["rss"] = str`' />
                            <EARLInfo text='`dict["tty"] = str`' />
                            <EARLInfo text='`dict["stat"] = str`' />
                            <EARLInfo text='`dict["start"] = str`' />
                            <EARLInfo text='`dict["time"] = str`' />
                            <EARLInfo text='`dict["cmd"] = str`' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`launch_proc(proc: str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Launch the processes `proc`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`launch_bgproc(proc: str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Launch the processes `proc` in the background.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Utils",
        content: (
            <>
                <EARLInfo text='Import: `"std/utils.rl"`' />
                <EARLInfo text='Module: `Utils`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`is_even(n: int) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns `true` if `n` is even, or `false` if otherwise.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`is_odd(n: int) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns `true` if `n` is odd, or `false` if otherwise.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`swap(x1: @ref any, x2: @ref type(x1)) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Swap `x1` and `x2` in-place.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`iota() -> int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns 0 on first call, then 0+1 on second, then 0+1+1 on third etc.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Math",
        content: (
            <>
                <EARLInfo text='Import: `"std/math.rl"`' />
                <EARLInfo text='Module: `Math`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLCodeSnippet code={`PI: float`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The mathematical constant for pi." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`EULER: float`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="The mathematical constant for Euler's number." />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`max(x: real, y: real) -> real`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the greater of `x` and `y`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`min(x: real, y: real) -> real`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the minimum of `x` and `y`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`abs(x: real) -> real`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the absolute value of `x`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`mode(lst: list) -> list`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='This function returns a list of all modes that appear at the' />
                            <EARLInfo text='highest frequency in the given list in the order modes are found.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`mean(lst: list) -> float`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the mean (average in a dataset) of a given list.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`median(lst: list) -> int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='This function sorts and then returns the middle number of a given list' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`list_min(lst: list) -> real`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the smallest element `lst`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`list_max(lst: list) -> real`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the largest element `lst`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`area_of_circle(r: real) -> real`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the area of a circle with radius `r`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`volume_of_cylinder(r: real, h: real) -> real`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the volume of a cylinder with radius `r` and height `h`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`volume_of_cone(r: real, h: real) -> real`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the volume of a cone with radius `r` and height `h`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`floor(f: float) -> int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the floor of `f`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`ceil(f: float) -> int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the ceil of `f`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`lerp(a: real, b: real, f: real) -> real`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Performs the lerp algorithm from `a` to `b` by `f`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`normalize(x: real, min: float, max: float) -> float`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Normalizes `x` to the range of `min` .. `max`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`clamp(value: real, min: real, max: real) -> real`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Performs clamp on `value` with `min` and `max`.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Encryption",
        content: (
            <>
                <EARLInfo text='Import: `"std/algorithms/encryption.rl"`' />
                <EARLInfo text='Module: `Encryption`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`rle(src: str) -> str`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Performs Run Length Encoding on `src`.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Colors",
        content: (
            <>
                <EARLInfo text='Import: `"std/colors.rl"`' />
                <EARLInfo text='Module: `Colors`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLCodeSnippet code={`Tfc {
    Black -> str,
    Red -> str,
    Green -> str,
    Yellow -> str,
    Blue -> str,
    Magenta -> str,
    Cyan -> str,
    White -> str,
    Bright_Black -> str,
    Bright_Red -> str,
    Bright_Green -> str,
    Bright_Yellow -> str,
    Bright_Blue -> str,
    Bright_Magenta -> str,
    Bright_Cyan -> str,
    Bright_White -> str
}`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='The different (T)ext (f)orground (c)olors.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`Tbc {
    Black -> str,
    Red -> str,
    Green -> str,
    Yellow -> str,
    Blue -> str,
    Magenta -> str,
    Cyan -> str,
    White -> str,
    Bright_Black -> str,
    Bright_Red -> str,
    Bright_Green -> str,
    Bright_Yellow -> str,
    Bright_Blue -> str,
    Bright_Magenta -> str,
    Bright_Cyan -> str,
    Bright_White -> str
}`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='The different (T)ext (b)ackground (c)olors.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`Te {
    Underline -> str,
    Bold -> str,
    Italic -> str,
    Invert -> str,
    Strikethrough -> str,
    Reset -> str
}`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='The different (T)ext (e)ffects.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`show_fg_colors() -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Show all text forground colors printed to `stdout`.' />
                            <EARLInfo text='This does reset all current color and effect terminal codes.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`show_bg_colors() -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Show all text background colors printed to `stdout`.' />
                            <EARLInfo text='This does reset all current color and effect terminal codes.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`show_text_effects() -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Show all text effects colors printed to `stdout`.' />
                            <EARLInfo text='This does reset all current color and effect terminal codes.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "System",
        content: (
            <>
                <EARLInfo text='Import: `"std/system.rl"`' />
                <EARLInfo text='Module: `System`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`ls(path: str) -> list`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='List all items at the path `path` and return a list of' />
                            <EARLInfo text='all elements it contains.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`isdir(path: str) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Return `true` if `path` is a directory or `false` if otherwise.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`mkdir(name: str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Create a new directory in the `cwd` called `name`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`fullpath_mkdir(fullpath: str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Creates a full path directory as well as a file' />
                            <EARLInfo text='i.e., ./dir1/dir2/dir3/file.txt. The last entry' />
                            <EARLInfo text='in the path will be used as the file to be created.' />
                            <EARLInfo text='It is functionally equivalent to: `mkdir -p <path> && touch <path>/file.txt`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`name_and_ext(path: str) -> tuple<option<str>, option<str>>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns a tuple of filename and extension. If either the name or extension' />
                            <EARLInfo text='cannot be found, the respective one will be set to `none`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`move(path_from: str, path_to: str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Move the file `path_from` to `path_to`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`cmd(cmd: str) -> int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Run the bash command `cmd`. Returns the exit code.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`cmd_wcheck(cmd: str) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Run the bash command `cmd` and checks the exit code.' />
                            <EARLInfo text='Will print a warning if the exit code is not zero.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`cmd_onfail(cmd: str, onfail: closure) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Run the bash command `cmd` and checks the exit code.' />
                            <EARLInfo text='Will run `onfail` if the exit code is not 0.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`cmdstr(cmd: str) -> str`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Run the bash command `cmd` and return the' />
                            <EARLInfo text='output as a `str`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`cmdstr_wexitcode(cmd: str) -> tuple<int, str>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Run the bash command `cmd` and return the' />
                            <EARLInfo text='output as a tuple of `(exit_code, output)`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`get_all_files_by_ext(dir: @const @ref str, ext: @const @ref str) -> list<str>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Get all files in the directory `dir` that have the' />
                            <EARLInfo text='file extension `ext`.' />
                            <EARLInfo text='Example:' />
                            <EARLInfo text='let cppfiles = get_all_files_by_ext(".", "cpp");' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
    {
        title: "Matrix",
        content: (
            <>
                <EARLInfo text='Import: `"std/containers/matrix.rl"`' />
                <EARLInfo text='Module: `Matrix`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`identity() -> T`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Creates the identity matrix.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`from1d(data: list<any>, rows: int, cols: int) -> T`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Creates a `rows` x `cols` matrix from a 1d list.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`from2d(data: list<list<any>>) -> T`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Creates a matrix from a 2d list.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLCodeSnippet code={`T[init: list<any>, rows: int, cols: int]`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Creates a new matrix with the initial dataset `init`' />
                            <EARLInfo text='with `rows` rows and `cols` columns.' />
                        </EARLInfoIndent>
                    </>
                ),
                subsections: [
                    {
                        title: "T Implements",
                        content: (
                            <>
                        <EARLCodeSnippet code={`at(i: int, j: int) -> any`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the element at [ `i` ][ `j` ] in the matrix.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`show() -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Prints all elements in the matrix.' />
                        </EARLInfoIndent>
                            </>
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "Queue",
        content: (
            <>
                <EARLInfo text='Import: `"std/containers/queue.rl"`' />
                <EARLInfo text='Module: `Queue`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLCodeSnippet code={`T[init: list]`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='A queue data structure.' />
                        </EARLInfoIndent>
                    </>
                ),
                subsections: [
                    {
                        title: "T Implements",
                        content: (
                            <>
                        <EARLCodeSnippet code={`push(val: any) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Pushes a value to the back of the queue.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`pop() -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Pops the front value from the queue.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`front() -> any`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the front value of the queue.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`empty() -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns true if the queue is empty.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`size() -> int`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the size of the queue.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`clear() -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Clears the queue.' />
                        </EARLInfoIndent>
                            </>
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "Set",
        content: (
            <>
                <EARLInfo text='Import: `"std/containers/set.rl"`' />
                <EARLInfo text='Module: `Set`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLCodeSnippet code={`T[init: : list<x0: any, x1: type(x0), ..., xN: type(x0)>]`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Creates a new Set container with the initializer list `init`.' />
                        </EARLInfoIndent>
                    </>
                ),
                subsections: [
                    {
                        title: "T Implements",
                        content: (
                            <>
                        <EARLCodeSnippet code={`insert(value: any) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Insert `value` into the `set`. A panic will occur' />
                            <EARLInfo text='if the `typeof(value)` is not the same as the other' />
                            <EARLInfo text='values in the `set`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`contains(value: any) -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns `true` if `value` is in the `set`, or `false` if it is not.' />
                            <EARLInfo text='A panic will occur if the `typeof(value)` is not the same as the other' />
                            <EARLInfo text='values in the `set`.' />
                        </EARLInfoIndent>
                            </>
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "Stack",
        content: (
            <>
                <EARLInfo text='Import: `"std/containers/stack.rl"`' />
                <EARLInfo text='Module: `Stack`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLCodeSnippet code={`T[init: list]`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='A stack data structure.' />
                        </EARLInfoIndent>
                    </>
                ),
                subsections: [
                    {
                        title: "T Implements",
                        content: (
                            <>
                        <EARLCodeSnippet code={`push(val: any) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Pushes a value to the top of the stack.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`pop() -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Pops the top value from the stack.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`top() -> any`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns the top value of the stack.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`clear() -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Clears the stack.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`empty() -> bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Returns true if the stack is empty.' />
                        </EARLInfoIndent>
                            </>
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "IntervalTree",
        content: (
            <>
                <EARLInfo text='Import: `"std/containers/interval-tree.rl"`' />
                <EARLInfo text='Module: `IntervalTree`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLCodeSnippet code={`T[init: list<tuple<real, real>>]`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Creates a new Interval Tree container.' />
                        </EARLInfoIndent>
                    </>
                ),
                subsections: [
                    {
                        title: "T Implements",
                        content: (
                            <>
                        <EARLCodeSnippet code={`insert(low: real, high: real) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Insert a new Interval into the tree.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`overlapping(low: real, high: real) -> option<tuple<real, real>>`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Check if the given interval `low`..`high` is contained' />
                            <EARLInfo text='within another interval. If there are several, returns the' />
                            <EARLInfo text='widest interval range.' />
                        </EARLInfoIndent>
                            </>
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: "Assert",
        content: (
            <>
                <EARLInfo text='Import: `"std/assert.rl"`' />
                <EARLInfo text='Module: `Assert`' />
            </>
        ),
        subsections: [
            {
                title: "Variable List",
                content: (
                    <>
                        <EARLCodeSnippet code={`CRASH_ON_FAILURE: bool`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="Will crash the program on assertion failures" />
                            <EARLInfo text="if set to `true`. Otherwise will print failures" />
                            <EARLInfo text="to `stderr`. By default, it is set to `true`." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`FILE: str`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="Should be set in the caller file to set the file location" />
                            <EARLInfo text="that the assertions are being called from using `__FILE__`." />
                            <EARLInfo text="*Note*: This variable must be set manually." />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`FUNC: str`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text="Should be set in the caller file in the function" />
                            <EARLInfo text="that the assertions are being called from using `__FUNC__`." />
                            <EARLInfo text="*Note*: This variable must be set manually." />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Enum List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
            {
                title: "Function List",
                content: (
                    <>
                        <EARLCodeSnippet code={`is_true(cond: bool) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Tests `cond` for `true`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`is_false(cond: bool) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Tests `cond` for `false`.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`eq(l: any, r: any) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Tests for `l` equal to `r`. *Note*: this function' />
                            <EARLInfo text='is type safe to it will not panic with differing types.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`neq(l: any, r: any) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Tests for `l` not equal to `r`. *Note*: this function' />
                            <EARLInfo text='is type safe to it will not panic with differing types.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`not_none(k: any) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Tests for `k` being not `none`. *Note*: this function' />
                            <EARLInfo text='is type safe so it will not panic with differing types.' />
                        </EARLInfoIndent>
                        <EARLCodeSnippet code={`is_none(k: any) -> unit`} language={'armasm'} />
                        <EARLInfoIndent>
                            <EARLInfo text='Tests for `k` being `none`. *Note*: this function' />
                            <EARLInfo text='is type safe so it will not panic with differing types.' />
                        </EARLInfoIndent>
                    </>
                ),
            },
            {
                title: "Class List",
                content: (
                    <>
                        <EARLInfo text='None' />
                    </>
                ),
            },
        ],
    },
];
