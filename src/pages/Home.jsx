import EARLLegend from "../components/EARLLegend";
import EARLNavbar from "../components/EARLNavbar";
import earlLogo from "../assets/earl-logo.jpg";
import Footer from "../components/Footer";

function Home() {
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
        <main className={`relative ${mainClassName} overflow-hidden`}>
            <div className="absolute inset-0 z-0">
                <div className={`w-full h-full bg-cover bg-no-repeat filter blur-[15px]`} style={{ backgroundImage: `url(${earlLogo})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black opacity-30 z-0"></div>
            </div>
            <EARLNavbar selected={"home"} />
            <EARLLegend />
            <Footer />
        </main>
    );
}

export default Home;
