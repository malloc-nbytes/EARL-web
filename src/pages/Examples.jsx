import BackGround from "../components/BackGround";
import ContentWrapper from "../components/ContentWrapper";
import ScrollToTopButton from "../components/ScrollToTopButton";
import EARLNavbar from "../components/EARLNavbar";
import EARLInfo from "../components/EARLInfo";
import EARLInfoIndent from "../components/EARLInfoIndent";
import EARLInfoSpace from "../components/EARLInfoSpace";
import EARLCodeSnippet from "../components/EARLCodeSnippet";
import { lsLahExample, helloWorldExample, twosumExample } from "../code-snippets/CodeExamples";

const helloWorldSection = {
    title: "Hello World!",
    content: (
        <>
            <EARLInfo text='This is your first `"Hello World!"` program in `EARL`.' />
            <EARLCodeSnippet code={helloWorldExample.EARLSrc} language={'rust'} />
        </>
    ),
};

const lsParserSection = {
    title: "ls Parser",
    content: (
        <>
            <EARLInfo text='This examples performs `ls -lah` and takes the permissions and the filename and prints them.' />
        </>
    ),
    subsections: [
        {
            title: "BASH Version",
            content: (
                <>
                    <EARLCodeSnippet code={lsLahExample.bashSrc} language={'bash'} />
                </>
            ),
        },
        {
            title: "EARL Version",
            content: (
                <>
                    <EARLCodeSnippet code={lsLahExample.EARLSrc} language={'rust'} />
                </>
            ),
        },
    ],
};

const twosumSection = {
    title: "Twosum",
    content: (
        <EARLInfo text='Here is an example of the famous LeetCode question "twosum" (both bruteforce and optimized solutions).' />
    ),
    subsections: [
        {
            title: "Bruteforce",
            content: (
                <>
                    <EARLInfo text='The first thing that we will write is the brute force solution:' />
                    <EARLCodeSnippet code={twosumExample.EARLSrcBruteForce} language={'armasm'} />
                    <EARLInfo text='We are returning `some(...)` and `none` to keep the function type-consistent.' />
                    <EARLInfo text='If we were to return `(i, j) not wrapped in `some`, then this function could return either a `tuple` or an `option`.' />
                    <EARLInfo text='Another possiblity that we could do is just return an empty `tuple` or a `tuple` filled with `-1`s if the number is not found.' />
                </>
            ),
        },
        {
            title: "Optimized",
            content: (
                <>
                    <EARLInfo text='This is the optimized version by using a `dictionary` to store compliments:' />
                    <EARLCodeSnippet code={twosumExample.EARLSrcDict} language={'armasm'} />
                    <EARLInfo text='Here we create an empty dictionary that holds keys of type `int`' />
                    <EARLInfo text='Dictionaries will return `none` if not found, and `none` results to false if used in a boolean context.' />
                    <EARLInfo text='If the item is found, it will return `some(value)` which results to true in a boolean context.' />
                </>
            ),
        },
        {
            title: "Full Code Listing",
            content: (
                <>
                    <EARLCodeSnippet code={twosumExample.EARLSrcFullCode} language={'armasm'} />
                </>
            ),
        },
    ],
};

const sections = [
    helloWorldSection,
    lsParserSection,
    twosumSection,
];

function Examples() {
    return (
        <BackGround>
            <EARLNavbar selected={"examples"} />
            <div className="pt-16" />
            <ContentWrapper sections={sections} sideBarTitle={"Examples"} />
            <ScrollToTopButton />
        </BackGround>
    );
}

export default Examples;
