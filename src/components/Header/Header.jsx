import React from "react";

import { RiCodeSSlashLine } from "react-icons/ri"

import "./Header.css"

const Header = props => (
  <div className="header">
    {props.backgroundSubtitle && (
      <div className="header__background-subtitle">{props.backgroundSubtitle}</div>    
    )}
    <div className="header__subtitle">{props.subtitle}</div>
    <RiCodeSSlashLine />
    <h1 className="header__title">{props.title}</h1>
  </div>
)

export default Header