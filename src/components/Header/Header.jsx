import React from "react";

import { RiCodeSSlashLine } from "react-icons/ri"

import "./Header.css"

const Header = (props) => (
  <div className="header">
    <p className="header__subtitle">{props.subtitle}</p>
    <RiCodeSSlashLine />
    <h1 className="header__title">{props.title}</h1>
  </div>
)

export default Header