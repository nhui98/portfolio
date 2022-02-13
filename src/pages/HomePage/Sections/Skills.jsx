import React from "react"

import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs} from "react-icons/io"
import { SiMongodb, SiReact, SiNextdotjs, SiSass} from "react-icons/si"

import Header from "../../../components/Header/Header"

const Skills = () => (
  <section className="skills" id="skills">
    <Header subtitle="What I Use" />
    <h1 className="skills__header">Technology</h1>
    <div className="skills__container">
      <IoLogoHtml5 />
      <IoLogoCss3 />
      <SiSass />
      <IoLogoJavascript />
      <SiReact />
      <SiNextdotjs />
      <IoLogoNodejs />
      <SiMongodb />
    </div>
  </section>
)

export default Skills