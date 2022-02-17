import React from "react"

import Header from "./../../../../components/Header/Header"

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs} from "react-icons/io"
import { SiMongodb, SiReact, SiNextdotjs, SiSass } from "react-icons/si"

import "./Skills-small.css"

const SkillsSmall = () => (
    <div className="skills__small">
      <div className="skills__header">
          <Header subtitle="My Skills" title="What I Enjoy" backgroundSubtitle="Skills" />
      </div>
      
      <div className="skills__small-container">
        <div className="skills__small-skill"><IoLogoHtml5 /></div>
        <div className="skills__small-skill"><IoLogoCss3 /></div>
        <div className="skills__small-skill"><SiSass /></div>
        <div className="skills__small-skill"><IoLogoJavascript /></div>
        <div className="skills__small-skill"><SiReact /></div>
        <div className="skills__small-skill"><SiNextdotjs /></div>
        <div className="skills__small-skill"><IoLogoNodejs /></div>
        <div className="skills__small-skill"><SiMongodb /></div>
      </div>
    </div> 
)

export default SkillsSmall
