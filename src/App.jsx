import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import Examples from "./pages/Examples";
import Earlmgr from "./pages/Earlmgr";
import Home from "./pages/Home";
import InvalidPage from "./pages/InvalidPage";

// function Doxygen() {
//     window.location.href = "./doxygen/index.html";
// }
// <Route path="/source" element={<Doxygen />} />

function App() {
    return (
        <BrowserRouter basename="/EARL-web">
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/examples" element={<Examples />} />
                <Route path="/earlmgr" element={<Earlmgr />} />
                <Route path="*" element={<InvalidPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
