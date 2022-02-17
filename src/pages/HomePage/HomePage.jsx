import React from "react";

import Navbar from "../../components/NavBar/NavBar"
import Landing from "./Sections/Landing/Landing";
import About from "./Sections/About/About";
import Skills from "./Sections/Skills/Skills";
import Projects from "./Sections/Projects/Projects";

const HomePage = () => (
  <main className="homepage" style={{ minWidth: "300px" }}>
    <Navbar />
    <Landing />
    <About />
    <Skills />
    <Projects />
  </main>
)

export default HomePage