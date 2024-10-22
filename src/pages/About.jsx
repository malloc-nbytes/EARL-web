import BackGround from "../components/BackGround";
import Footer from "../components/Footer";
import ContentWrapper from "../components/ContentWrapper";
import ScrollToTopButton from "../components/ScrollToTopButton";
import EARLNavbar from "../components/EARLNavbar";
import EARLInfo from "../components/EARLInfo";
import EARLInfoIndent from "../components/EARLInfoIndent";
import EARLInfoSpace from "../components/EARLInfoSpace";
import EARLInfoNote from "../components/EARLInfoNote";

const sections = [
    {
        title: "What is EARL?",
        content: (
            <>
                <EARLInfo text='*EARL* (Evaluate And Run Language) is designed to be a wrapper for `BASH`, making it much easier to write.' />
                <EARLInfo text='It provides a syntax similar to `Rust` and functionality similar to `Python`.' />
            </>
        ),
    },
    {
        title: "Important Notes and Issues",
        content: (
            <>
                <EARLInfoSpace>
                    <EARLInfoNote>
                        <EARLInfo text='EARL is slow because it is currently a Tree-Walk Interpreter, so it should' />
                        <EARLInfo text='not be used to perform heavy computations and algorithms. If this is necessary, you should call' />
                        <EARLInfo text='an external program to handle these cases. I do have plans to make a VM, but I do not have a date for it.' />
                    </EARLInfoNote>
                    </EARLInfoSpace>
                <EARLInfoSpace>
                    <EARLInfoNote>
                        <EARLInfo text='You can use recursion, however there is a limited stack space.' />
                    </EARLInfoNote>
                </EARLInfoSpace>
            </>
        ),
    },
];

function About() {
    return (
        <BackGround>
            <EARLNavbar selected={'about'} />
            <div className="pt-16" />
            <ContentWrapper sections={sections} sideBarTitle={"About"} />
            <ScrollToTopButton />
            <Footer />
        </BackGround>
    );
}

export default About;
