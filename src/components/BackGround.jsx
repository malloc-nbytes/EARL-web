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

function BackGround({children}) {
    return (
        <div className={mainClassName}>
            {children}
        </div>
    );
}

export default BackGround;
