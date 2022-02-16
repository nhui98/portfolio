import React from "react";

import { FaLinkedinIn } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

import "./NavBar.css"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
  <>
    {/* Navbar large device*/}
    <nav className="navbar">    
      <ul className="navbar__links">
        <li className="opensans"><a href="#about">About</a></li>
        <div className="navbar__links-dash" />
        <li className="opensans"><a href="#skills">Skills</a></li>
        <div className="navbar__links-dash" />
        <li className="opensans"><a href="#projects">Projects</a></li>
        <div className="navbar__links-dash" />
        <li className="opensans"><a href="#education">Education</a></li>
      </ul>

      <div className="vertical">
        <div className="navbar__vertical-dash" />
      </div>
    </nav>

    {/* Sidebar */}
    <aside className="sidebar navbar ">
      <a className="sidebar-logo" href="#landing">&#35377;</a>

      <div className="vertical">
        <div className="sidebar__vertical-dash" />
      </div>

      <div className="sidebar__social">
        <a href="mailto:hui.nathan9@gmail.com"><HiOutlineMail color="#FFF" /></a>
        <a href="https://www.linkedin.com/in/nathan-hui"><FaLinkedinIn color="#FFF" /></a>
      </div>
    </aside>

    {/* Navbar - medium to large device*/}
    <nav className="navbar__medium">
      <a className="navbar__medium-logo" href="#landing">&#35377;</a>

      <ul className="navbar__medium-links">
        <li className="opensans"><a href="#about">About</a></li>
        <li className="opensans"><a href="#skills">Skills</a></li>
        <li className="opensans"><a href="#projects">Projects</a></li>
        <li className="opensans"><a href="#education">Education</a></li>
      </ul>
    </nav>

    {/* Navbar - small to medium device*/}
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
              <li><a href="#education" onClick={() => { setToggleMenu(false) }}>Education</a></li>
            </ul>
          </div>
        )}
    </nav>
  </>
  )
}

export default Navbar