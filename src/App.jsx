import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/navbarComponent";
import FooterComponent from "./components/Footercomponent";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Interests from "./pages/Interests";
import Skill from "./pages/Skill";


function app() {
    return <div>
        <NavbarComponent />
        <Routes>
            <Route path="" Component={HomePage}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/experience" Component={Experience}></Route>
            <Route path="/education" Component={Education}></Route>
            <Route path="/skill" Component={Skill}></Route>
            <Route path="/interests" Component={Interests}></Route>
            <Route path="/awards" Component={Awards}></Route>
        </Routes>
        <FooterComponent />
    </div>
}

export default app;