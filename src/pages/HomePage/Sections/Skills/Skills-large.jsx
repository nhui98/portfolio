import React from "react"

import Header from "./../../../../components/Header/Header"

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs} from "react-icons/io"
import { SiMongodb, SiReact, SiNextdotjs, SiSass } from "react-icons/si"

import "./Skills-large.css"

const SkillsLarge = () => (
    <div className="skills__container">
        <div className="skills__container-row">
        <div className="skills__skill html"><IoLogoHtml5 /></div>
        <div className="skills__skill css"><IoLogoCss3 /></div>
        <div className="skills__skill sass"><SiSass /></div>
        </div>

        <div className="skills__container-row">
        <div className="skills__skill js"><IoLogoJavascript /></div>
        <div className="skills__header">
            <Header subtitle="My Skills" title="What I Enjoy" backgroundSubtitle="Skills" />
        </div>
        <div className="skills__skill react"><SiReact /></div>
        </div>
        
        <div className="skills__container-row">
        <div className="skills__skill next"><SiNextdotjs /></div>
        <div className="skills__skill node"><IoLogoNodejs /></div>
        <div className="skills__skill mongo"><SiMongodb /></div>
        </div>
    </div>
)

export default SkillsLarge
