import React from "react";

import "./NavBar-medium.css"

const NavBarMedium = () => (
<nav className="navbar__medium">
    <a className="navbar__medium-logo" href="#landing">&#35377;</a>

    <ul className="navbar__medium-links">
        <li className="opensans"><a href="#about">About</a></li>
        <li className="opensans"><a href="#skills">Skills</a></li>
        <li className="opensans"><a href="#projects">Projects</a></li>
    </ul>
</nav>
)

export default NavBarMedium