import React from "react";

import Navbar from "../../components/NavBar/NavBar"
import Landing from "./Sections/Landing";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";

const HomePage = () => (
  <div className="homepage" style={{ minWidth: "300px" }}>
    <Navbar />
    <Landing />
    <About />
    <Skills />
    <Projects />
  </div>
)

export default HomePage