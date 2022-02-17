import React from "react";

import "./NavBar-small.css"

const NavBarSmall = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="navbar__small">
            <div className="navbar__small-logo" onClick={() => { setToggleMenu(true) }}>
                &#35377;
            </div>
            
            {toggleMenu && (
            <div className="navbar__small-overlay slide">
                <div className="navbar__small-close" onClick={() => { setToggleMenu(false) }}>
                    &#35377;
                </div>

                <ul className="navbar__small-links">
                    <li><a href="#about" onClick={() => { setToggleMenu(false) }}>About</a></li>
                    <li><a href="#skills" onClick={() => { setToggleMenu(false) }}>Skills</a></li>
                    <li><a href="#projects" onClick={() => { setToggleMenu(false) }}>Projects</a></li>
                </ul>
            </div>
            )}
        </nav>
    )
}

export default NavBarSmall

