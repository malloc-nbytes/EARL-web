import BackGround from "../components/BackGround";
import Footer from "../components/Footer";
import ContentWrapper from "../components/ContentWrapper";
import ScrollToTopButton from "../components/ScrollToTopButton";
import EARLNavbar from "../components/EARLNavbar";
import EARLInfo from "../components/EARLInfo";
import EARLInfoIndent from "../components/EARLInfoIndent";
import EARLInfoSpace from "../components/EARLInfoSpace";

const sections = [
    {
        title: "Bug Reports",
        content: (
            <>
                <EARLInfo text='Bugs can be reported at *zdhdev@yahoo.com*' />
                <EARLInfo text='or *https://github.com/malloc-nbytes/EARL/issues*' />
            </>
        ),
    },
];

function Contact() {
    return (
        <BackGround>
            <EARLNavbar selected={'contact'} />
            <div className="pt-16" />
            <ContentWrapper sections={sections} sideBarTitle={"Examples"} />
            <ScrollToTopButton />
            <Footer />
        </BackGround>
    );
}

export default Contact;
