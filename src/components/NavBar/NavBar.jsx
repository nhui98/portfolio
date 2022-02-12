import React from "react";

import "./NavBar.css"

const Navbar = () => (
  <nav className="navbar">
    
    <ul className="navbar__links">
      <li className="opensans"><a href="about">About</a></li>
      <div className="navbar__links-dash" />
      <li className="opensans"><a href="skills">Skills</a></li>
      <div className="navbar__links-dash" />
      <li className="opensans"><a href="projects">Projects</a></li>
      <div className="navbar__links-dash" />
      <li className="opensans"><a href="education">Education</a></li>
    </ul>

    <div className="navbar__vertical">
      <div className="navbar__vertical-dash" />
    </div>

  </nav>
)

export default Navbar