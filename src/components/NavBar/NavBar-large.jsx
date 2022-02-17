import React from "react";

import { FaLinkedinIn } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

import "./NavBar-large.css"

const NavBarLarge = () => (
    <>  
        {/* Navbar */}
        <nav className="navbar">    
            <ul className="navbar__links">
            <li className="opensans"><a href="#about">About</a></li>
            <div className="navbar__links-dash" />
            <li className="opensans"><a href="#skills">Skills</a></li>
            <div className="navbar__links-dash" />
            <li className="opensans"><a href="#projects">Projects</a></li>
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
                <a href="mailto:hui.nathan9@gmail.com" rel="noreferrer" target="_blank"><HiOutlineMail color="#FFF" /></a>
                <a href="https://www.linkedin.com/in/nathan-hui" rel="noreferrer" target="_blank"><FaLinkedinIn color="#FFF" /></a>
            </div>
        </aside>
    </>
)

export default NavBarLarge
