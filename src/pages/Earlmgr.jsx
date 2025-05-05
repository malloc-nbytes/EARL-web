import BackGround from "../components/BackGround";
import Footer from "../components/Footer";
import ContentWrapper from "../components/ContentWrapper";
import ScrollToTopButton from "../components/ScrollToTopButton";
import EARLNavbar from "../components/EARLNavbar";
import EARLInfo from "../components/EARLInfo";
import EARLInfoIndent from "../components/EARLInfoIndent";
import EARLInfoSpace from "../components/EARLInfoSpace";
import EARLInfoNote from "../components/EARLInfoNote";
import EARLCodeSnippet from "../components/EARLCodeSnippet";

import { indexExample1Src, indexExample2Src, indexExample3Src } from "../code-snippets/indexExample.jsx";

const sections = [
    {
        title: "earlmgr",
        content: (
            <>
                <EARLInfo text='earlmgr is a (WIP) script that manages thirdparty modules.' />
                <EARLInfo text='As of now, it handles:' />
                <EARLInfoIndent>
                    <EARLInfoSpace>
                        <EARLInfo text='- [-new] create a new EARL project' />
                        <EARLInfo text='- [-uninstall] remove earlmgr' />
                        <EARLInfo text='- [-docs] see this documentation' />
                        <EARLInfo text='- [-index] index file(s) in the std and external modules (wip)' />
                        <EARLInfo text='- [-indexlocal] index local file(s) (wip)' />
                        <EARLInfo text='- [-update] update earlmgr from remote, local (earlmgr development only), or thirdparty modules' />
                        <EARLInfo text='- [-get] download a thirdparty module with dependencies' />
                        <EARLInfo text='- [-remove] remove a thirdparty module' />
                        <EARLInfo text='- [-ls] see all std files and thirdparty modules downloaded' />
                    </EARLInfoSpace>
                </EARLInfoIndent>
                <EARLInfo text='*Again, earlmgr has not been thoroughly tested yet, so use at your own risk!*' />
                <EARLInfo text='The script can be downloaded here: [ https://github.com/malloc-nbytes/earlmgr ]' />
            </>
        ),
    },
    {
        title: "Index Parsing",
        content: (
            <>
                <EARLInfoSpace>
                    <EARLInfo text='For the flags [`-index`] and [`-indexlocal`] to work correctly,' />
                    <EARLInfo text='special comments in the source files are required.' />
                </EARLInfoSpace>
                <EARLInfo text='Lets say I want to have this code be compatible with indexing:' />
                <EARLCodeSnippet code={indexExample1Src} language={'rust'} />
                <EARLInfo text='The first thing I need to do is a *sequence* comments (###) for' />
                <EARLInfo text='everything I want indexed:' />
                <EARLCodeSnippet code={indexExample2Src} language={'rust'} />
                <EARLInfo text='Then I need to add descriptions, parameters, returns, etc.' />
                <EARLCodeSnippet code={indexExample3Src} language={'rust'} />
            </>
        ),
    },
];

function Earlmgr() {
    return (
        <BackGround>
            <EARLNavbar selected={'earlmgr'} />
            <div className="pt-16" />
            <ContentWrapper sections={sections} sideBarTitle={"earlmgr"} />
            <ScrollToTopButton />
            <Footer />
        </BackGround>
    );
}

export default Earlmgr;
