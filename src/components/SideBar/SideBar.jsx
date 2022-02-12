import React from "react";

import { FaLinkedinIn } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import "./SideBar.css"

const SideBar = () => (
  <div className="sidebar">
    <div className="sidebar__logo">
      <p>&#35377;</p>
    </div>

    <div className="sidebar__vertical">
      <div className="sidebar__vertical-dash" />
    </div>

    <div className="sidebar__social">
      <a href="/"><HiOutlineMail color="#FFF" /></a>
      <a href="/"><FaLinkedinIn color="#FFF" /></a>
    </div>
  </div>
)

export default SideBar