import React from "react";

import Landing from "./Sections/Landing";
import About from "./Sections/About";
import Skills from "./Sections/Skills";

const HomePage = () => (
  <div className="homepage">
    <Landing />
    <About />
    {/* <Skills /> */}
  </div>
)

export default HomePage