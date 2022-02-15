import React from "react"

import Header from "../../../components/Header/Header"

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs} from "react-icons/io"
import { SiMongodb, SiReact, SiNextdotjs, SiSass} from "react-icons/si"

import "./Skills.css"

const Grid = () => (
  <div className="grid-container">
    {/* 20 divs */}
    <div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" />
    {/* 20 divs */}
    <div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" />
    {/* 20 divs */}
    <div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" />
    {/* 20 divs */}
    <div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" />
    {/* 20 divs */}
    <div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" /><div className="grid-item" />
  </div>
)

const Skills = () => (
  <section className="skills" id="skills">

    <div className="skills__container">
      <div className="skills__container-row">
        <div className="skills__skill html"><IoLogoHtml5 /></div>
        <div className="skills__skill css"><IoLogoCss3 /></div>
        <div className="skills__skill sass"><SiSass /></div>
      </div>

      <div className="skills__container-row">
        <div className="skills__skill js"><IoLogoJavascript /></div>
        <div className="skills__header">
          <Header subtitle="My Skills" title="What I Enjoy" />
        </div>
        <div className="skills__skill react"><SiReact /></div>
      </div>
      
      <div className="skills__container-row">
        <div className="skills__skill next"><SiNextdotjs /></div>
        <div className="skills__skill node"><IoLogoNodejs /></div>
        <div className="skills__skill mongo"><SiMongodb /></div>
      </div>
    </div>

    <Grid />

    <div className="skills__small">
      <div className="skills__header">
          <Header subtitle="My Skills" title="What I Enjoy" />
      </div>
      
      <div className="skills__small-container">
      <div className="skills__skill"><IoLogoHtml5 /></div>
        <div className="skills__skill"><IoLogoCss3 /></div>
        <div className="skills__skill"><SiSass /></div>
        <div className="skills__skill"><IoLogoJavascript /></div>
        <div className="skills__skill"><SiReact /></div>
        <div className="skills__skill"><SiNextdotjs /></div>
        <div className="skills__skill"><IoLogoNodejs /></div>
        <div className="skills__skill"><SiMongodb /></div>
      </div>
    </div> 

  </section>
)

export default Skills