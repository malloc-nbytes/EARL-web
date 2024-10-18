import EARLLegend from "./components/EARLLegend";
import EARLNavbar from "./components/EARLNavbar";

function App() {
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
        <main className={mainClassName}>
            <EARLNavbar />
            <EARLLegend />
        </main>
    )
}

export default App
